// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical URLs, og:url, the sitemap and robots.txt all derive from this.
  // Precedence: an explicit SITE_URL, then the production host Vercel injects,
  // then an obviously-fake placeholder so a misconfigured build is visible
  // rather than silently canonicalising to the wrong domain.
  site:
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://connecteverything.example'),
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
