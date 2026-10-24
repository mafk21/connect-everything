import type { Resource } from '../data/resources';

/**
 * "New" is relative to the newest entry in the data, not to the clock — a
 * static build can go weeks without a deploy, and a wall-clock window would
 * silently empty the page. Twelve minimum, forty maximum.
 */
export const RECENT_WINDOW_DAYS = 90;
export const RECENT_MIN = 12;
export const RECENT_MAX = 40;

export function recentResources(resources: Resource[]): Resource[] {
  const newestFirst = [...resources].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  const newest = newestFirst[0]?.dateAdded;
  if (!newest) return [];

  const cutoff = new Date(`${newest}T00:00:00Z`);
  cutoff.setUTCDate(cutoff.getUTCDate() - RECENT_WINDOW_DAYS);
  const cutoffIso = cutoff.toISOString().slice(0, 10);

  const inWindow = newestFirst.filter((resource) => resource.dateAdded >= cutoffIso);
  return inWindow.length >= RECENT_MIN ? inWindow.slice(0, RECENT_MAX) : newestFirst.slice(0, RECENT_MIN);
}
