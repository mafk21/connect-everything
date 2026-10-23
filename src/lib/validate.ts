import { RESOURCES, type Resource } from '../data/resources';
import { CATEGORIES } from '../data/categories';
import { TAGS } from '../data/tags';

const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MIN_DESCRIPTION = 60;
const MAX_DESCRIPTION = 220;

/** Normalised URL used for duplicate detection (ignores protocol, www and trailing slash). */
function key(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.hostname.replace(/^www\./, '')}${parsed.pathname.replace(/\/$/, '')}`.toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

/**
 * Runs at build time. Anything thrown here fails the build, which is the point:
 * a broken entry should never reach the published library.
 */
export function validateResources(resources: Resource[] = RESOURCES): void {
  const problems: string[] = [];
  const ids = new Set<string>();
  const urls = new Map<string, string>();

  resources.forEach((resource, index) => {
    const where = `resources[${index}] (${resource.id || 'no id'})`;
    const fail = (message: string) => problems.push(`${where}: ${message}`);

    if (!ID.test(resource.id ?? '')) fail('id must be kebab-case, e.g. "mdn-web-docs"');
    else if (ids.has(resource.id)) fail(`duplicate id "${resource.id}"`);
    else ids.add(resource.id);

    if (!resource.title?.trim()) fail('title is empty');

    let parsedUrl: URL | null = null;
    try {
      parsedUrl = new URL(resource.url);
    } catch {
      fail(`url is not a valid absolute URL: ${resource.url}`);
    }
    if (parsedUrl) {
      if (parsedUrl.protocol !== 'https:') fail('url must use https');
      if (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') {
        fail('url points at localhost');
      }
      const shared = urls.get(key(resource.url));
      if (shared) fail(`duplicate url — already used by "${shared}"`);
      else urls.set(key(resource.url), resource.id);
    }

    const length = resource.description.trim().length;
    if (length < MIN_DESCRIPTION || length > MAX_DESCRIPTION) {
      fail(`description is ${length} characters; keep it between ${MIN_DESCRIPTION} and ${MAX_DESCRIPTION}`);
    }

    if (!CATEGORIES.some((category) => category.id === resource.category)) {
      fail(`unknown category "${resource.category}"`);
    }

    const tags = resource.tags ?? [];
    if (tags.length === 0) fail('needs at least one tag');
    if (tags.length > 5) fail(`has ${tags.length} tags; five is the maximum`);
    tags.forEach((tag) => {
      if (!TAGS.includes(tag)) fail(`unknown tag "${tag}" — add it to src/data/tags.ts first`);
    });
    if (new Set(tags).size !== tags.length) fail('has duplicate tags');

    if (!ISO_DATE.test(resource.dateAdded ?? '')) {
      fail(`dateAdded must be YYYY-MM-DD, got "${resource.dateAdded}"`);
    } else {
      const date = new Date(`${resource.dateAdded}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) fail(`dateAdded is not a real date: ${resource.dateAdded}`);
      else if (date.getTime() > Date.now() + 86_400_000) fail('dateAdded is in the future');
    }
  });

  if (problems.length > 0) {
    throw new Error(
      `\n\nThe library has ${problems.length} content problem(s):\n` +
        problems.map((problem) => `  · ${problem}`).join('\n') +
        '\n\nFix src/data/resources.ts and rebuild.\n'
    );
  }
}
