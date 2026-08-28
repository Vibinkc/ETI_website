type Accessor = {
  t: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

export type Crumb = { href: string; html: string };

/**
 * The schema.org breadcrumb trail.
 *
 * Twenty-four pages carry one of these and they only ever differ in how many
 * steps deep the page sits, so the trail itself lives here and each page
 * passes its own steps.
 *
 * The CMS addresses each crumb by position: the first link is `.1.1`, the
 * second `.3.1`, and so on in odd numbers, with the current page taking the
 * next one along. That is why the keys are computed rather than written out.
 *
 * The markup -- including the run of spaces inside each `li`, which the
 * original template emitted and which survives into the served HTML -- is
 * unchanged.
 */
export default function Breadcrumb({
  c,
  keyBase,
  links,
  current,
}: {
  c: Accessor;
  /** CMS key prefix for the trail, e.g. "s.5.1.1.1.1.1" */
  keyBase: string;
  /** every step before this page, outermost first */
  links: Crumb[];
  /** the current page's own label */
  current: string;
}) {
  return (
<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">

            {links.map((l, i) => (
            <li property="itemListElement" typeof="ListItem" key={l.href}>            <a href={l.href} property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${keyBase}.${2 * i + 1}.1.a`, l.html) }} />
            <meta property="position" content={String(i + 1)} />
            </li>
            ))}
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t(`${keyBase}.${2 * links.length + 1}.1.span`, current)}</span>            <meta property="position" content={String(links.length + 1)} />
            </li>
    </ul>
</nav>
  );
}
