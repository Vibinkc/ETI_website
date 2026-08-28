import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/inside-wireman/program-overview-and-curriculum";

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

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2 .el-content{font-weight:bold;font-size:105%;}" }} />
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
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.7.1.span", "Program Overview and Curriculum")}</span>            <meta property="position" content="4" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Program Overview and Curriculum")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "The Inside Wireman Apprenticeship offers a direct path to a career in the electrical industry. Apprentices earn while they learn, gaining hands-on experience and technical training needed to work on electrical systems that power buildings, infrastructure, and modern facilities.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/et-Landing.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Woman electrician in the attic working on wires.")} /></picture>    
    
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
</div></div><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Inside Wireman Apprenticeship is a comprehensive five-year training program designed to prepare apprentices for careers as Journeyman Inside Wiremen. The program combines paid on-the-job training with structured classroom instruction, allowing apprentices to develop the skills and knowledge required to work in the electrical industry.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 8,000 hours of on-the-job training working for licensed electrical contractors throughout San Diego County. This hands-on experience is supported by a minimum of 1,000 hours of related classroom and lab instruction, where apprentices study electrical theory, safety practices, and industry standards while reinforcing skills learned in the field.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "Inside Wireman apprentices install, maintain, and troubleshoot electrical systems in commercial and industrial facilities. This includes working with electrical conduits, wiring systems, cables, motor controls, and panelboards used to power buildings and equipment.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "Graduates of the program gain the experience and training necessary to become state-certified electricians and work as Journeyman Inside Wiremen.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-small-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div><div className="uk-panel uk-text-large uk-margin-xsmall-bottom uk-text-center">{c.t("s.7.1.1.1.4.div", "Inside Wireman")}</div><div className="uk-panel uk-margin-remove-top uk-margin-large-bottom uk-text-center">{c.t("s.7.1.1.1.5.div", "(5-year program)")}</div>
<div className="uk-margin">
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-flex-center uk-grid-row-large uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.1.1.1.h3", "APIW 101")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.1.1.3.div", "(2-week day school format)")}</div>        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.1.li", "Introduction to Apprenticeship")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.3.li", "Electrical job information")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.5.li", "Applied Codeology")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.7.li", "Harassment prevention awareness")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.9.li", "Material Identification (boxes & fittings)")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.11.li", "Conduit bending and fabrication")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.13.li", "Various circuit switching labs")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.3.1.1.h3", "APIW 102")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.3.1.3.div", "(2-week day school format)")}</div>        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.1.li", "Electrical Theory DC")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.3.li", "DC Theory Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.5.li", "Construction drawings")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.7.li", "Progressions from previous conduit bending and various circuit switching labs")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.5.1.1.h3", "APIW 103")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.5.1.3.div", "(2-week day school format)")}</div>        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.1.li", "Electrical Theory AC")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.3.li", "AC Theory Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.5.li", "Code")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.7.li", "Standards & Practices II")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.9.li", "Progressions from previous conduit bending and various circuit switching labs")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.7.1.1.h3", "APIW 104")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.7.1.3.div", "(2-week day school format)")}</div>        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.1.li", "Codeology (Navigating the Codebook)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.3.li", "Blueprint reading")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.5.li", "Blueprints Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.7.li", "Intermediate conduit bending and various circuit switching labs")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.9.1.1.h3", "APIW 105")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.1.li", "Motor Controls lecture & lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.3.li", "Transformers lecture & lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.5.li", "Advanced conduit bending")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.7.li", "Various circuit switching labs")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.9.li", "LOTO (Lock Out/Tag Out)")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.11.1.1.h3", "APIW 106")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.1.li", "Solar (Photovoltaic Systems)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.3.li", "ESAM-TAC (Battery Storage)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.5.li", "EVITP (Electric Vehicle Infrastructure Training)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.7.li", "NFPA 70E")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.9.li", "Advanced conduit bending")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.13.1.1.h3", "APIW 107")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.1.li", "Intro to Fire Alarm systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.3.li", "Intro to Structured Cabling systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.5.li", "Intro to Fiber Optics systems (including labs)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.7.li", "Bluebeam")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.9.li", "Preparing for Leadership")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.15.1.1.h3", "APIW 108")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.1.li", "Electrical Certification Prep \u2013 CA General Electrician Cert")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.17.1.1.h3", "APIW 109")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.1.li", "Project Supervision")}</li>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.3.li", "Test Instruments")}</li>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.5.li", "Service Equipment")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.19.1.1.h3", "APIW 110")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.19.1.3.0.1.li", "OSHA-30")}</li>
<li>{c.t("s.7.1.1.1.7.1.19.1.3.0.3.li", "CALCTP Technician Course (Lighting Controls & Safety)")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
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
                
                    
<div id="page#2" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div>
                
            
        
    
</div>

                
            </main>
    </>
  );
}
