"use client";

import { useEffect, useState } from "react";

/** Never hold the page back longer than this, whatever is still loading. */
const MAX_WAIT_MS = 12000;
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
 * It stays up until the page has actually finished loading -- `load`, not some
 * proxy for it.
 *
 * Two earlier attempts each waited on a proxy and each let the header through.
 * `document.fonts.ready` resolves once the faces the document knows about have
 * settled, and at first paint it knows about none, because the theme stylesheet
 * declaring them is still in flight; it resolved almost at once. Waiting for
 * the stylesheets to apply got further but still fell short: the theme's top bar
 * is laid out by UIkit's JS, not by CSS alone, so between the last stylesheet
 * and UIkit initialising, the toolbar links stack. Measured on the live host,
 * the cover was lifting at 6.5s while UIkit only arrived at 8.0s -- a second and
 * a half of stacked header, which is exactly what the cover exists to hide.
 *
 * `load` is the one signal that covers all of it: stylesheets, images, and the
 * scripts that do the laying out. The hero video does not hold it back
 * measurably -- load landed under a second after UIkit on a cold, cache-disabled
 * run -- so the objection that ruled `load` out before does not hold.
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

    // `load` has fired once every stylesheet, image and script is in -- which
    // includes the theme JS that lays the top bar out.
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") return resolve();
      window.addEventListener("load", () => resolve(), { once: true });
    });

    // Belt and braces: an empty `.every()` is true, so if a stylesheet has yet
    // to be inserted this alone would pass. It is here to catch a sheet that
    // arrives after load, not to stand on its own.
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

    // All three, in order: the page finished loading, every stylesheet is in
    // effect, and the webfonts have settled so nothing reflows after the fade.
    loaded
      .then(() => sheets)
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
