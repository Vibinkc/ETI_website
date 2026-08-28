import { NextRequest, NextResponse } from "next/server";

/**
 * Server-side proxy for public form submissions.
 *
 * The browser posts here rather than straight to the CMS API, which keeps the
 * API's address off the public page and sidesteps CORS entirely. It also means
 * the API only has to be reachable from this server — in Docker it is not
 * published to the internet at all.
 */

const API_BASE =
  process.env.CMS_API_URL ?? process.env.NEXT_PUBLIC_CMS_API_URL ?? "http://127.0.0.1:8001";

// A submission is a handful of short answers; anything larger is not a person.
const MAX_BODY_BYTES = 64 * 1024;

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ form: string }> },
) {
  const { form } = await params;

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: "That submission is too large." }, { status: 413 });
  }

  try {
    const res = await fetch(`${API_BASE}/api/forms/${encodeURIComponent(form)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    // The API being down must not look like the visitor did something wrong.
    return NextResponse.json(
      { ok: false, message: "We could not save that just now. Please try again shortly." },
      { status: 502 },
    );
  }
}
