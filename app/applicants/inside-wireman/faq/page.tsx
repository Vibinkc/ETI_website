import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/inside-wireman/faq";

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

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}#page\\#4 .el-content{font-weight:bold;font-size:105%;}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.3.1.a", "<span property=\"name\">Applicants</span>") }} />
            <meta property="position" content="2" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants/inside-wireman" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.5.1.a", "<span property=\"name\">Inside Wireman</span>") }} />
            <meta property="position" content="3" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.7.1.span", "FAQ")}</span>            <meta property="position" content="4" />
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
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/et-Program-Overview.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician Trainee on a jobsite carring a cable.")} /></picture>    
    
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
<h2 className="elHead">{c.t("s.7.1.1.1.1.1.0.1.h2", "General Information")}</h2>
</div></div>
<div className="uk-accordion-default uk-margin-remove-top uk-width-2xlarge uk-margin-auto" uk-accordion="collapsible: true;" id="page#1">
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is the Inside Wireman Apprenticeship Program? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "The Inside Wireman Apprenticeship is a five-year training program designed to prepare apprentices for careers as Journeyman Inside Wiremen. The program combines paid on-the-job training with classroom instruction so apprentices can develop the technical knowledge and practical skills required in the electrical trade.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "How much on-the-job training is required? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.3.3.1.div", "Inside Wireman apprentices complete approximately 8,000 hours of on-the-job training working for licensed electrical contractors. Apprentices gain experience installing, maintaining, and troubleshooting electrical systems in commercial and industrial environments.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "How much classroom training is required? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.5.3.1.div", "Apprentices complete a minimum of 1,000 hours of related supplemental instruction during the program. Training includes classroom lectures, hands-on lab work, and online learning designed to reinforce skills learned in the field.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "What type of work does an Inside Wireman Apprentice perform? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.7.3.1.div", "Inside Wiremen install and maintain electrical systems found in commercial and industrial facilities. This work includes installing electrical conduits, wiring systems, cables, motor controls, and panelboards used to power buildings and equipment.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "Do Inside Wireman apprentices get paid? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.9.3.1.div", "Yes. Apprentices earn wages while receiving training. Pay increases at regular intervals as apprentices progress through the program and gain additional experience and skills.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "How often do apprentices receive raises? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Apprentices receive scheduled wage increases approximately every six months as they advance through each training period of the apprenticeship.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "Do apprentices receive benefits? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.13.3.1.div", "Yes. Apprentices working for signatory electrical contractors receive benefits that may include health coverage, retirement contributions, and other negotiated benefits through the collective bargaining agreement.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "What is the Pay scale for an Inside Wireman Apprentice? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><div className="uk-overflow-container">
<table className="uk-table uk-table-hover uk-table-striped uk-table-middle uk-table-responsive" style={{ border: "2px solid #031F4A" }}>
<thead style={{ backgroundColor: "#031f4a", color: "#fff" }}>
<tr>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.1.th", "Period (6 Months)")}</th>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.3.th", "% of Journeyman Wage")}</th>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.5.th", "Hourly Rate")}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.1.td", "1ST")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.3.td", "40%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.5.td", "$23.58")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.1.td", "2ND")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.3.td", "44%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.5.td", "$25.94")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.1.td", "3RD")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.3.td", "48%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.5.td", "$28.30")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.1.td", "4TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.3.td", "52%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.5.td", "$30.65")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.1.td", "5TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.3.td", "56%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.5.td", "$33.01")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.1.td", "6TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.3.td", "60%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.5.td", "$35.37")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.1.td", "7TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.3.td", "66%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.5.td", "$38.91")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.1.td", "8TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.3.td", "70%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.5.td", "$41.27")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.1.td", "9TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.3.td", "78%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.5.td", "$45.98")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.1.td", "10TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.3.td", "82%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.5.td", "$48.34")}</td>
</tr>

<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.1.td", "Journeyman Inside Wireman")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.3.td", "100%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.5.td", "$58.95")}</td>
</tr>
</tbody>
</table>
</div></div>                
    
    </div>
</div>    
</div>
                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-primary uk-section">
    
        
        
        
            
                
                    
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" uk-grid="">    
        
<div className="uk-width-3-5@m">
    
        
            
            
            
                
                    
<h1 className="uk-text-left@m uk-text-center">
    
        
                    {c.t("s.9.1.1.1.1.h1", "Are you Ready?")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-position-relative uk-margin uk-text-left@m uk-text-center" style={{ left: "3px", top: "-6px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.2.div", "Take the next step to the <br class=\"uk-hidden@s\">rest of your life.") }} />
                
            
        
    
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
    
        
            
            
                        <div className="uk-panel uk-width-1-1">            
                
                    
<div id="page#4" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div>
                
            
        
    
</div>

                
            </main>
    </>
  );
}
