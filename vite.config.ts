import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type {Plugin} from 'vite';
import {defineConfig} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Copies build.outDir → ./tripleapainting (Render publish-dir compatibility). Uses configResolved paths so CI/bundled config is reliable. */
function mirrorRenderPublishDir(): Plugin {
  let srcDir = '';
  let destDir = '';
  return {
    name: 'mirror-render-publish-dir',
    apply: 'build',
    configResolved(config) {
      const root = config.root;
      srcDir = path.resolve(root, config.build.outDir);
      destDir = path.join(root, 'tripleapainting');
    },
    closeBundle() {
      if (!srcDir) {
        console.warn('mirror-render-publish-dir: skip (outDir not resolved)');
        return;
      }
      if (!fs.existsSync(srcDir)) {
        console.warn('mirror-render-publish-dir: skip (missing):', srcDir);
        return;
      }
      fs.rmSync(destDir, {recursive: true, force: true});
      fs.cpSync(srcDir, destDir, {recursive: true});
      console.log(`mirror-render-publish-dir: copied ${srcDir} → ${destDir}`);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), mirrorRenderPublishDir()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
