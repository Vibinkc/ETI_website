import ShareLinks from "@/components/ShareLinks";

type Accessor = {
  t: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

/**
 * The sticky right-hand column on the news pages: Share Us, Latest News and
 * Categories.
 *
 * All seven news and listing pages carry this same column. They were each
 * built separately though, so a few cosmetic details drifted apart -- one page
 * heads the share card with an h4 where the rest use a div, the card titles
 * carry different UIkit classes, and each page marks its own category active.
 * Those differences are the props; nothing here changes what any page renders.
 */
export default function NewsSidebar({
  c,
  route,
  base,
  shareId,
  latestId,
  shareTag = "div",
  latestTitleClass = "el-title uk-h3",
  categoriesTitleClass = "el-title uk-h3",
  activeCategory = null,
}: {
  c: Accessor;
  /** the page's own route, for the share links */
  route: string;
  /** CMS key prefix for this column, e.g. "s.7.1.1.3" */
  base: string;
  /** original UIkit element ids, kept so the page's own CSS still matches */
  shareId: string;
  latestId: string;
  /** the element the "Share Us" heading uses -- also part of its CMS key */
  shareTag?: "div" | "h4";
  latestTitleClass?: string;
  categoriesTitleClass?: string;
  /** 0 News, 1 Events, 2 Apprentice of the Month, null when none is current */
  activeCategory?: number | null;
}) {
  const ShareHeading = shareTag;
  return (
<div className="js-sticky uk-width-1-4@m">
                                <div className="uk-panel uk-position-z-index" uk-sticky="end: !.js-sticky; media: @m;">                
                    <hr className="uk-margin-large-bottom uk-hidden@m" /><div className="uk-panel uk-margin-top uk-margin-medium-bottom uk-visible@m">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1 uk-visible@m">
<div className="uk-grid-item-match uk-width-1-1 uk-visible@m">
        <div className="uk-card-default uk-card uk-card-small uk-card-body">    
<ShareHeading className="uk-h3 uk-visible@m">
                    {c.t(`${base}.1.2.1.1.1.1.${shareTag}`, "Share Us")}        
</ShareHeading>
<div id={shareId} className="uk-margin-small-top uk-text-center uk-visible@m">    <ShareLinks route={route} /></div>
        </div>    
</div>
</div></div><div className="uk-panel uk-margin-top">
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
<div className="uk-width-2-3@s uk-width-1-1@m">
<div className="uk-card uk-card-body uk-card-primary tm-child-list" id={latestId}>
        <div className={latestTitleClass}>{c.t(`${base}.1.3.1.1.1.1.div`, "Latest News")}</div>    
<ul className="latestnews">
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.1.1.3.1.li`, "<a href=\"/news/congratulations-veep-sd05-graduates\">Congratulations VEEP SD05 Graduates</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.1.1.3.3.li`, "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Welcome San Diego Building Trades High School Girls Boot Camp</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.1.1.3.5.li`, "<a href=\"/news/castle-park-high-school-visits-eti\"> Castle Park High School Visits ETI </a>") }} />
    </ul>
</div>
</div>
<div className="uk-grid-item-match uk-width-1-3@s uk-width-1-1@m">
        <div className="uk-card-default uk-card uk-card-small uk-card-body">    
<div className="uk-panel tm-child-list">
        <div className={categoriesTitleClass}>{c.t(`${base}.1.3.1.3.1.1.1.div`, "Categories")}</div>    
    <ul className="categories-module">
<li className={activeCategory === 0 ? "uk-active" : undefined} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.3.1.1.3.1.li`, "<a href=\"/news\">\n        News            </a>") }} />
<li className={activeCategory === 1 ? "uk-active" : undefined} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.3.1.1.3.3.li`, "<a href=\"/news-events\">\n        Events            </a>") }} />
<li className={activeCategory === 2 ? "uk-active" : undefined} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${base}.1.3.1.3.1.1.3.5.li`, "<a href=\"/apprentice-of-the-month\">\n        Apprentice of the Month            </a>") }} />
</ul>
</div>
        </div>    
</div>
</div></div>
                                </div>                
</div>
  );
}
