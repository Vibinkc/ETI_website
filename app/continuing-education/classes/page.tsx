import { definePage, metadataFor } from "@/lib/page";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/continuing-education/classes";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Classes - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%; font-weight: bold;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-g18.jpg", alt: "students in a classroom" }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/continuing-education", html: "<span property=\"name\">Continuing Education</span>" }]} current="Classes" title="Classes" lead="Continuing education helps electrical professionals stay sharp, stay qualified, and stay ahead in a changing industry. This section features training opportunities designed to strengthen skills, support certification requirements and promote long-term success in the union electrical trade." rightCardClass="uk-card-default uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column" />
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div id="page#0" className="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center">
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-flex-center uk-grid-medium uk-grid-match" {...{ "uk-grid": "" }}>                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding uk-margin-remove-first-child uk-link-toggle" href="/images/pdf/CET-Class-Schedule.pdf" target="_blank" download="">    
        <span className="uk-text-emphasis el-image" {...{ "uk-icon": "icon: file-pdf; width: 45; height: 45;" }}></span>
                <h2 className="el-title uk-h5 uk-text-primary uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.3.h2", "Current Class Schedule")}</h2>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding uk-margin-remove-first-child uk-link-toggle" href="/images/pdf/Signing-up-for-classes.pdf" target="_blank" download="">    
        <span className="uk-text-emphasis el-image" {...{ "uk-icon": "icon: file-pdf; width: 45; height: 45;" }}></span>
                <h2 className="el-title uk-h5 uk-text-primary uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.3.h2", "How to Sign Up for a Class")} </h2>        
        </a>    
</div></div>
                </div>
</div>
</div>
</div>
                                </div>                
</div>
  </>
));
