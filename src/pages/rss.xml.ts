import type { APIRoute } from 'astro';
import { RESOURCES } from '../data/resources';
import { recentResources } from '../lib/recent';

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Hand-written rather than @astrojs/rss: the shape is small and this keeps the
 * dependency count at zero. Descriptions are the card copy, so the feed is
 * readable on its own.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://connecteverything.example');
  const items = recentResources(RESOURCES);

  const entries = items
    .map((resource) => {
      return [
        '    <item>',
        `      <title>${escape(resource.title)}</title>`,
        `      <link>${escape(resource.url)}</link>`,
        `      <guid isPermaLink="false">${escape(`connect-everything:${resource.id}`)}</guid>`,
        `      <pubDate>${new Date(`${resource.dateAdded}T09:00:00Z`).toUTCString()}</pubDate>`,
        `      <category>${escape(resource.category)}</category>`,
        `      <description>${escape(resource.description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>Connect Everything — recently added</title>',
    `    <link>${base.href}</link>`,
    `    <atom:link href="${new URL('/rss.xml', base).href}" rel="self" type="application/rss+xml" />`,
    '    <description>A hand-curated library of the useful internet. This feed carries the newest additions.</description>',
    '    <language>en</language>',
    `    <lastBuildDate>${new Date(`${items[0]?.dateAdded ?? '2026-01-01'}T09:00:00Z`).toUTCString()}</lastBuildDate>`,
    entries,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
