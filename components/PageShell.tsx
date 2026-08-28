"use client";

import { usePathname } from "next/navigation";

/**
 * The page wrapper Joomla emitted, plus the body-level state class it set.
 *
 * The original marked the home page with `<body class="_home">`; the theme uses
 * it for two rules that only apply there — the header's z-index (so the tall
 * logo can overlap the hero instead of being painted over by it) and the
 * navbar's fade-to-transparent gradient. Both are descendant selectors, so the
 * class works just as well on this wrapper, which lets the route decide it
 * during SSR — no flash on hydration.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const state = pathname === "/" ? " _home" : "";

  return (
    <div className={"tm-page-container uk-clearfix" + state}>
      <div className="tm-page uk-margin-auto">{children}</div>
    </div>
  );
}
