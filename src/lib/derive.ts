import type { Resource } from '../data/resources';
import { CATEGORIES, type CategoryId } from '../data/categories';
import { TAGS } from '../data/tags';

/** `https://www.example.com/path` → `example.com` */
export function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

const FAVICON_ENDPOINT = 'https://www.google.com/s2/favicons';

/**
 * Remote favicon, sized for the 40px card tile (2x for retina).
 *
 * Fallback only: `scripts/fetch-favicons.mjs` writes local icons into
 * public/icons and a manifest into src/data/favicons.json, and those win.
 * Running `npm run icons` removes this call from the page entirely.
 */
export function remoteFaviconUrl(url: string): string {
  const domain = domainOf(url);
  return `${FAVICON_ENDPOINT}?domain=${encodeURIComponent(domain)}&sz=64`;
}

/** Muted, readable background colours for the monogram fallback. */
const MONOGRAM_COLOURS = [
  { bg: '#e8f1f0', fg: '#004847' },
  { bg: '#f0ece4', fg: '#6b5334' },
  { bg: '#e9edf4', fg: '#31465f' },
  { bg: '#f5eaea', fg: '#7a3f3f' },
  { bg: '#eceef0', fg: '#3f5054' },
];

/** Deterministic monogram shown if a favicon fails to load. */
export function monogramOf(title: string) {
  const letter = (title.trim()[0] ?? '?').toUpperCase();
  let hash = 0;
  for (let i = 0; i < title.length; i += 1) hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  return { letter, ...MONOGRAM_COLOURS[hash % MONOGRAM_COLOURS.length]! };
}

export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return '';
  const day = date.getUTCDate();
  const month = date.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' });
  return `${day} ${month}`;
}

export interface CountedOption {
  id: string;
  label: string;
  count: number;
}

/** Counts for the sidebar, computed from the whole library. */
export function categoryCounts(resources: Resource[]): CountedOption[] {
  return CATEGORIES.map((category) => ({
    id: category.id,
    label: category.label,
    count: resources.filter((resource) => resource.category === category.id).length,
  }));
}

export function tagCounts(resources: Resource[]): CountedOption[] {
  return TAGS.map((tag) => ({
    id: tag,
    label: tag,
    count: resources.filter((resource) => resource.tags.includes(tag)).length,
  })).filter((option) => option.count > 0);
}

/** `Red teaming` → `red-teaming`; used for /tag/<slug> URLs. */
export const tagSlug = (tag: string): string =>
  tag
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const categoryLabel = (id: CategoryId): string =>
  CATEGORIES.find((category) => category.id === id)?.label ?? id;

/** Search index: lowercased haystack per resource. */
export function searchHaystack(resource: Resource): string {
  return [
    resource.title,
    domainOf(resource.url),
    resource.description,
    resource.category,
    categoryLabel(resource.category),
    ...resource.tags,
  ]
    .join(' ')
    .toLowerCase();
}
