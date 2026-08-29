import { definePage, metadataFor } from "@/lib/page";
import ShareLinks from "@/components/ShareLinks";
import NewsSidebar from "@/components/NewsSidebar";

const ROUTE = "/apprentice-of-the-month";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Apprentice of the Month - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-Fom_NwrK\\#0 .el-item{padding-left: 25px;}#template-Fom_NwrK\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h1 className="uk-h2 uk-text-center">
                    {c.t("s.5.1.1.1.1.h1", "Apprentice of the Month")}        
</h1>
</div>
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>
<div className="uk-width-3-4@m uk-visible@m">
</div>
<NewsSidebar c={c} route={ROUTE} base="s.5.1.3.3" shareId="template-Fom_NwrK#0" latestId="template-Fom_NwrK#1" latestTitleClass="el-title uk-card-title" activeCategory={2} />
</div>
                                </div>                
</div>
  </>
));
