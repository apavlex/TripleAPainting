/**
 * After `vite build`, dist/ is complete (including public/). Copy to tripleapainting/
 * so Render works if Publish directory is still "tripleapainting".
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'dist');
const dest = path.join(root, 'tripleapainting');

if (!fs.existsSync(src)) {
  console.error('duplicate-build-output: dist/ missing');
  process.exit(1);
}
fs.rmSync(dest, {recursive: true, force: true});
fs.cpSync(src, dest, {recursive: true});
console.log(`duplicate-build-output: copied ${src} → ${dest}`);
