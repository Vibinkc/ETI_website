import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/intelligent-transportation-systems/program-overview-and-curriculum";

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
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.3.1.a", "<span property=\"name\">Applicants</span>") }} />
            <meta property="position" content="2" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants/intelligent-transportation-systems" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.5.1.a", "<span property=\"name\">Intelligent Transportation Systems</span>") }} />
            <meta property="position" content="3" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.7.1.span", "Program Overview and Curriculum")}</span>            <meta property="position" content="4" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Program Overview and Curriculum")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "The Intelligent Transportation Systems (ITS) Apprenticeship is a four-year program that prepares individuals for careers working on public infrastructure systems. Apprentices gain hands-on experience with traffic signals, street lighting, and transportation technologies while completing classroom training that builds the technical knowledge required for the trade.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g17.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician Trainee digging a ditch for powerlines.")} /></picture>    
    
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
</div></div><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Intelligent Transportation Systems (ITS) Apprenticeship is a four-year training program that prepares apprentices for careers as Transportation Systems Electricians. The program combines paid on-the-job training with structured classroom instruction, equipping apprentices with the technical knowledge and field experience required to work on critical public infrastructure systems.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 6,400 hours of on-the-job training with signatory contractors, working under the supervision of experienced Journeyman Transportation Systems Electricians. Apprentices rotate assignments to gain broad exposure to transportation and municipal electrical systems. Contractor placement is coordinated through the Electrical Training Institute.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "In addition to field training, apprentices complete approximately 802 hours of classroom instruction, attending classes two evenings per week. Coursework includes lectures, hands-on lab training, and competency assessments designed to reinforce real-world skills and ensure technical proficiency.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "ITS apprentices develop expertise in underground installations, conduit systems, traffic detection technology, freeway fiber optics and CCTV systems, photovoltaic applications, and street lighting and traffic signal systems. Training also includes blueprint reading, municipal coordination, system testing, troubleshooting, and repair.")}</p>
<p>{c.t("s.7.1.1.1.2.8.p", "Upon completion, apprentices receive a Certificate of Achievement \u2013 Transportation Systems Electrician through Palomar Community College, along with completion certificates from the California Division of Apprenticeship Standards and the U.S. Department of Labor Office of Apprenticeship.")}</p>
<p>{c.t("s.7.1.1.1.2.10.p", "Graduates are prepared to build long-term careers maintaining and installing the transportation systems that support safe and efficient public infrastructure.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-medium-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div>
<h2 className="uk-text-small uk-heading-line uk-margin-large-top uk-margin-medium-bottom uk-width-medium uk-margin-auto uk-text-center" id="page#2" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.h2", "<span>    \n        \n                    To Be Announced        \n        \n        </span>") }} />
                
            
        
    
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
