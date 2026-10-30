import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// Limita a qué sitios puede hablar la versión estática, donde el navegador guarda la clave de Gemini.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  'font-src https://fonts.gstatic.com',
  "img-src 'self' data: blob:",
  "connect-src 'self' https://generativelanguage.googleapis.com",
  "worker-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

const staticSiteCsp = (): Plugin => ({
  name: 'static-site-csp',
  transformIndexHtml: () =>
    process.env.VITE_STATIC_SITE
      ? [{tag: 'meta', attrs: {'http-equiv': 'Content-Security-Policy', content: CONTENT_SECURITY_POLICY}, injectTo: 'head-prepend'}]
      : [],
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), staticSiteCsp()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
