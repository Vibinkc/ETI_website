import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/applicants/sound-communication/program-overview-and-curriculum";

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
            <li property="itemListElement" typeof="ListItem">            <a href="/applicants/sound-communication" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.5.1.a", "<span property=\"name\">Sound &amp; Communication</span>") }} />
            <meta property="position" content="3" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.7.1.span", "Program Overview and Curriculum")}</span>            <meta property="position" content="4" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Program Overview and Curriculum")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "Start a career in the fast-growing world of low-voltage technology. The Sound & Communications Apprenticeship combines paid, hands-on training with classroom instruction, giving you the skills to install and maintain everything from data networks and security systems to audio/visual and life-safety systems.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove">    
        
            
            
            
                
                    
<div className="uk-margin">
        <picture><img className="el-image" loading="lazy" width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-em03.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician trainee in school working with wires.")} /></picture>    
    
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
</div></div><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Sound & Communications Apprenticeship is a four-year training program that prepares apprentices for careers as Telecommunications Installers and Technicians. The program combines paid on-the-job training with classroom instruction, allowing apprentices to develop the technical skills needed to work in the growing low-voltage industry.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 6,000 hours of on-the-job training, gaining hands-on experience installing, maintaining, and troubleshooting voice, data, and video systems. This field experience is supported by a minimum of 480 hours of classroom and lab instruction, where apprentices study the theory and practices required for success in the trade.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "Sound & Communications apprentices work in both new construction and existing facilities installing cabling and equipment for telephone systems, computer networks, video distribution, security and access control, audio/video systems, and fire and life-safety systems.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "Graduates of the program gain the training and experience needed to build long-term careers in the telecommunications and low-voltage industry.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-small-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div><div className="uk-panel uk-text-large uk-margin-xsmall-bottom uk-text-center">{c.t("s.7.1.1.1.4.div", "Sound Technician")}</div><div className="uk-panel uk-margin-remove-top uk-margin-large-bottom uk-text-center">{c.t("s.7.1.1.1.5.div", "(4-year program)")}</div>
<div className="uk-margin">
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-flex-center uk-grid-row-large uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.1.1.1.h3", "APSC 101")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.1.1.3.div", "(2-week day school format)")}</div>        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.1.li", "Code I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.3.li", "Blueprints I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.5.li", "Fire I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.7.li", "Network I (Copper)")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.9.li", "Meters I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.11.li", "Material ID I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.13.li", "Knots I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.15.li", "Anti-Harassment I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.17.li", "Electric Job Info")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.19.li", "Circuit Essentials")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.21.li", "Intro to Apprenticeship")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.23.li", "Introduction to Skilled Trades")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.25.li", "Powder Actuated Tools Certification")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.27.li", "Safety I (OSHA 10 & CPR)")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.3.1.1.h3", "APSC 102")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.1.li", "Code II (Applied Codeology)")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.3.li", "Network II (Fiber)")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.5.li", "Meters II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.7.li", "Material ID II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.9.li", "Knots II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.11.li", "Install/Tech Elec Job Info 1")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.13.li", "Install/Tech Elec Job Info 3")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.5.1.1.h3", "APSC 103")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.1.li", "Electrical Theory I (DC)")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.3.li", "Computer Skills I")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.5.li", "Blueprints II")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.7.li", "Meters III")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.9.li", "I/T Elec Job Info 2")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.11.li", "Leadership I")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.13.li", "Code III (CodeStandards& Practices 1-Level 1)")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.7.1.1.h3", "APSC 104")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.1.li", "Electrical Theory II (AC Systems)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.3.li", "Electrical Theory III (AC Theory)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.5.li", "Computer Skills II")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.7.li", "Relays I")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.9.li", "Meters IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.11.li", "Audio Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.13.li", "Video Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.15.li", "Nurse Call Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.17.li", "Code IV (Installer/Tech Code 2)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.19.li", "Material ID III")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.9.1.1.h3", "APSC 105")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.1.li", "Electronics I")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.3.li", "Fire II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.5.li", "Anti-Harassment II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.7.li", "Code V")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.9.li", "Blueprints III")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.11.li", "Computer Skills III")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.13.li", "Material ID IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.15.li", "Relays II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.17.li", "Meters V")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.19.li", "Network III (IP Addresses/Classes (IPv4 & IPv6))")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.21.li", "Remote Communication Systems I")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.11.1.1.h3", "APSC 106")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.1.li", "State Cert Prep I (Code VI)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.3.li", "Remote Communication Systems II")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.5.li", "Computer Skills IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.7.li", "Material ID V")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.9.li", "Relays III")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.11.li", "Meters VI")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.13.li", "Network IV (WECAT [Cyber Security, SBEMS], (IPv4 & IPv6 continued))")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.13.1.1.h3", "APSC 107")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.1.li", "Access Control I")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.3.li", "Security I (Intelligent Network Video)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.5.li", "Code VII")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.7.li", "Computer Skills V")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.9.li", "Material ID VI")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.11.li", "Relays IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.13.li", "Meters VII")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.15.li", "Network I Revisited (Copper)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.17.li", "Network II Revisited (Fiber)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.19.li", "Network III Revisited (IP Addressing)")}</li>
</ul></div>        
        
        

                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
    
        
            
                
            
            
                                                
                
                    

        
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.15.1.1.h3", "APSC 108")}</h3>        
        
    
        
        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.1.li", "Leadership II")}</li>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.3.li", "Safety II (OSHA, 30EM-385) Code VIII")}</li>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.5.li", "Computer Skills VI")}</li>
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
