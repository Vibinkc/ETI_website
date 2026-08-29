import type { ReactNode } from "react";

type Accessor = {
  m: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
};

/**
 * The banner every section page opens with: wording on the left, a photo on
 * the right.
 *
 * Twenty-four pages carry one. The wording is what makes each page different
 * so it comes in as children -- the breadcrumb, the heading, the standfirst.
 * Everything else is the same nest of UIkit wrappers repeated verbatim, which
 * is what lives here.
 *
 * A handful of pages tweak the column widths or the card classes, and one or
 * two size the photo differently; those are the props with defaults, so a page
 * only mentions what it does unusually.
 */
export default function PageHero({
  c,
  image,
  children,
  leftWidth = "uk-width-3-5@m",
  leftCardClass = "uk-card-primary uk-card uk-card-body",
  rightWidth = "uk-width-2-5@m uk-visible@m",
  rightCardClass = "uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column",
  imageWrapClass = "uk-flex-1 uk-flex uk-margin uk-visible@m",
}: {
  c: Accessor;
  image: {
    /** CMS key for the photo */
    imgKey: string;
    src: string;
    alt: string;
    width: string;
    height: string;
    /** the original markup sets one of these, never both */
    aspectAuto?: boolean;
    lazy?: boolean;
  };
  children: ReactNode;
  leftWidth?: string;
  leftCardClass?: string;
  rightWidth?: string;
  rightCardClass?: string;
  imageWrapClass?: string;
}) {
  return (
<div className="uk-section uk-padding-remove-vertical">

<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" {...{ "uk-grid": "" }}>

<div className={`uk-grid-item-match ${leftWidth}`}>
        <div className={leftCardClass}>
{children}
        </div>
</div>
<div className={`uk-grid-item-match ${rightWidth}`}>
        <div className={rightCardClass}>

<div className={imageWrapClass}>
        <picture><img className="el-image" style={image.aspectAuto ? { aspectRatio: "auto" } : undefined} loading={image.lazy ? "lazy" : undefined} width={image.width} height={image.height} src={c.m(image.imgKey, image.src)} alt={c.a(image.imgKey, image.alt)} /></picture>
</div>

        </div>
</div>
</div>
</div>
  );
}
