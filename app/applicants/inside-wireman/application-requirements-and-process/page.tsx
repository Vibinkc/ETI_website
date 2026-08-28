import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/inside-wireman/application-requirements-and-process";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Application Requirements and Process - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{font-weight:bold;font-size:105%;}" }} />
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
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.7.1.span", "Application Requirements and Process")}</span>            <meta property="position" content="4" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Application Requirements and Process")}         
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "Before applying, make sure you meet the requirements below and have all required documents ready.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/et-how-to.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician Trainee working with a drill on a ladder.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-xsmall-bottom">
    
        
        
        
            
                                <div className="uk-container uk-container-small">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-card-overlay uk-card uk-card-body">    
        
            
            
            
                
                    <div className="uk-panel uk-margin-bottom"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.1.1.0.1.h2", "Application Requirements")}</h2>
</div></div><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.1.2.0.p", "Applicants must meet the following minimum requirements to apply for the Inside Wireman Apprenticeship:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.2.2.1.li", "17 1/2 years old")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.3.li", "High school diploma, GED, or CHSPE certificate")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.5.li", "Official transcripts required as proof of completion")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.7.li", "One year of high school algebra (two semesters), or")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.9.li", "One semester of college algebra, or")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.11.li", "Valid driver\u2019s license required")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.13.li", "Official high school or GED transcripts")}</li>
<li>{c.t("s.7.1.1.1.1.2.2.15.li", "Official transcripts or a certificate verifying completion of the algebra requirement")}</li>
</ul>
<p>{c.t("s.7.1.1.1.1.2.4.p", "Documents must be submitted in PDF format. Foreign transcripts must be translated into English by a certified translator.")}</p></div>
<div className="uk-margin-medium-top uk-text-center@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Application Flow Chart\" href=\"/images/pdf/ApplicationFlowChart.pdf\">\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Application Flow Chart    \n    \n</a>") }} />

                
            
        
        </div>    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container uk-container-small">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    <div className="uk-panel uk-margin-bottom"><div>
<h2 className="elHead">{c.t("s.9.1.1.1.1.0.1.h2", "How to Apply")}</h2>
</div></div><div className="uk-panel uk-margin">{c.t("s.9.1.1.1.2.div", "Applying to the Inside Wireman Apprenticeship Program is a multi-step process designed to identify qualified candidates for training in the electrical trade. Applicants must complete each step in order to be considered for selection.")}</div>
<h3 className="uk-h4">
    
        
                    {c.t("s.9.1.1.1.4.h3", "Step 1: Submit an Application")}        
        
    
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.5.0.p", "Applications are available online and may be submitted at any time.")}</p>
<ul>
<li>{c.t("s.9.1.1.1.5.2.1.li", "Applicants must upload required documents, including proof of high school completion and evidence of meeting the algebra requirement. A valid driver\u2019s license is required.")}</li>
<li>{c.t("s.9.1.1.1.5.2.3.li", "Applicants must demonstrate successful completion of:")}</li>
<li>{c.t("s.9.1.1.1.5.2.5.li", "One year of high school algebra (two semesters), or")}</li>
<li>{c.t("s.9.1.1.1.5.2.7.li", "One semester of college algebra, or")}</li>
<li>{c.t("s.9.1.1.1.5.2.9.li", "The Electrical Training Alliance Tech Math course")}</li>
<li>{c.t("s.9.1.1.1.5.2.11.li", "Official transcripts must be uploaded in PDF format. Foreign transcripts must be translated into English by a certified translator.")}</li>
</ul></div>
<h3 className="uk-h4">
    
        
                    {c.t("s.9.1.1.1.7.h3", "Step 2: Aptitude Test")}        
        
    
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.8.0.p", "Qualified applicants will be scheduled to take an aptitude test at ETI. The test measures algebra skills and reading comprehension and typically requires about three hours to complete. Test results are provided by email. Applicants who pass the aptitude test move forward to the interview stage. Free test preparation resources include:")}</p>
<ul>
<li>{c.t("s.9.1.1.1.8.2.1.li", "Electrical Training Alliance practice materials")}</li>
<li>{c.t("s.9.1.1.1.8.2.3.li", "Khan Academy algebra lessons")}</li>
</ul></div>
<h3 className="uk-h4">
    
        
                    {c.t("s.9.1.1.1.10.h3", "Step 3: Oral Interview")}        
        
    
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.11.0.p", "Applicants who pass the aptitude test will be scheduled for an oral interview with the Apprenticeship Committee. Interview scores determine placement in the Pool of Eligible Applicants, where applicants remain eligible for selection for up to two years. Selection timing depends on the needs of the electrical construction industry. Applicants may re-interview after one year if they gain electrical work experience or complete trade-related coursework.")}</p></div>
<h3 className="uk-h4">
    
        
                    {c.t("s.9.1.1.1.13.h3", "Step 4: Selection and Orientation")}        
        
    
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.14.0.p", "Selected applicants will be notified by email and phone. If selected, applicants must attend a scheduled orientation session.")}</p>
<p>{c.t("s.9.1.1.1.14.2.p", "After orientation paperwork is completed, applicants will be scheduled for a drug screening.")}</p>
<p>{c.t("s.9.1.1.1.14.4.p", "There are no tuition or registration fees for the program. Apprentices are responsible for purchasing required books and hand tools.")}</p>
<p>{c.t("s.9.1.1.1.14.6.p", "New apprentice classes are scheduled based on industry demand.")}</p></div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-primary uk-section">
    
        
        
        
            
                
                    
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" uk-grid="">    
        
<div className="uk-width-3-5@m">
    
        
            
            
            
                
                    
<h1 className="uk-text-left@m uk-text-center">
    
        
                    {c.t("s.11.1.1.1.1.h1", "Are you Ready?")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-position-relative uk-margin uk-text-left@m uk-text-center" style={{ left: "3px", top: "-6px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.11.1.1.1.2.div", "Take the next step to the <br class=\"uk-hidden@s\">rest of your life.") }} />
                
            
        
    
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
    
        
            
            
                        <div className="uk-panel uk-width-1-1">            
                
                    
<div id="page#0" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.11.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div>
                
            
        
    
</div>

                
            </main>
    </>
  );
}
