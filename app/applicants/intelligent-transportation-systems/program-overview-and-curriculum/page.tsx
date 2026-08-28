import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/applicants/intelligent-transportation-systems/program-overview-and-curriculum";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Program Overview and Curriculum - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2{text-transform: uppercase;}#page\\#3 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-g17.jpg", alt: "Electrician Trainee digging a ditch for powerlines.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/intelligent-transportation-systems", html: "<span property=\"name\">Intelligent Transportation Systems</span>" }]} current="Program Overview and Curriculum" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Program Overview and Curriculum" leadKey="s.5.1.1.1.4.div" lead="The Intelligent Transportation Systems (ITS) Apprenticeship is a four-year program that prepares individuals for careers working on public infrastructure systems. Apprentices gain hands-on experience with traffic signals, street lighting, and transportation technologies while completing classroom training that builds the technical knowledge required for the trade." />
                
            
        
</PageHero>
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
<ReadyCta c={c} section="s.9" panelId={3} />

                
            
  </>
));
