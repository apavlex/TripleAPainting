import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type {Plugin} from 'vite';
import {defineConfig, loadEnv} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function siteUrlFromEnv(mode: string): string {
  const env = loadEnv(mode, process.cwd(), '');
  return (env.VITE_SITE_URL || 'https://tripleapainting.com').replace(/\/$/, '');
}

function htmlSeoPlugin(siteUrl: string): Plugin {
  return {
    name: 'html-seo',
    transformIndexHtml(html) {
      return html.replaceAll('@@SITE_URL@@', siteUrl);
    },
  };
}

function staticSeoFilesPlugin(siteUrl: string): Plugin {
  return {
    name: 'static-seo-files',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots);
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
    },
  };
}

export default defineConfig(({mode}) => {
  const siteUrl = siteUrlFromEnv(mode);
  return {
    plugins: [react(), tailwindcss(), htmlSeoPlugin(siteUrl), staticSeoFilesPlugin(siteUrl)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true,
        },
      },
    },
  };
});
