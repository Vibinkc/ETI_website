import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/intelligent-transportation-systems/faq";

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
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants/intelligent-transportation-systems" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.5.1.a", "<span property=\"name\">Intelligent Transportation Systems</span>") }} />
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
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g06.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Instructor explaining cable connections to a femail Electrician Trainee in class")} /></picture>    
    
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
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is the Intelligent Transportation Systems (ITS) Apprenticeship? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "The ITS Apprenticeship is a training program that prepares apprentices for careers as Transportation Systems Electricians. The program combines paid on-the-job training with classroom instruction.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "What type of work does an ITS Electrician perform? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.3.3.1.0.p", "ITS Electricians install, maintain, and troubleshoot:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.1.li", "Traffic signal systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.3.li", "Street lighting systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.5.li", "Traffic detection loops")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.7.li", "Freeway fiber optic and CCTV systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.9.li", "Municipal electrical infrastructure")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.11.li", "Low-voltage transportation control systems")}</li>
</ul></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "How long is the program? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.5.3.1.0.p", "The program is four years in length.")}</p></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "How many training hours are required? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.7.3.1.div", "Apprentices complete approximately: 6,400 hours of on-the-job training and 802 hours of classroom instruction.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "What does on-the-job training include? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.9.3.1.div", "Apprentices work under the supervision of Journeyman Transportation Systems Electricians. Training includes underground installations, conduit systems, traffic signals, freeway fiber optics, CCTV systems, photovoltaic applications, and street lighting systems.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "What is the classroom schedule? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Apprentices attend classes two evenings per week including one evening lecture and one evening hands-on lab training. Competency assessments are required to progress through the program.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "Who assigns apprentices to contractors? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.13.3.1.div", "The Electrical Training Institute coordinates contractor assignments to ensure apprentices receive diverse training experiences.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "Is the program accredited? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.15.3.1.div", "Yes. The program is approved by the California Division of Apprenticeship Standards and the U.S. Department of Labor Office of Apprenticeship")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.17.1.a", "What certifications are awarded upon completion? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.17.3.1.0.p", "Graduates receive:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.1.li", "A Certificate of Achievement \u2013 Transportation Systems Electrician (Palomar Community College)")}</li>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.3.li", "A Completion Certificate from the California Division of Apprenticeship Standards")}</li>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.5.li", "A Completion Certificate from the U.S. Department of Labor")}</li>
</ul></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.19.1.a", "Is this a paid apprenticeship? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.19.3.1.div", "Yes. Apprentices earn wages while completing required training hours.")}</div>                
    
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
