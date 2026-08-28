import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { routeTag } from "@/lib/content";

/**
 * Publish webhook. The CMS calls this after publishing a page, and the matching
 * route drops out of the cache and re-renders on the next request.
 *
 * Shared-secret guarded: without it, anyone could force the site to re-fetch.
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  let body: { route?: string; secret?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body" }, { status: 400 });
  }

  if (!secret || body.secret !== secret) {
    return NextResponse.json({ error: "Bad secret" }, { status: 401 });
  }

  const route = body.route;
  if (!route || !route.startsWith("/")) {
    return NextResponse.json(
      { error: "route is required and must start with /" },
      { status: 400 },
    );
  }

  // `{ expire: 0 }` drops the cached entry straight away rather than letting it
  // serve stale until the next cacheLife window
  revalidateTag(routeTag(route), { expire: 0 });

  return NextResponse.json({ revalidated: true, route, at: Date.now() });
}
