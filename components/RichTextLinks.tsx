"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Keeps internal links inside CMS rich text routing client-side.
 *
 * Rich-text slots are injected as HTML, so the links in them are plain `<a>`
 * elements that React never sees and `next/link` cannot wrap. Without this, a
 * CTA that lives inside an editable block would trigger a full page reload
 * while the identical link elsewhere on the page would not.
 *
 * One delegated listener handles the lot: same-origin, plain left clicks with
 * no modifier and no `target` get routed; everything else behaves normally.
 */
export default function RichTextLinks() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      // links React rendered are already handled by next/link
      if (!anchor.closest("[data-cms-rich]")) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      event.preventDefault();
      router.push(href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
