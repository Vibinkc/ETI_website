import { definePage, metadataFor } from "@/lib/page";
import ShareLinks from "@/components/ShareLinks";
import NewsSidebar from "@/components/NewsSidebar";

const ROUTE = "/news-events";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Events - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-Y_O7pP4p\\#0 .el-item{padding-left: 25px;}#template-Y_O7pP4p\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h1 className="uk-h2 uk-text-center">
                    {c.t("s.5.1.1.1.1.h1", "Events")}        
</h1>
</div>
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
<div className="uk-width-3-4@m uk-visible@m">
</div>
<NewsSidebar c={c} route={ROUTE} base="s.5.1.3.3" shareId="template-Y_O7pP4p#0" latestId="template-Y_O7pP4p#1" shareTag="h4" latestTitleClass="el-title uk-card-title" categoriesTitleClass="el-title" activeCategory={1} />
</div>
                                </div>                
</div>
  </>
));
