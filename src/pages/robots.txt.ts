import type { APIRoute } from 'astro';

/**
 * Generated rather than static so the sitemap URL always matches the deployed
 * domain. `public/robots.txt` is gone: it hard-coded a placeholder host.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://connecteverything.example');
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('/sitemap-index.xml', base)}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
