import NewsSidebar from "@/components/NewsSidebar";

type Accessor = {
  t: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
  m: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

export type NewsParagraph = {
  text: string;
  /** literal text the original template left after the paragraph */
  after?: string;
};

/**
 * A news article page.
 *
 * The three articles share every wrapper, every CMS key and the same sidebar;
 * what changes is the photo, the headline, the dateline, the body and which
 * neighbours the Prev/Next links point at. The CMS numbers the paragraphs and
 * the pager links in odd steps, so those keys are computed from position.
 */
export default function NewsArticle({
  c,
  route,
  image,
  title,
  metaHtml,
  paragraphs,
  pagination,
  pagerMargin = false,
}: {
  c: Accessor;
  route: string;
  image: { src: string; alt: string };
  title: string;
  /** the dateline, which carries its own markup */
  metaHtml: string;
  paragraphs: NewsParagraph[];
  /** Prev/Next links, as the markup the original emitted */
  pagination: string[];
  /** one article's pager carries UIkit's uk-margin attribute */
  pagerMargin?: boolean;
}) {
  return (
    <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-jqGalp-c\\#0 .el-item{padding-left: 25px;}#template-jqGalp-c\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section uk-padding-remove-vertical">
                                <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal">
<div className="uk-grid-margin uk-container uk-container-xlarge">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div className="uk-margin">
        <picture><img className="el-image" width="3000" height="1570" src={c.m("s.5.1.1.1.1.1.1.0.img", image.src)} alt={c.a("s.5.1.1.1.1.1.1.0.img", image.alt)} /></picture>
</div>
</div>
        </div>
</div>
                                </div>
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
                                <div className="uk-container">
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
<div className="uk-width-3-4@m">
<h1 className="uk-h2 uk-margin-bottom uk-width-2xlarge uk-margin-auto">
                    {c.t("s.7.1.1.1.1.h1", title)}
</h1><div className="uk-panel uk-text-meta uk-margin uk-width-2xlarge uk-margin-auto" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.2.div", metaHtml) }} /><div className="uk-panel uk-margin uk-width-2xlarge uk-margin-auto">{paragraphs.map((p, i) => (
<p key={i}>{c.t(`s.7.1.1.1.3.${2 * i}.p`, p.text)}{p.after}</p>
))}</div>
<nav className="uk-margin-medium-top uk-text-center">
    <ul className="uk-pagination uk-margin-remove-bottom uk-flex-center" uk-margin={pagerMargin ? "" : undefined}>
                        {pagination.map((html, i) => (
                        <li key={i} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`s.7.1.1.1.5.1.${2 * i + 1}.li`, html) }} />
                        ))}
    </ul>
</nav>
</div>
<NewsSidebar c={c} route={route} base="s.7.1.1.3" shareId="template-jqGalp-c#0" latestId="template-jqGalp-c#1" />
</div>
                                </div>
</div>
    </>
  );
}
