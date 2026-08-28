"""Generate the Next.js site from the HTTrack mirror, CMS-driven.

Page layout stays in code; every editable string, image and video becomes a
slot the CMS owns. Writes:
  eti_website/app/**/page.tsx     one route each, reading content by slot key
  eti_website/components/*.tsx    shared chrome
  cms_seed.json                   pages + slots + their original values
"""

import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from html import escape as html_escape
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from html2jsx import Rewriter, convert  # noqa: E402
from slotify import slotify  # noqa: E402

MIRROR = r'c:\Users\vibin\OneDrive\Desktop\etiorg\etiedu.org'
PROJ = r'c:\Users\vibin\OneDrive\Desktop\etiorg\eti_website'
APP = os.path.join(PROJ, 'app')
COMP = os.path.join(PROJ, 'components')
SEED = r'c:\Users\vibin\OneDrive\Desktop\etiorg\eti_website_cms_backend\cms_seed.json'

GLOBAL_ROUTE = '/_global'

# --------------------------------------------------------------------------
# 1. page inventory
# --------------------------------------------------------------------------
pages = []
for d, _, fs in os.walk(MIRROR):
    for f in fs:
        if f.endswith('.html'):
            rel = os.path.relpath(os.path.join(d, f), MIRROR)
            pages.append(rel.replace(os.sep, '/'))
pages.sort()
ROUTES = set(pages)


def route_of(rel):
    return '/' if rel == 'index.html' else '/' + rel[:-5]


def outdir_of(rel):
    return APP if rel == 'index.html' else os.path.join(APP, *rel[:-5].split('/'))


# ---------------------------------------------------------------- a11y ----
# The mirrored markup has three accessibility faults that are cheapest to fix
# here, once, rather than in 42 generated pages: icon-only links with nothing
# for a screen reader to announce, an untitled video frame, and text inputs
# labelled only by a placeholder. All three fixes add attributes and never
# change element order or tag names, so CMS slot keys are unaffected.

_A_TAG = re.compile(r'<a\b([^>]*)>(.*?)</a>', re.S | re.I)
_ICON = re.compile(r'uk-icon="icon:\s*([a-z0-9-]+)', re.I)

# A link with no text and no title still has a destination; these are the ones
# the mirror leaves entirely unnamed.
_HOST_NAMES = {
    'tradeschoolinc.com': 'TradeSchool',
    'sdett.org': 'Moodle',
    'protechskillsinstitute.org': 'Learning Management System',
    'electricaltraining.org': 'eBooks',
    'talech.com': 'ETI Store',
}


def _name_for_link(attrs, inner):
    """What a screen reader should announce for a link with no text."""
    title = re.search(r'title="([^"]*)"', attrs)
    if title and title.group(1).strip():
        return title.group(1).strip()

    icon = _ICON.search(inner)
    if icon:
        return icon.group(1).replace('-', ' ').title()

    href = re.search(r'href="([^"]*)"', attrs)
    if href:
        for host, name in _HOST_NAMES.items():
            if host in href.group(1):
                return name
    return None


def a11y(html):
    def fix_anchor(m):
        attrs, inner = m.group(1), m.group(2)
        if 'aria-label' in attrs.lower():
            return m.group(0)
        # a link that already reads as words needs nothing
        if re.sub(r'<[^>]+>', '', inner).strip():
            return m.group(0)
        label = _name_for_link(attrs, inner)
        if not label:
            return m.group(0)
        return '<a%s aria-label="%s">%s</a>' % (attrs, html_escape(label, quote=True), inner)

    out = _A_TAG.sub(fix_anchor, html)

    # every frame needs a name of its own
    out = re.sub(
        r'<iframe\b(?![^>]*\btitle=)([^>]*?)>',
        lambda m: '<iframe%s title="Video">' % m.group(1),
        out, flags=re.I)

    # a placeholder disappears as soon as someone types, so it cannot be the
    # only label; promote it to one the field keeps
    def fix_field(m):
        tag, attrs = m.group(1), m.group(2)
        if 'aria-label' in attrs.lower():
            return m.group(0)
        ph = re.search(r'placeholder="([^"]*)"', attrs)
        if not ph or not ph.group(1).strip():
            return m.group(0)
        label = ph.group(1).strip().rstrip('*').strip()
        return '<%s%s aria-label="%s">' % (tag, attrs, html_escape(label, quote=True))

    out = re.sub(r'<(input|textarea|select)\b([^>]*?)>', fix_field, out, flags=re.I)
    return out


# The mirror has no privacy policy, so the footer has no link to one. Adding it
# here rather than to the generated Footer.tsx means a regenerate keeps it, and
# the link becomes a CMS slot like every other footer item.
_LEGAL_LIST_END = re.compile(
    r'(Rules-regs\.pdf.*?</a></li>)(\s*</ul>)', re.S)

_PRIVACY_ITEM = """
<li class="el-item ">
<a class="uk-flex-left@m uk-flex-center el-link" href="/privacy-policy">
    <span class="el-image" uk-icon="icon: lock;"></span>
                    Privacy Policy
</a></li>"""

# A link wrapped around another link. The browser closes the outer one as soon
# as it meets the inner, leaving an empty anchor: a tab stop that announces
# nothing. Unwrapping the outer here produces the same DOM without it, and
# reaches the rich-text slots too, which the JSX converter never parses.
_NESTED_A = re.compile(
    r'<a\b[^>]*>\s*(<a\b[^>]*>.*?</a>)\s*</a>', re.S | re.I)


def unwrap_nested_links(html):
    previous = None
    while previous != html:
        previous = html
        html = _NESTED_A.sub(lambda m: m.group(1), html)
    return html


def add_privacy_link(html):
    if 'privacy-policy' in html:
        return html
    return _LEGAL_LIST_END.sub(
        lambda m: m.group(1) + _PRIVACY_ITEM + m.group(2), html, count=1)


def read(rel):
    with open(os.path.join(MIRROR, rel), encoding='utf-8', errors='ignore') as fh:
        return add_privacy_link(a11y(unwrap_nested_links(fh.read())))


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write(text)


def slice_main(s):
    a, b = s.find('<main id="tm-main">'), s.rfind('</main>')
    return s[a:b + len('</main>')]


def meta_of(s):
    t = re.search(r'<title>(.*?)</title>', s, re.S)
    d = re.search(r'<meta name="description" content="(.*?)"', s, re.S)
    import html as _h
    return (_h.unescape(t.group(1)).strip() if t else 'Electrical Training Institute',
            _h.unescape(d.group(1)).strip() if d else '')


def section_of(rel):
    """Top-level grouping for the CMS page list."""
    if rel == 'index.html':
        return 'Home'
    head = rel.split('/')[0]
    return (head[:-5] if head.endswith('.html') else head).replace('-', ' ').title()


# --------------------------------------------------------------------------
# 2. shared chrome
#    The header is navigation, so it stays in code. The footer carries contact
#    details and copy, so it becomes editable global content.
# --------------------------------------------------------------------------
home = read('index.html')
pre = home[home.find('<body'):home.find('<main id="tm-main">')]
post = home[home.rfind('</main>') + 7:]

hstart = pre.find('<header class="tm-header-mobile')
hend = pre.rfind('</header>') + len('</header>')
header_html = pre[hstart:hend]

fstart = post.find('<footer>')
fend = post.find('</footer>') + len('</footer>')
footer_html = post[fstart:fend]

header_jsx, hrw = convert(header_html, ROUTES, '')

footer_rw = Rewriter(ROUTES, '')
footer_jsx, footer_slots, footer_link = slotify(footer_html, footer_rw, key_prefix='ftr')
for s in footer_slots:
    s['group'] = 'Footer'

# --- active nav state: <li className="item-N"><a href="/route"> -------------
NAV_RE = re.compile(r'<li className="([^"]*)"><(a|Link) href="(/[^"]*)"')
header_jsx, n_nav = NAV_RE.subn(
    lambda m: '<li className={navCls("%s", "%s")}><%s href="%s"'
              % (m.group(1), m.group(3), m.group(2), m.group(3)), header_jsx)

# --- the header has two variants -------------------------------------------
# Home renders a tall logo (275x186) in a 210px panel that overlaps the hero;
# every other page renders a small one (150x102) in a panel sized by content.
HOME_RULE = '#module-117\\#1{height: 210px;}'
had_home_rule = HOME_RULE in header_html
header_jsx = header_jsx.replace(json.dumps(HOME_RULE)[1:-1], '')

LOGO_RE = re.compile(r'(<img[^>]*ETI_logo\.svg[^>]*?)width="275" height="186"')
header_jsx, n_logo = LOGO_RE.subn(
    r'\1width={isHome ? 275 : 150} height={isHome ? 186 : 102}', header_jsx)

# --- footer share links follow the current page ----------------------------
SHARE_RE = re.compile(r'href="([^"]*?)https%3A%2F%2Fetiedu\.org%2F([^"]*)"')
footer_jsx, n_share = SHARE_RE.subn(
    lambda m: 'href={"%s" + shareUrl + "%s"}' % (m.group(1), m.group(2)),
    footer_jsx)

write(os.path.join(COMP, 'Header.tsx'), '''"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Site header. This is navigation, not editable content — the menu structure,
 * its routes and the active-item logic live in code. Joomla stamped `uk-active`
 * on the current item server-side; here it is derived from the route, so it is
 * right on first paint.
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navCls = (base: string, href: string) => {
    const active =
      href === pathname || (href !== "/" && pathname.startsWith(href + "/"));
    return active ? base + " uk-active" : base;
  };

  return (
    <>
      {isHome ? (
        <style
          dangerouslySetInnerHTML={{ __html: "#module-117\\\\#1{height: 210px;}" }}
        />
      ) : null}
''' + header_jsx + '''
    </>
  );
}
''')

write(os.path.join(COMP, 'Footer.tsx'), '''"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { makeContent, type ContentData } from "@/lib/content";

/**
 * Site footer. Contact details and copy come from the CMS (the `/_global`
 * page); the share links follow whichever page is being viewed.
 */
export default function Footer({ content }: { content: ContentData }) {
  const c = makeContent(content);
  const pathname = usePathname();
  const shareUrl = encodeURIComponent("https://etiedu.org" + pathname);

  return (
''' + footer_jsx + '''
  );
}
''')

# --------------------------------------------------------------------------
# 3. head assets
# --------------------------------------------------------------------------
head_html = home[:home.find('</head>')]
rw_head = Rewriter(ROUTES, '')

css = []
for m in re.finditer(r'<link\b[^>]*>', head_html):
    tag = m.group()
    if 'stylesheet' not in tag and 'preload' not in tag:
        continue
    href = re.search(r'href="([^"]+)"', tag)
    if href:
        css.append(rw_head.url(href.group(1)))

scripts = []
for m in re.finditer(r'<script\b([^>]*)>(.*?)</script>', head_html, re.S):
    attrs, body = m.group(1), m.group(2)
    src = re.search(r'src="([^"]+)"', attrs)
    typ = re.search(r'type="([^"]+)"', attrs)
    if src:
        scripts.append(('src', rw_head.url(src.group(1)), typ.group(1) if typ else None))
    else:
        if typ and 'ld+json' in typ.group(1):
            continue                      # per-page SEO data, not layout chrome
        scripts.append(('inline', body, typ.group(1) if typ else None))

# Inert data blocks (Joomla reads them from the DOM) stay in the SSR HTML.
# Everything executable is loaded after hydration by <SiteScripts />.
inert, executable = [], []
for kind, payload, typ in scripts:
    if kind == 'inline' and typ and 'json' in typ:
        inert.append((payload, typ))
    else:
        executable.append({'src' if kind == 'src' else 'code': payload,
                           **({'type': typ} if typ else {})})

css_links = '\n'.join(
    '        <link rel="stylesheet" href="%s" precedence="default" />' % h
    for h in dict.fromkeys(css))
script_tags = '\n'.join(
    '        <script type="%s"\n          dangerouslySetInnerHTML={{ __html: %s }}\n        />'
    % (typ, json.dumps(payload)) for payload, typ in inert)

write(os.path.join(COMP, 'SiteScripts.tsx'), '''"use client";

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
const SCRIPTS: Item[] = ''' + json.dumps(executable, indent=2) + ''';

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
''')

write(os.path.join(APP, 'layout.tsx'), '''import type { Metadata } from "next";
import CloseOverlaysOnRouteChange from "@/components/CloseOverlaysOnRouteChange";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";
import Preloader from "@/components/Preloader";
import RichTextLinks from "@/components/RichTextLinks";
import SignUpForm from "@/components/SignUpForm";
import SiteScripts from "@/components/SiteScripts";
import { GLOBAL_ROUTE, getContentData } from "@/lib/content";
import "./globals.css";
import "./eti-preloader.css";
import "./eti-3d-hero.css";

export const metadata: Metadata = {
  title: "Electrical Training Institute",
  description: "Electrical Training Institute of San Diego & Imperial Counties",
  icons: { icon: "/images/assets/eti-only-logo.svg" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // footer copy and contact details are CMS-managed global content
  const global = await getContentData(GLOBAL_ROUTE);

  return (
    <html lang="en-gb" dir="ltr">
      <body>
''' + css_links + '''

        {/* Covers the page from the first frame; removes itself once webfonts
            settle. Without script there is nothing to remove it, so it is
            hidden outright in that case. */}
        <noscript>
          <style>{".eti-preloader{display:none}"}</style>
        </noscript>
        <Preloader />

        <div className="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
          <div className="uk-notification-message">
            <a href="#tm-main" className="uk-link-reset">
              Skip to main content
            </a>
          </div>
        </div>

        <PageShell>
          <Header />
          {children}
          <Footer content={global} />
        </PageShell>

        {/* Joomla reads these option blocks out of the DOM. */}
''' + script_tags + '''
        <SiteScripts />
        <CloseOverlaysOnRouteChange />
        <RichTextLinks />
        <SignUpForm />
      </body>
    </html>
  );
}
''')

# --------------------------------------------------------------------------
# 4. every page -> a CMS-driven route
# --------------------------------------------------------------------------
seed_pages = [{
    'route': GLOBAL_ROUTE,
    'title': 'Global (footer)',
    'meta_description': 'Content shared by every page',
    'section': 'Global',
    'sort_order': -1,
    'slots': footer_slots,
}]

report = []
for order, rel in enumerate(pages):
    src = read(rel)
    title, desc = meta_of(src)
    route = route_of(rel)
    rw = Rewriter(ROUTES, os.path.dirname(rel))
    jsx, slots, used_link = slotify(slice_main(src), rw)

    is_home = rel == 'index.html'
    imports = ['import type { Metadata } from "next";']
    if used_link:
        imports.append('import Link from "next/link";')
    if is_home:
        imports.append('import Hero3D from "@/components/Hero3D";')
    imports.append('import { getContent, pageMetadata } from "@/lib/content";')

    body = ('\n'.join(imports) + '\n\n'
            + 'const ROUTE = %s;\n\n' % json.dumps(route)
            + '// re-rendered on demand when the CMS publishes this page\n'
            + 'export const revalidate = 3600;\n\n'
            + 'export async function generateMetadata(): Promise<Metadata> {\n'
            + '  return pageMetadata(ROUTE, %s, %s);\n}\n\n'
              % (json.dumps(title), json.dumps(desc) if desc else 'undefined')
            + 'export default async function Page() {\n'
            + '  const c = await getContent(ROUTE);\n'
            + '  return (\n    <>\n'
            + (' ' * 6 + '<Hero3D />\n' if is_home else '')
            + jsx
            + '\n    </>\n  );\n}\n')

    write(os.path.join(outdir_of(rel), 'page.tsx'), body)

    seed_pages.append({
        'route': route,
        'title': title,
        'meta_description': desc or None,
        'section': section_of(rel),
        'sort_order': order,
        'slots': slots,
    })
    report.append((route, len(slots)))

# The privacy policy has no counterpart in the mirror, so it is generated from
# its own module rather than converted. It becomes a CMS page like any other.
import privacy_policy  # noqa: E402

seed_pages.append(privacy_policy.emit(APP, write))
report.append((privacy_policy.ROUTE, len(seed_pages[-1]['slots'])))

os.makedirs(os.path.dirname(SEED), exist_ok=True)
with open(SEED, 'w', encoding='utf-8', newline='\n') as fh:
    json.dump({'pages': seed_pages}, fh, indent=1, ensure_ascii=False)

total = sum(len(p['slots']) for p in seed_pages)
kinds = {}
for p in seed_pages:
    for s in p['slots']:
        kinds[s['kind']] = kinds.get(s['kind'], 0) + 1

print('routes written : %d (+ %s)' % (len(report), GLOBAL_ROUTE))
print('editable slots : %d  %s' % (total, kinds))
print('nav items route-aware: %d | logo: %d | share links: %d | home rule: %s'
      % (n_nav, n_logo, n_share, had_home_rule))
print('seed file      : %.1f KB' % (os.path.getsize(SEED) / 1024))
print('\nmost editable pages:')
for r, n in sorted(report, key=lambda x: -x[1])[:6]:
    print('   %-58s %4d slots' % (r, n))
