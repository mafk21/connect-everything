#!/usr/bin/env node
/**
 * Checks every URL in the library for dead links.
 *
 * Manual utility, not part of the build — a network hiccup should never fail a
 * deploy. Run it monthly, or before a big content push:
 *
 *     npm run links
 *
 * Uses HEAD first, falls back to GET for hosts that reject HEAD. A browser-ish
 * User-Agent avoids the 403s that some sites return to unknown clients.
 */

import { RESOURCES } from '../src/data/resources.ts';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';
const TIMEOUT_MS = 15000;
const CONCURRENCY = 6;

async function request(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,*/*' },
      signal: controller.signal,
    });
    return response.status;
  } finally {
    clearTimeout(timer);
  }
}

async function check(resource) {
  try {
    let status = await request(resource.url, 'HEAD');
    if (status === 405 || status === 403 || status === 501) {
      status = await request(resource.url, 'GET');
    }
    return { id: resource.id, url: resource.url, status, ok: status < 400 };
  } catch (error) {
    return { id: resource.id, url: resource.url, status: 0, ok: false, error: String(error) };
  }
}

async function pool(items, worker, size) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

const results = await pool(RESOURCES, check, CONCURRENCY);
const dead = results.filter((result) => !result.ok);
const slow = results.filter((result) => result.ok && result.status >= 300);

console.log(`Checked ${results.length} resources.`);
console.log(`  ${results.length - dead.length} reachable · ${dead.length} dead`);

if (slow.length) {
  console.log('\nRedirected (fine, but the URL could be updated):');
  slow.forEach((result) => console.log(`  ${result.status}  ${result.url}`));
}

if (dead.length) {
  console.log('\nDead links:');
  dead.forEach((result) =>
    console.log(`  ${result.status || 'ERR'}  ${result.id}  ${result.url}${result.error ? `  ${result.error}` : ''}`)
  );
  process.exitCode = 1;
}
