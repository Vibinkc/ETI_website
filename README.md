# ETI website — Next.js

The Electrical Training Institute site (`etiedu.org`), converted from the static
HTTrack mirror in `../etiedu.org` into a Next.js 16 App Router project.

```bash
npm run dev     # http://localhost:3000
npm run build   # all 42 routes prerender as static HTML
npm start
```

The site is **CMS-driven**: every editable string, image and video reads from
the CMS in `../eti_website_cms_backend`, falling back to the value the page
originally shipped with. See "Content" below.

## How the conversion works

Every page of the mirror was parsed and re-emitted as real JSX — `className`,
self-closing void elements, `style` objects, numeric props, `dangerouslySetInnerHTML`
only where the content genuinely is raw markup (inline `<style>` blocks, Joomla's
JSON option blobs, and `<template>` bodies, whose children must land in
`.content`). Nothing is injected as an HTML string at runtime.

```
app/                    42 routes, one page.tsx each, with per-page metadata
app/api/revalidate/     publish webhook the CMS calls
lib/content.ts          reads slot values from the CMS
components/
  Header.tsx            site header; active nav + logo size derived from route
  Footer.tsx            site footer; share links point at the current page
  PageShell.tsx         page wrapper + the `_home` state class
  SiteScripts.tsx       loads UIkit / YOOtheme / Joomla runtime after hydration
  Hero3D.tsx            scroll-driven 3D hero on the home page
  RichTextLinks.tsx     keeps links inside CMS rich text routing client-side
app/eti-3d-hero.css     the hero's visuals
tools/                  the converter (see below)
public/                 images, media, templates — served as-is from the mirror
types/eti.d.ts          types for the markup Joomla emits
```

### What became dynamic

Joomla stamped some things into the HTML server-side that a single shared
component now derives from the route, so all 42 pages share one header/footer:

| Was baked into each page | Now |
| --- | --- |
| `uk-active` on the current menu item | `navCls()` in `Header.tsx`, 35 nav items |
| Header logo `275x186` (home) vs `150x102` | `isHome` in `Header.tsx` |
| `<body class="_home">` | `PageShell.tsx` (both `._home` rules are descendant selectors) |
| Share URLs containing the page's own URL | `usePathname()` in `Footer.tsx` |

Internal page links are emitted as `next/link`, so navigation is client-side —
clicking through the site does zero full document loads. Links to assets,
external sites and the dead Joomla endpoints stay as plain `<a>`.

### Things worth knowing

- **Scripts load after hydration.** UIkit rewrites the markup it initialises
  (icons become inline SVG, drops get relocated). Running it during parse, the
  way the original page did, mutates the DOM out from under React. `SiteScripts`
  appends each script in the original document order, waiting for each to
  execute, because the YOOtheme config object must exist before `theme.js` reads
  it and UIkit must exist before the icon registration call.
- **Open menus are closed on navigation.** Every navigation used to be a full
  page load, which tore down whatever menu the visitor had open. Client-side
  routing keeps the document, so a dropdown clicked through would stay on screen
  over the new page — `CloseOverlaysOnRouteChange` closes navbar dropdowns, the
  mobile offcanvas and the search modal when the route changes.
- **One nested `<a>` was flattened.** The original footer wraps a link around
  another link. Browsers close the outer `<a>`, so emitting it verbatim made
  React's tree disagree with the parsed DOM and broke hydration on every page.
  The converter now closes it the same way the HTML parser does.
- **Stylesheets** are served from `public/` and linked with React 19's
  `precedence` so they hoist into `<head>`. The YOOtheme theme owns the design;
  `app/globals.css` only undoes what the Next scaffold would otherwise impose.
- `npm run lint` is clean apart from `no-img-element` advisories. The markup
  stays on `<img>` deliberately: the theme sizes images through its own classes
  and `uk-cover`/`aspect-ratio` styles, which `next/image`'s wrapper would
  fight.

### Not carried over

- The **croar.co chat widget** — a third-party script the mirror captured. It is
  the only content difference from the mirror: 2 images and its greeting text.
- **Form submissions and search** POST to Joomla endpoints (`/component/ajax`,
  `/component/finder`) that do not exist here, exactly as in the mirror.
- **YouTube embeds** need a network connection; only the thumbnails were
  mirrored (`public/yt/`).

## Regenerating

The pages are generated, not hand-edited. To re-run the conversion against the
mirror:

```bash
python tools/build_site.py
```

`tools/html2jsx.py` is the HTML→JSX converter: a `html.parser` subclass that
builds a well-formed tree (auto-closing the tags HTML lets you leave open),
maps attributes to React props, and rewrites mirror-relative URLs to routes and
`public/` paths. `tools/build_site.py` drives it — slicing header/footer out of
the home page, wiring the route-aware bits above, and writing every `page.tsx`.

Edits made directly to `app/**/page.tsx`, `components/Header.tsx`,
`components/Footer.tsx` or `components/SiteScripts.tsx` will be overwritten by a
re-run; change the converter instead. `Hero3D.tsx`, `PageShell.tsx`,
`types/eti.d.ts` and the CSS are hand-written and safe to edit.


## Content

Page layout is owned by this codebase; the words and media are owned by the CMS.
The generator turns every piece of editable content into a **slot** and emits a
call with the original value as the fallback:

```tsx
<h1 className="uk-heading-large">{c.t("s.5.3.1.1.1.1.h1", "Electrical Training Institute")}</h1>
<img src={c.m("s.7.1.1.1.1.1.1.img", "/images/assets/file-alt-solid.svg")} alt={c.a(...)} />
<div data-cms-rich dangerouslySetInnerHTML={{ __html: c.r("s.7...div", "Start a rewarding career<br>…") }} />
```

- `c.t` plain text · `c.r` rich text (HTML) · `c.m` media URL · `c.a` alt text
- **1,981 slots** across 43 pages — 1,168 text, 408 rich text, 404 images, 1 video
- A slot host is the outermost element whose children are all inline, so
  "meets <strong>real-world</strong> opportunity" is one editable field rather
  than three fragments
- Slot keys are structural (`s.5.3.1.1.1.1.h1`), so re-running the generator
  against changed markup keeps existing edits attached to the same place

**The fallback matters.** If the CMS is unreachable, or a slot has never been
edited, the page renders exactly what the original site shipped. The site never
depends on the CMS being up to display correctly.

### Publishing

Pages are static with `revalidate = 3600`. Saving in the CMS POSTs to
`/api/revalidate` with a shared secret, which drops that route's cache tag and
re-renders it on the next request — typically visible in a second or two. There
is no draft stage in the CMS: a saved edit is live.

```
CMS_API_URL=http://127.0.0.1:8001
REVALIDATE_SECRET=<must match the backend's REVALIDATE_SECRET>
```

### What is not editable

The **header is navigation, not content** — the menu structure, its routes and
the active-item logic stay in code, because turning nav items into free text
would break routing and the mega-menu. The footer *is* editable (contact
details, copy) and lives on the `/_global` page in the CMS.
