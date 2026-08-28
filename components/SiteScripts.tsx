"use client";

import { useEffect } from "react";

type Item = { src?: string; code?: string; type?: string };

/**
 * The original page loaded UIkit, the YOOtheme runtime and Joomla's helpers as
 * plain blocking scripts. Here they have to run *after* React hydrates: UIkit
 * rewrites the markup it initialises (icons become inline SVG, drops get moved
 * in the tree), and doing that mid-hydration makes React bail on the tree.
 *
 * They are appended one at a time, each waiting for the previous to execute,
 * because the originals depend on document order — the YOOtheme config object
 * must exist before theme.js reads it, and UIkit must exist before the icon
 * registration call.
 */
const SCRIPTS: Item[] = [
  {
    "src": "/plugins/system/yooessentials/modules/element/elements/social_sharing_item/assets/asset4ae5.js?3.0.14-08110921"
  },
  {
    "src": "/media/vendor/awesomplete/js/awesomplete.mina714.js?1.1.7"
  },
  {
    "src": "/media/system/js/core.min23b9.js?a3d8f8"
  },
  {
    "src": "/media/com_finder/js/finder.min386d.js?755761",
    "type": "module"
  },
  {
    "src": "/media/system/js/joomla-hidden-mail.min4f8c.js?80d9c7",
    "type": "module"
  },
  {
    "src": "/media/system/js/messages.minee3c.js?9a4811",
    "type": "module"
  },
  {
    "src": "/templates/yootheme/vendor/assets/uikit/dist/js/uikit.min9de8.js?5.0.40"
  },
  {
    "src": "/templates/yootheme/vendor/assets/uikit/dist/js/uikit-icons.min9de8.js?5.0.40"
  },
  {
    "src": "/templates/yootheme/assets/site/js/theme9de8.js?5.0.40"
  },
  {
    "code": "window.yootheme ||= {}; yootheme.theme = {\"i18n\":{\"close\":{\"label\":\"Close\"},\"totop\":{\"label\":\"Back to top\"},\"marker\":{\"label\":\"Open\"},\"navbarToggleIcon\":{\"label\":\"Open Menu\"},\"paginationPrevious\":{\"label\":\"Previous page\"},\"paginationNext\":{\"label\":\"Next Page\"},\"searchIcon\":{\"toggle\":\"Open Search\",\"submit\":\"Submit Search\"},\"slider\":{\"next\":\"Next slide\",\"previous\":\"Previous slide\",\"slideX\":\"Slide %s\",\"slideLabel\":\"%s of %s\"},\"slideshow\":{\"next\":\"Next slide\",\"previous\":\"Previous slide\",\"slideX\":\"Slide %s\",\"slideLabel\":\"%s of %s\"},\"lightboxPanel\":{\"next\":\"Next slide\",\"previous\":\"Previous slide\",\"slideLabel\":\"%s of %s\",\"close\":\"Close\"}}};"
  },
  {
    "code": "UIkit.icon.add({\"fa6-solid--user-gear\":\"<svg xmlns=\\\"http:\\/\\/www.w3.org\\/2000\\/svg\\\" viewBox=\\\"0 0 640 512\\\" width=\\\"20\\\" height=\\\"20\\\"><path d=\\\"M224 0a128 128 0 110 256 128 128 0 110-256zm-45.7 304h91.4c11.8 0 23.4 1.2 34.5 3.3-2.1 18.5 7.4 35.6 21.8 44.8-16.6 10.6-26.7 31.6-20 53.3 4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3l-382.2.1C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8 10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4 7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1.7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4L546.3 442c-6.9 5.1-14.3 9.4-22.3 12.8v30.6c0 7-4.5 13.3-11.3 14.8-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8v-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3.7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2 3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9v-30.5zm92.1 133.5a48.1 48.1 0 10-96.1 0 48.1 48.1 0 1096.1 0z\\\"\\/><\\/svg>\"})"
  },
  {
    "code": "UIkit.icon.add({\"eti-logo\":\"<svg id=\\\"ETI_icon\\\" data-name=\\\"ETI icon\\\" xmlns=\\\"http:\\/\\/www.w3.org\\/2000\\/svg\\\" viewBox=\\\"0 0 87.13 74.14\\\"><defs><style>.cls-1 {fill: #68bd45;}.cls-2 {fill: #2c3863;}<\\/style><\\/defs><polygon class=\\\"cls-2\\\" points=\\\"81.35 11.47 85.26 0 72.55 0 68.43 11.49 81.35 11.47\\\"\\/><path class=\\\"cls-2\\\" d=\\\"M48.41,9.02h-7.25l3.19-9.02h25.48l-3.26,9h-5.42l-10.88,30.92h-12.72l10.86-30.91Z\\\"\\/><path class=\\\"cls-2\\\" d=\\\"M18.16.05h23.42l-3.23,8.96h-10.62l-2.18,6.21h12.61l-3.2,8.96h-12.56l-2.41,6.85h14.92l-3.14,8.9H4.18l5.49-15.72H0s12.83-8.99,12.83-8.99L18.16.05Z\\\"\\/><polygon class=\\\"cls-1\\\" points=\\\"67.38 14.8 80.09 14.81 71.38 39.9 87.13 39.88 58.52 74.14 69.31 45.51 56.59 45.51 67.38 14.8\\\"\\/><\\/svg>\"});"
  }
];

// Module-level: these are global, one-time side effects. The guard also keeps
// React's StrictMode double-mount in development from loading them twice.
let started = false;

export default function SiteScripts() {
  useEffect(() => {
    if (started) return;
    started = true;

    (async () => {
      for (const item of SCRIPTS) {
        await new Promise<void>((resolve) => {
          const el = document.createElement("script");
          if (item.type) el.type = item.type;
          if (item.src) {
            el.async = false;
            el.onload = () => resolve();
            el.onerror = () => resolve();
            el.src = item.src;
          } else {
            el.textContent = item.code ?? "";
          }
          document.body.appendChild(el);
          if (!item.src) resolve();
        });
      }
    })();
  }, []);

  return null;
}
