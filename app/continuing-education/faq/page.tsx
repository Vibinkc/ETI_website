import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/continuing-education/faq";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "FAQ - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/continuing-education" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.3.1.a", "<span property=\"name\">Continuing Education</span>") }} />
            <meta property="position" content="2" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.5.1.span", "FAQ")}</span>            <meta property="position" content="3" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Frequently Asked Questions")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.4.div", "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.") }} />
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-wm01.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician using a large drill.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
<div id="page#3" className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-small" id="page#2">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    <div className="uk-panel uk-text-lead uk-margin-bottom" id="page#0"><div>
<h1 className="elHead">{c.t("s.7.1.1.1.1.1.0.1.h1", "General Information")}</h1>
</div></div>
<div className="uk-accordion-default uk-margin-remove-top uk-width-2xlarge uk-margin-auto" uk-accordion="collapsible: true;" id="page#1">
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "Where do I sign up for the General Electrician state exam? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.3.1.0.p", "You can obtain a copy of the exam application in person at our Training Center, or obtain it online at <a href=\"https://www.dir.ca.gov/DLSE/ECU/ECUCertforms.htm\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the DIR website. Opens in a new browser tab.\">https://www.dir.ca.gov/DLSE/ECU/ECUCertforms.htm</a>.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "Are there classes available to help me study for the exam? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.3.3.1.0.p", "In-person exam prep classes may be offered as continuing education classes each semester.")}</p></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "Do I need to be a member of IBEW 569 to take continuing education classes? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.5.3.1.div", "Classes are available to members of IBEW Local 569 (Journeyman, Apprentices, CWs, CEs), travelers from other locals (only if they are currently working with a Local 569 contractor), NECA members and retired Local 569 members.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "How many hours of continued education are required to renew my General Electrician State Certification? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.3.1.0.p", "You are required to complete 32 hours of continuing education by an approved training facility within 3 years of receiving your certification. For further information refer to the DIR website <a href=\"https://www.dir.ca.gov/dlse/ecu/electricaltrade.html\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the DIR website. Opens in a new browser tab.\">https://www.dir.ca.gov/dlse/ecu/electricaltrade.html</a>.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "How do I get proof of my continuing education hours? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">For a copy of your transcript for classes taken at the Electrical Training Institute, email us at <joomla-hidden-mail is-link="1" is-email="1" first="aW5mbw==" last="c2RldHQub3Jn" text="aW5mb0BzZGV0dC5vcmc=" base="">{c.t("s.7.1.1.1.1.3.9.3.1.1.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail> or call us at (858) 569-6633.</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "How do I renew my General Electrician State Certification? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.3.1.0.p", "You can obtain a copy of the renewal application in person at our Training Center or obtain it online at <a href=\"https://www.dir.ca.gov/DLSE/ECU/ECUCertforms.htm\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the DIR website. Opens in a new browser tab.\">https://www.dir.ca.gov/DLSE/ECU/ECUCertforms.htm</a>. Please keep in mind that you can renew your license up to one year prior to the expiration date.") }} /></div>                
    
    </div>
</div>    
</div>
                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>

                
            </main>
    </>
  );
}
