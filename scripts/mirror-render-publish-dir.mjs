/**
 * Copies ./dist → ./tripleapainting so Render deploys succeed when the service
 * publish directory is still set to "tripleapainting" (Vite outputs to dist only).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'dist');
const dest = path.join(root, 'tripleapainting');

if (!fs.existsSync(src)) {
  console.error('mirror-render-publish-dir: dist/ missing; run vite build first');
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log('mirror-render-publish-dir: copied dist/ → tripleapainting/');
