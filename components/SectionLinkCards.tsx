import Link from "next/link";

type Accessor = { t: (k: string, d: string) => string };

export type SectionCard = { href: string; title: string };

/**
 * The row of tiles a section's landing page uses to point at its sub-pages.
 *
 * Each apprenticeship and the trainee section has one. They differ only in
 * how many tiles there are, where each goes and how the grid is told to lay
 * them out; the CMS numbers the tiles in odd steps, so their keys follow from
 * position.
 */
export default function SectionLinkCards({
  c,
  cards,
  grid = "uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-grid-medium uk-grid-divider uk-grid-match",
  panelId = "page#0",
  titleClass = "el-title uk-h5 uk-margin-top uk-margin-remove-bottom",
  linkClass = "uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle",
}: {
  c: Accessor;
  cards: SectionCard[];
  /** how UIkit is told to lay the tiles out */
  grid?: string;
  /** the original UIkit id, kept because page CSS selects on it */
  panelId?: string;
  /** the trainee section spaces its tile titles differently */
  titleClass?: string;
  /** and centres the tile contents */
  linkClass?: string;
}) {
  return (
<div className="uk-section-default uk-section">
                                <div className="uk-container">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div id={panelId} className="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center">
        <div className={grid} uk-grid="">                {cards.map((card, i) => (
                <div key={card.href}>
<div className="el-item uk-flex uk-flex-column">
        <Link className={linkClass} href={card.href}>
                <h2 className={titleClass}>{c.t(`s.7.1.1.1.1.1.${2 * i + 1}.1.1.1.h2`, card.title)}</h2>
        </Link>
</div></div>
        ))}</div>
</div>
</div>
</div>
                                </div>
</div>
  );
}
