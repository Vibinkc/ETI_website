"use client";

import { useEffect, useState } from "react";

/** Never hold the page back longer than this, whatever is still loading. */
const MAX_WAIT_MS = 1800;
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
 * It waits for webfonts rather than for `load`: the theme's Poppins faces are
 * what visibly reflow the page, while `load` would also wait on the 19MB hero
 * video and leave the cover up for many seconds. A hard cap and a `<noscript>`
 * escape hatch mean it can never strand a visitor on a blank screen.
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

    const fonts =
      typeof document !== "undefined" && "fonts" in document
        ? document.fonts.ready
        : Promise.resolve();

    let settled = false;
    const once = () => {
      if (settled) return;
      settled = true;
      dismiss();
    };

    fonts.then(once).catch(once);
    const cap = setTimeout(once, MAX_WAIT_MS);

    return () => {
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
