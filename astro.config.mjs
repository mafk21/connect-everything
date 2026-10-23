// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://connecteverything.example',
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
      port: 4321,
    },
  },
});
