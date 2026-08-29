import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import FaqSection from "@/components/FaqSection";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/applicants/intelligent-transportation-systems/faq";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "FAQ - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}#page\\#4 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-g06.jpg", alt: "Instructor explaining cable connections to a femail Electrician Trainee in class" }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/intelligent-transportation-systems", html: "<span property=\"name\">Intelligent Transportation Systems</span>" }]} current="FAQ" title="Frequently Asked Questions" leadHtml={"This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>."} />
<FaqSection c={c} headingKey="s.7.1.1.1.1.1.0.1.h1">        
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
</FaqSection>
<ReadyCta c={c} section="s.9" panelId={4} />
  </>
));
