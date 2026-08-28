/**
 * Content layer: reads page content from the CMS.
 *
 * Every editable string, image and video on the site is a *slot* addressed by a
 * structural key. The generated pages call `c.t()` / `c.r()` / `c.m()` / `c.a()`
 * with the key **and the original value** as a fallback, so the site renders
 * correctly even when the CMS is unreachable — a page that has never been
 * edited, or an API that is down, both fall back to what the site shipped with.
 */

export type ContentData = {
  route: string;
  title?: string;
  meta_description?: string | null;
  slots: Record<string, string>;
  alts?: Record<string, string>;
};

export type Content = {
  /** plain text slot */
  t: (key: string, fallback: string) => string;
  /** rich text slot — returned as HTML for dangerouslySetInnerHTML */
  r: (key: string, fallback: string) => string;
  /** media slot — image or video URL */
  m: (key: string, fallback: string) => string;
  /** alt text for a media slot */
  a: (key: string, fallback: string) => string;
  data: ContentData;
};

const API_BASE =
  process.env.CMS_API_URL ?? process.env.NEXT_PUBLIC_CMS_API_URL ?? "http://127.0.0.1:8001";

/** Cache tag for one route, so publishing that page revalidates just it. */
export const routeTag = (route: string) => `page:${route}`;

export const GLOBAL_ROUTE = "/_global";

const EMPTY = (route: string): ContentData => ({ route, slots: {}, alts: {} });

/**
 * Media stored in the CMS is served by the API, so those URLs need the API
 * origin prefixed. Anything already absolute, or served from /public, is left
 * alone.
 */
function resolveMedia(url: string): string {
  if (!url) return url;
  if (url.startsWith("/api/media/")) return API_BASE + url;
  return url;
}

export function makeContent(data: ContentData): Content {
  const slots = data.slots ?? {};
  const alts = data.alts ?? {};
  const pick = (key: string, fallback: string) => {
    const v = slots[key];
    return v === undefined || v === null ? fallback : v;
  };
  return {
    t: pick,
    r: pick,
    m: (key, fallback) => resolveMedia(pick(key, fallback)),
    a: (key, fallback) => alts[key] ?? fallback,
    data,
  };
}

/**
 * Fetch one route's content. Cached under a per-route tag; the CMS calls
 * /api/revalidate on publish, which invalidates exactly that tag.
 */
export async function getContentData(route: string): Promise<ContentData> {
  try {
    const res = await fetch(
      `${API_BASE}/api/content/page?route=${encodeURIComponent(route)}`,
      { next: { tags: [routeTag(route)], revalidate: 3600 } },
    );
    if (!res.ok) return EMPTY(route);
    return (await res.json()) as ContentData;
  } catch {
    // CMS unreachable — every slot falls back to its shipped value
    return EMPTY(route);
  }
}

export async function getContent(route: string): Promise<Content> {
  return makeContent(await getContentData(route));
}

/** Page <title>/<meta description>, overridable from the CMS. */
export async function pageMetadata(
  route: string,
  fallbackTitle: string,
  fallbackDescription?: string,
) {
  const data = await getContentData(route);
  return {
    title: data.title || fallbackTitle,
    description: data.meta_description || fallbackDescription || undefined,
  };
}
