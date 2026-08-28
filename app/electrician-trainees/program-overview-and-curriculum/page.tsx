import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/electrician-trainees/program-overview-and-curriculum";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Program Overview and Curriculum - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2{text-transform: uppercase;}#page\\#3 .el-content{font-weight:bold;font-size:105%;}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/electrician-trainees" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.3.1.a", "<span property=\"name\">Electrician Trainees</span>") }} />
            <meta property="position" content="2" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.5.1.span", "Program Overview and Curriculum")}</span>            <meta property="position" content="3" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Program Overview and Curriculum")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "The Electrician Trainee Program provides a structured starting point for individuals entering the electrical industry. Trainees gain real-world jobsite experience while completing state-approved classroom instruction and working toward California electrician certification. This program allows new workers to develop foundational skills while working under the supervision of a state-certified electrician.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-w03.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician Trainee learning about the tools of the trade.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
    
        
        
        
            
                                <div className="uk-container uk-container-small">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    <div className="uk-panel uk-margin-medium-bottom" id="page#0"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.1.0.1.h2", "Program Overview")}</h2>
</div></div><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Electrician Trainee Program provides a structured entry point into the electrical industry for individuals beginning their careers. Electrician Trainees work toward California electrician certification while gaining real-world job-site experience and completing state-approved classroom instruction.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Electrician Trainees are entry-level workers who are enrolled in ETI training and registered with the State of California. While not yet apprentices or journeymen, trainees are legally permitted to perform electrical work under the supervision of a state-certified electrician. California law requires trainees to complete at least 150 hours of classroom instruction each year in a state-approved training program such as ETI.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "The Electrician Trainee pathway typically begins by signing the entry-level books at IBEW Local 569 and accepting dispatch to an entry-level position with a signatory electrical contractor. These positions allow new workers to gain practical experience while attending ETI classes and progressing toward certification.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "ETI provides the classroom and hands-on training required for trainees to work legally and safely in the electrical industry. Coursework includes electrical safety, tools and materials, basic electrical theory, and jobsite practices designed to prepare students for long-term success in the trade.")}</p>
<p>{c.t("s.7.1.1.1.2.8.p", "After enrolling at ETI, trainees must register with the State of California as Electrician Trainees. Once registered, trainees may legally work under supervision while accumulating the experience and education required for state certification.")}</p>
<p>{c.t("s.7.1.1.1.2.10.p", "The Electrician Trainee Program provides a strong foundation for individuals planning to apply to the ETI and IBEW Local 569 apprenticeship program. Many apprentices begin their careers as Electrician Trainees, gaining valuable experience and training before entering the apprenticeship.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-medium-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div>
<h2 className="uk-text-small uk-heading-line uk-margin-large-top uk-width-medium uk-margin-auto uk-text-center" id="page#2" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.h2", "<span>    \n        \n                    To Be Announced        \n        \n        </span>") }} />
                
            
        
    
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
                
                    
<div id="page#3" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div>
                
            
        
    
</div>

                
            </main>
    </>
  );
}
