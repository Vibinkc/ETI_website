"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type UIkitComponent = { hide?: (delay?: boolean) => void };
type UIkitGlobal = {
  drop?: (el: Element) => UIkitComponent | undefined;
  dropdown?: (el: Element) => UIkitComponent | undefined;
  offcanvas?: (el: Element) => UIkitComponent | undefined;
  modal?: (el: Element) => UIkitComponent | undefined;
};

/**
 * Closes any open UIkit overlay when the route changes.
 *
 * On the original site every navigation was a full page load, which tore the
 * open dropdown down for free. With client-side routing the document survives,
 * so a menu the visitor clicked through stays on screen over the new page —
 * the navbar dropdowns, the mobile offcanvas menu and the search modal all do
 * it. Nothing in UIkit watches the History API, so the route change has to tell
 * it to close.
 *
 * Only elements currently carrying `uk-open` are touched, so this never
 * initialises a component that wasn't already in use.
 */
export default function CloseOverlaysOnRouteChange() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    // nothing can be open on the first paint
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const uikit = (window as unknown as { UIkit?: UIkitGlobal }).UIkit;
    if (!uikit) return;

    document.querySelectorAll(".uk-open").forEach((el) => {
      try {
        if (el.classList.contains("uk-offcanvas")) {
          uikit.offcanvas?.(el)?.hide?.();
        } else if (el.classList.contains("uk-modal")) {
          uikit.modal?.(el)?.hide?.();
        } else if (
          el.classList.contains("uk-drop") ||
          el.classList.contains("uk-dropdown")
        ) {
          // `false` = hide now rather than after the usual grace delay
          (uikit.drop?.(el) ?? uikit.dropdown?.(el))?.hide?.(false);
        }
      } catch {
        // a component that isn't initialised is not our problem to fix
      }
    });
  }, [pathname]);

  return null;
}
