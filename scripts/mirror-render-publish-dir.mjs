/**
 * Runs after `vite build` via npm `postbuild`. Copies ./dist → ./tripleapainting
 * so Render works when Publish directory is "tripleapainting". Uses cwd (repo root on CI).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'dist');
const dest = path.join(root, 'tripleapainting');

if (!fs.existsSync(src)) {
  console.error('mirror-render-publish-dir: dist/ missing; run vite build first');
  process.exit(1);
}

fs.rmSync(dest, {recursive: true, force: true});
fs.cpSync(src, dest, {recursive: true});
console.log(`mirror-render-publish-dir: copied ${src} → ${dest}`);
