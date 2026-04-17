/**
 * Kie.ai OpenAI-compatible chat (see https://docs.kie.ai/ — e.g. Gemini 3.1 Pro).
 * API key must never be exposed to the browser; call only from server.js routes.
 */

const KIE_BASE = 'https://api.kie.ai';
const DEFAULT_CHAT_PATH = '/gemini-3.1-pro/v1/chat/completions';

function textMessage(role, text) {
  return {
    role,
    content: [{type: 'text', text}],
  };
}

/**
 * @param {object} opts
 * @param {{ role: string, content: string | unknown[] }[]} opts.messages
 * @param {boolean} [opts.stream]
 */
export async function kieChatCompletion({messages, stream = false}) {
  const key = process.env.KIE_API_KEY;
  if (!key || !String(key).trim()) {
    const err = new Error('KIE_API_KEY is not set');
    err.code = 'KIE_CONFIG';
    throw err;
  }

  const path = (process.env.KIE_CHAT_PATH || DEFAULT_CHAT_PATH).trim();
  const url = `${KIE_BASE}${path.startsWith('/') ? path : `/${path}`}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      stream,
      include_thoughts: false,
      reasoning_effort: 'high',
    }),
  });

  const raw = await res.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = {raw};
  }

  if (!res.ok) {
    const msg =
      data?.error?.message ||
      data?.msg ||
      (typeof data?.message === 'string' ? data.message : null) ||
      `Kie API error (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.body = data;
    throw err;
  }

  const choice = data?.choices?.[0];
  const message = choice?.message;
  let content = message?.content;
  if (Array.isArray(content)) {
    content = content
      .map((part) => {
        if (typeof part === 'string') return part;
        if (part?.type === 'text' && part.text) return part.text;
        return '';
      })
      .join('');
  }
  if (typeof content !== 'string') {
    content = '';
  }

  return {
    content: content.trim(),
    model: data?.model,
    usage: data?.usage,
    raw: data,
  };
}

export function buildProjectCoachMessages(projectDetails) {
  const system = `You are a concise, friendly painting project coach for Triple A Painting, a licensed residential and commercial painter in the Vancouver–Portland Pacific Northwest since 2005.
The customer is planning a project (not asking for a legal contract). Give practical, safety-aware prep tips and questions they should clarify before an estimate.
Rules:
- Keep the answer under 220 words unless the project is unusually complex.
- Use short bullet lists.
- Do not invent guarantees, prices, or timelines; suggest they confirm details on the call.
- Mention PNW-relevant notes only when useful (moisture, cedar, elastomeric, etc.).
- Tone: professional, warm, local-trustworthy.`;

  return [
    textMessage('system', system),
    textMessage(
      'user',
      `Here is what the homeowner shared about their painting project:\n\n${projectDetails}`,
    ),
  ];
}

export {textMessage, KIE_BASE, DEFAULT_CHAT_PATH};
