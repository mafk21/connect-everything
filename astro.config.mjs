// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://connecteverything.example',
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
