import { definePage, metadataFor } from "@/lib/page";

const ROUTE = "/resources";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Resources - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1 div.logoSM .el-image{height:90px; width: auto}#page\\#1 div.logoM .el-image{height:100px; width: auto}" }} />
<div className="uk-section uk-padding-remove-vertical">
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-large uk-card-body uk-flex uk-flex-middle">    
                        <div className="uk-panel uk-width-1-1">            
<h1 className="uk-h2">
                    {c.t("s.5.1.1.1.1.1.h1", "Resources")}        
</h1><div className="uk-panel uk-text-lead uk-margin">{c.t("s.5.1.1.1.1.2.div", "The Electrical Training Institute apprenticeship programs are part of a much larger world of unions and the electrical industry. The following are various resources to help you now or in the future.")}</div>
                        </div>            
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/resources.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician tools in a tool holder and also on a table")} /></picture>    
</div>
        </div>    
</div>
</div>
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin" id="page#0"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.1.0.1.h2", "General Resources")}</h2>
</div></div>
</div>
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div id="page#1" className="uk-margin uk-text-center">
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-grid-column-small uk-grid-row-medium uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.ibew569.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="662" height="128" src={c.m("s.7.1.3.1.1.1.1.1.1.1.0.img", "/images/assets/logos/ibew569-logo.png")} alt={c.a("s.7.1.3.1.1.1.1.1.1.1.0.img", "IBEW 569 logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.1.1.1.3.div", "Union representing electrical workers in San Diego and Imperial Counties.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.1.1.1.5.0.div", "ibew569.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column logoM">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://ibew.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="129" height="129" src={c.m("s.7.1.3.1.1.1.3.1.1.1.0.img", "/images/assets/logos/ibew-logo.png")} alt={c.a("s.7.1.3.1.1.1.3.1.1.1.0.img", "ibew logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.3.1.1.3.div", "International Brotherhood of Electrical Unions - North America\u2019s largest electrical union.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.3.1.1.5.0.div", "ibew.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column logoSM">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.necasandiego.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="290" height="171" src={c.m("s.7.1.3.1.1.1.5.1.1.1.0.img", "/images/assets/logos/necaSD.png")} alt={c.a("s.7.1.3.1.1.1.5.1.1.1.0.img", "NECA San Diego logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.5.1.1.3.div", "Represents union electrical contractors and partners with IBEW to support training, safety and quality electrical construction.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.5.1.1.5.0.div", "necasandiego.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://electricaltrainingalliance.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="253" height="62" src={c.m("s.7.1.3.1.1.1.7.1.1.1.0.img", "/images/assets/logos/Electrical-Training-Alliance-logo.png")} alt={c.a("s.7.1.3.1.1.1.7.1.1.1.0.img", "Electrical Training Alliance logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.7.1.1.3.div", "The training partner of the IBEW and NECA, providing industry-endorsed curriculum, education standards, and learning resources.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.1.7.1.1.5.0.div", "electricaltraining<br>alliance.org") }} /></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://sdbuildingtrades.com/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="600" height="306" src={c.m("s.7.1.3.1.1.1.9.1.1.1.0.img", "/images/assets/logos/sdbt-logo.png")} alt={c.a("s.7.1.3.1.1.1.9.1.1.1.0.img", "San Diego Building and Construction Trades Council logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.9.1.1.3.div", "A coalition of affiliated construction unions representing skilled workers and advocating for quality jobs across San Diego County.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.9.1.1.5.0.div", "sdbuildingtrades.com")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column logoM">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.palomar.edu/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="574" height="318" src={c.m("s.7.1.3.1.1.1.11.1.1.1.0.img", "/images/assets/logos/PalomarCollege-logo.png")} alt={c.a("s.7.1.3.1.1.1.11.1.1.1.0.img", "Palomar College logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.11.1.1.3.div", "A public two-year community college serving North San Diego County with career education, certificates, and degree programs.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.11.1.1.5.0.div", "palomar.edu")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.khanacademy.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="210" height="34" src={c.m("s.7.1.3.1.1.1.13.1.1.1.0.img", "/images/assets/logos/Khan-Academy-logo.png")} alt={c.a("s.7.1.3.1.1.1.13.1.1.1.0.img", "Khan Academ ogo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.13.1.1.3.div", "A nonprofit learning platform offering free, self-paced lessons and practice across math, science and other subjects.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.13.1.1.5.0.div", "khanacademy.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://workforce.org/ccj" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="432" height="144" src={c.m("s.7.1.3.1.1.1.15.1.1.1.0.img", "/images/assets/logos/SanDiegoWorkforcePartnership-logo.png")} alt={c.a("s.7.1.3.1.1.1.15.1.1.1.0.img", "San Diego Workforce Partnership logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.15.1.1.3.div", "Connects job seekers, employers and training providers to career resources and workforce development opportunities across the region.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.15.1.1.5.0.div", "workforce.org/ccj")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
{/* This one link stays on http. calapprenticeship.org serves https, but the
    certificate it presents is self-signed and expired in October 2021, so
    switching the scheme gives every visitor a browser interstitial instead of
    the site. Nothing here can fix that -- it needs a new certificate from
    them. Checked 2026-08-28; worth retrying, and the moment https loads
    cleanly this should change. */}
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="http://www.calapprenticeship.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="212" height="67" src={c.m("s.7.1.3.1.1.1.17.1.1.1.0.img", "/images/assets/logos/cal-apprenticeship-logo.png")} alt={c.a("s.7.1.3.1.1.1.17.1.1.1.0.img", "Cal Apprenticeship logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.17.1.1.3.div", "Promotes apprenticeship opportunities across California and helps connect prospective apprentices with state-registered training programs.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.17.1.1.5.0.div", "calapprenticeship.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.dir.ca.gov/databases/das/aigstart.asp" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="93" height="66" src={c.m("s.7.1.3.1.1.1.19.1.1.1.0.img", "/images/assets/logos/das-logo.png")} alt={c.a("s.7.1.3.1.1.1.19.1.1.1.0.img", "California Department of Industrial Relations logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.19.1.1.3.div", "The California Division of Apprenticeship Standards (DAS) administers California apprenticeship law and oversees standards for wages, training, working conditions and program quality.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.19.1.1.5.0.div", "dir.ca.gov")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.osha.gov/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="133" height="38" src={c.m("s.7.1.3.1.1.1.21.1.1.1.0.img", "/images/assets/logos/osha-logo.png")} alt={c.a("s.7.1.3.1.1.1.21.1.1.1.0.img", "OSHA logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.21.1.1.3.div", "The Occupational Safety and Health Administration protects workers by setting and enforcing safety standards and providing training, outreach, education and assistance.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.21.1.1.5.0.div", "osha.gov")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-overlay uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://www.unionplus.org/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="162" height="57" src={c.m("s.7.1.3.1.1.1.23.1.1.1.0.img", "/images/assets/logos/union-plus-logo.png")} alt={c.a("s.7.1.3.1.1.1.23.1.1.1.0.img", "Unon Plus logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.23.1.1.3.div", "Provides union members and families access to savings, discounts, scholarships and benefits through union-supported programs.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.23.1.1.5.0.div", "unionplus.org")}</div></div>        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column logoSM">
        <a className="uk-card-hover uk-flex-1 uk-card uk-card-primary uk-card-small uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="https://in2veep.com/" target="_blank" rel="noreferrer">    
        <picture><img className="el-image" width="300" height="256" src={c.m("s.7.1.3.1.1.1.25.1.1.1.0.img", "/images/assets/logos/VEEP_Logo.png")} alt={c.a("s.7.1.3.1.1.1.25.1.1.1.0.img", "VEEP logo")} /></picture>
                <div className="el-content uk-panel uk-text-small uk-text-left uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.3.1.1.1.25.1.1.3.div", "A pre-apprenticeship program helping veterans transition into electrical careers through training, mentorship, and direct apprenticeship pathways.")}</div>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.7.1.3.1.1.1.25.1.1.5.0.div", "in2veep.com")}</div></div>        
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
