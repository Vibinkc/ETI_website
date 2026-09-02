"use client";

import { useEffect, useState } from "react";

/** Never hold the page back longer than this, whatever is still loading. */
const MAX_WAIT_MS = 5000;
/** How often to re-check whether the stylesheets have applied. */
const POLL_MS = 50;
/** Long enough that the cover reads as intentional rather than a flicker. */
const MIN_SHOW_MS = 400;
/** Must match the fade in components/preloaderCss.ts. */
const FADE_MS = 450;

/**
 * First-paint cover for the site.
 *
 * It is rendered in the server HTML so it covers the page from the very first
 * frame — mounting it on the client would let an unstyled flash through first,
 * which is the thing it exists to prevent.
 *
 * It waits for the stylesheets to apply and then for webfonts, rather than for
 * `load` -- `load` would also wait on the 19MB hero video and hold the cover up
 * for many seconds.
 *
 * Waiting on fonts alone was not enough. `document.fonts.ready` resolves once
 * the faces the document knows about have settled, and at first paint it knows
 * about none -- the theme stylesheet that declares them is still in flight. So
 * it resolved almost at once, the cover left around 850ms, and the theme CSS
 * landed after that: exactly the stacked, unstyled header the cover exists to
 * hide. The stylesheets have to be in before the font question means anything.
 *
 * A hard cap and a `<noscript>` escape hatch mean it can never strand a visitor
 * on a blank screen.
 */
export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const mountedAt = Date.now();
    let removeTimer: ReturnType<typeof setTimeout>;

    const dismiss = () => {
      const shownFor = Date.now() - mountedAt;
      const wait = Math.max(0, MIN_SHOW_MS - shownFor);
      setTimeout(() => {
        setLeaving(true);
        removeTimer = setTimeout(() => setGone(true), FADE_MS);
      }, wait);
    };

    // A link has applied once it has a .sheet; until then its rules are not in
    // effect, whatever the element's presence in the head suggests.
    const stylesheetsApplied = () =>
      [...document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')].every(
        (link) => link.sheet !== null,
      );

    let poll: ReturnType<typeof setInterval> | undefined;
    const sheets = new Promise<void>((resolve) => {
      if (stylesheetsApplied()) return resolve();
      poll = setInterval(() => {
        if (stylesheetsApplied()) resolve();
      }, POLL_MS);
    });

    // document.fonts.ready resolves to the FontFaceSet; the chain below only
    // cares that it settled
    const fonts: Promise<void> =
      typeof document !== "undefined" && "fonts" in document
        ? document.fonts.ready.then(() => undefined)
        : Promise.resolve();

    let settled = false;
    const once = () => {
      if (settled) return;
      settled = true;
      clearInterval(poll);
      dismiss();
    };

    // Stylesheets first: only once they are in does the font question have a
    // complete set of faces to answer about.
    sheets
      .then(() => fonts)
      .then(once)
      .catch(once);
    const cap = setTimeout(once, MAX_WAIT_MS);

    return () => {
      clearInterval(poll);
      clearTimeout(cap);
      clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`eti-preloader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <div className="eti-preloader-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/ETI_logo_lt.svg" alt="" aria-hidden="true" />
        <div className="eti-preloader-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
