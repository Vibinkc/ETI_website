import { definePage, metadataFor } from "@/lib/page";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/continuing-education/state-certification-renewal";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "State Certification Renewal - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{line-height: 1.4em;padding: 10px;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-wm03.jpg", alt: "Electrician testing a power box" }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/continuing-education", html: "<span property=\"name\">Continuing Education</span>" }]} current="State Certification Renewal" title="State Certification Renewal" lead="Renew your certification with the State of California to remain eligible to work as an electrician." />
<div className="uk-section-default uk-section uk-section-medium-top uk-section-xsmall-bottom">
                                <div className="uk-container uk-container-small">                
<div className="uk-grid-margin uk-container uk-container-xsmall">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-card-overlay uk-card uk-card-body">    
                    <div className="uk-panel uk-margin">{c.t("s.7.1.1.1.1.1.1.div", "Under current law, anyone performing electrical work for a C-10 licensed contractor must hold a valid certification that meets the standards set by the Division of Labor Standards Enforcement (DLSE). For more information, visit:")}</div>
<div id="page#0" className="uk-margin-top uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.3.div", "<a class=\"el-content uk-button uk-button-default uk-button-small\" href=\"https://www.dir.ca.gov/dlse/ecu/ElectricalTrade.html\" download>\n    \n        Division of Labor Standards Enforcement - Electrician certification program    \n    \n</a>") }} />
        </div>    
</div>
        </div>    
</div>
                                </div>                
</div>
  </>
));
