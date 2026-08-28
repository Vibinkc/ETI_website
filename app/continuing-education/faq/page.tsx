import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import FaqSection from "@/components/FaqSection";

const ROUTE = "/continuing-education/faq";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "FAQ - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-wm01.jpg", alt: "Electrician using a large drill.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/continuing-education", html: "<span property=\"name\">Continuing Education</span>" }]} current="FAQ" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Frequently Asked Questions" leadKey="s.5.1.1.1.4.div" leadHtml={"This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>."} />
                
            
        
</PageHero>
<FaqSection c={c} headingKey="s.7.1.1.1.1.1.0.1.h1">        
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
</FaqSection>

                
            
  </>
));
