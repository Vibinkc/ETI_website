import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getContent, pageMetadata, type Content } from "@/lib/content";

/**
 * The bits every route repeats.
 *
 * Each page is a scrape of the old site, so all forty-odd of them opened with
 * the same eight lines -- fetch this route's content, open a fragment, open
 * `<main>`, drop in the message container -- and closed with the matching
 * four. That was the single most repeated block in the codebase and none of
 * it was ever page-specific, so it lives here now.
 *
 * A page is left with what actually makes it that page: its route, its title
 * and its body.
 */

/**
 * Build the `generateMetadata` export for a route.
 *
 * Usage: `export const generateMetadata = metadataFor(ROUTE, "Title");`
 */
export function metadataFor(
  route: string,
  fallbackTitle: string,
  fallbackDescription?: string,
) {
  return async function generateMetadata(): Promise<Metadata> {
    return pageMetadata(route, fallbackTitle, fallbackDescription);
  };
}

/**
 * Build the default export for a route.
 *
 * Usage: `export default definePage(ROUTE, (c) => (<>...body...</>));`
 */
export function definePage(route: string, body: (c: Content) => ReactNode) {
  return async function Page() {
    const c = await getContent(route);
    return (
      <>
<main id="tm-main">


                <div id="system-message-container" aria-live="polite"></div>
{body(c)}
            </main>
    </>
    );
  };
}
