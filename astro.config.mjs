// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set SITE_URL at deploy time (or in .env) to the real domain; canonical
  // URLs, og:url, the sitemap and robots.txt all derive from it.
  site: process.env.SITE_URL ?? 'https://connecteverything.example',
  integrations: [sitemap()],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      // The sandbox preview proxy reaches the dev server through its own host.
      allowedHosts: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
});
