import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type {Plugin} from 'vite';
import {defineConfig} from 'vite';

/** Copies dist → tripleapainting after production build (Render publish-dir compatibility). Runs on any `vite build`, not only `npm run build`. */
function mirrorRenderPublishDir(): Plugin {
  return {
    name: 'mirror-render-publish-dir',
    apply: 'build',
    closeBundle() {
      const src = path.resolve(__dirname, 'dist');
      const dest = path.resolve(__dirname, 'tripleapainting');
      if (!fs.existsSync(src)) {
        return;
      }
      fs.rmSync(dest, {recursive: true, force: true});
      fs.cpSync(src, dest, {recursive: true});
      console.log('mirror-render-publish-dir: copied dist/ → tripleapainting/');
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
