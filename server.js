import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { buildProjectCoachMessages, kieChatCompletion } from './server/kieChat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

const staticDir = join(__dirname, 'dist');

const JSON_LIMIT = '32kb';

app.use(express.json({limit: JSON_LIMIT}));

app.post('/api/project-coach', async (req, res) => {
  const details = typeof req.body?.projectDetails === 'string' ? req.body.projectDetails.trim() : '';
  if (!details) {
    return res.status(400).json({error: 'projectDetails is required'});
  }
  if (details.length > 4000) {
    return res.status(400).json({error: 'projectDetails is too long (max 4000 characters)'});
  }

  try {
    const messages = buildProjectCoachMessages(details);
    const {content, model, usage} = await kieChatCompletion({messages, stream: false});
    if (!content) {
      return res.status(502).json({error: 'Empty response from AI. Try again in a moment.'});
    }
    return res.json({reply: content, model, usage});
  } catch (e) {
    const code = e?.code;
    if (code === 'KIE_CONFIG') {
      return res.status(503).json({
        error: 'AI assistant is not configured. Add KIE_API_KEY on the server.',
      });
    }
    const status = e?.status >= 400 && e?.status < 600 ? e.status : 502;
    const message = e?.message || 'Request failed';
    return res.status(status).json({error: message});
  }
});

app.use(express.static(staticDir));

app.get('*', (req, res) => {
  res.sendFile(join(staticDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
