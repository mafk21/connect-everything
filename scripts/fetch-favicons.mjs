/**
 * Download one favicon per domain into public/icons/ and record them in
 * src/data/favicons.json.
 *
 * Why: the cards used to load every icon live from a third-party service, which
 * meant up to 533 external requests per page view, a dependency that breaks
 * behind a strict CSP, and a privacy leak for a site whose pitch is "no
 * tracking". Fetching once at build time makes the page self-contained.
 *
 *     npm run icons            # only missing domains
 *     npm run icons -- --force # re-fetch everything
 *
 * Domains that fail are simply absent from the manifest; those cards fall back
 * to the monogram (and, until the first run, to the remote icon).
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'icons');
const manifestPath = join(root, 'src', 'data', 'favicons.json');

const force = process.argv.includes('--force');
const CONCURRENCY = 8;
const TIMEOUT_MS = 12000;

const { RESOURCES } = await import(join(root, 'src', 'data', 'resources.ts'));

const domainOf = (url) => new URL(url).hostname.replace(/^www\./, '');

const domains = [...new Set(RESOURCES.map((resource) => domainOf(resource.url)))].sort();

/** Content type → extension. Browsers are lenient, servers are not. */
const EXTENSIONS = new Map([
  ['image/png', 'png'],
  ['image/x-icon', 'ico'],
  ['image/vnd.microsoft.icon', 'ico'],
  ['image/jpeg', 'jpg'],
  ['image/gif', 'gif'],
  ['image/webp', 'webp'],
  ['image/svg+xml', 'svg'],
]);

const readJson = async (path, fallback) => {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch {
    return fallback;
  }
};

async function get(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'user-agent': 'connect-everything favicon fetcher (+https://github.com/mafk21/connect-everything)' },
    });
    if (!response.ok) return null;
    const type = (response.headers.get('content-type') ?? '').split(';')[0].trim();
    const buffer = Buffer.from(await response.arrayBuffer());
    // 1 KB is the size of a broken/empty response; 200 KB is not a favicon.
    if (buffer.length < 64 || buffer.length > 200_000) return null;
    return { buffer, type };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Try the site's own icon first, then a public aggregator. */
async function fetchIcon(domain) {
  const sources = [
    `https://${domain}/favicon.ico`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];

  for (const url of sources) {
    const result = await get(url);
    if (!result) continue;

    let extension = EXTENSIONS.get(result.type);
    if (!extension) {
      // Guess from the magic bytes when the server lies about the type.
      const head = result.buffer.subarray(0, 12);
      if (head[0] === 0x89 && head[1] === 0x50) extension = 'png';
      else if (head[0] === 0x00 && head[1] === 0x00 && head[2] === 0x01) extension = 'ico';
      else if (head.subarray(0, 3).toString() === 'GIF') extension = 'gif';
      else if (head[0] === 0xff && head[1] === 0xd8) extension = 'jpg';
      else extension = 'ico';
    }

    return { buffer: result.buffer, extension };
  }

  return null;
}

await mkdir(outDir, { recursive: true });

const manifest = force ? {} : await readJson(manifestPath, {});
const todo = domains.filter((domain) => force || !manifest[domain]);

console.log(`→ ${domains.length} domains, ${todo.length} to fetch${force ? ' (force)' : ''}`);

let done = 0;
const failed = [];
let cursor = 0;

async function worker() {
  while (cursor < todo.length) {
    const domain = todo[cursor++];
    const icon = await fetchIcon(domain);

    if (!icon) {
      failed.push(domain);
      continue;
    }

    const filename = `${domain}.${icon.extension}`;
    await writeFile(join(outDir, filename), icon.buffer);
    manifest[domain] = `/icons/${filename}`;
    done += 1;

    if (done % 25 === 0) console.log(`  … ${done}/${todo.length}`);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`);

console.log(`✓ ${Object.keys(sorted).length}/${domains.length} domains have a local icon`);

if (failed.length) {
  console.log(`✗ ${failed.length} failed (their cards fall back to a monogram):`);
  console.log(failed.map((domain) => `    ${domain}`).join('\n'));
}

if (domains.length && Object.keys(sorted).length === 0) {
  console.error('\nNo icons at all — this machine probably has no outbound network.');
  process.exit(1);
}
