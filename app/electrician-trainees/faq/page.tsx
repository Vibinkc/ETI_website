import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import FaqSection from "@/components/FaqSection";

const ROUTE = "/electrician-trainees/faq";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "FAQ - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}#page\\#4 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-g14.jpg", alt: "Instructon pointout instructions on paper with Electrician Trainees holding the same paper.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/electrician-trainees", html: "<span property=\"name\">Electrician Trainees</span>" }]} current="FAQ" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Frequently Asked Questions" leadKey="s.5.1.1.1.4.div" leadHtml={"This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>."} />
</PageHero>
<FaqSection c={c} headingKey="s.7.1.1.1.1.1.0.1.h1">        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is an Electrician Trainee? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "An Electrician Trainee is someone working toward state electrician certification who is enrolled in approved education but is not yet an apprentice or journeyman.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "What is the difference between an Electrician Trainee, an Apprentice and a Journeyman? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><ul>
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.3.1.0.1.li", "<strong>Electrician Trainee:</strong> Entry-level worker who is enrolled in state-approved electrical education (such as ETI) and registered with the State of California but is not yet accepted into the IBEW apprenticeship.Trainees may work under the direct supervision of a state-certified electrician while completing at least 150 classroom hours per year and gaining experience.") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.3.1.0.3.li", "<strong>Apprentice:</strong> Formally accepted into the IBEW Local 569 / ETI apprenticeship program, combining paid on-the-job training with structured classroom instruction. Apprentices earn scheduled wage increases, receive benefits, and progress through the program while working toward state certification.") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.3.1.0.5.li", "<strong>Journeyman:</strong> A state-certified electrician who has completed required education, accumulated 8,000 hours of supervised work experience and passed the California certification exam. Journeymen work independently, supervise trainees and apprentices, and are full members of IBEW Local 569.") }} />
</ul></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "Do I need an Electrician Trainee card to work in California? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.5.3.1.div", "Yes, anyone performing electrical work for a C-10 contractor must be a certified electrician, registered apprentice, or registered Electrician Trainee.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "What is ETI\u2019s role in the Electrician Trainee program? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.7.3.1.div", "ETI provides state-approved electrical education.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "How many classroom hours are required each year? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.3.1.0.p", "Electrician Trainees must complete at least <strong>150 classroom hours per calendar year</strong> in a state-approved program to remain active.") }} /></div>        
<div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.3.3.div", "<a class=\"el-link uk-button uk-button-default\" href=\"https://www.dir.ca.gov/t8/296_2.html\" target=\"_blank\">Read more <span class=\"uk-visible@s\">approved curriculum info</span></a>") }} />        
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "Can Electrician Trainees work on the jobsite? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Yes, registered Electrician Trainees may work under the direct supervision of a state-certified electrician.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "Does the Electrician Trainee card need to be renewed? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.13.3.1.div", "Yes, Electrician Trainee registration must be renewed annually with proof of continued enrollment and education. Educational transcripts must be obtained from ETI prior to mailing in renewal.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "Does ETI automatically register me for classes every year? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.15.3.1.div", "No. It is your responsibility to maintain your ET card and register for classes.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.17.1.a", "How does the Electrician Trainee path lead to the IBEW Local 569 apprenticeship? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.17.3.1.div", "Many trainees gain experience through ETI and Local 569 signatory contractors before applying and transitioning into the IBEW Inside Wireman apprenticeship.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.19.1.a", "Why is maintaining Electrician Trainee status important? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.19.3.1.div", "Active registration ensures work is legal, hours count toward certification, and trainees remain eligible for advancement.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.21.1.a", "Where can Electrician Trainee or Electrician status be verified? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.21.3.1.0.p", "Status can be verified through the <strong><a href=\"https://www.dir.ca.gov/dlse/ecu/ElectCert/electcertsearch.asp\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the California DIR certification search database. Opens in a new browser tab.\">California DIR certification search database.</a></strong>") }} /></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.23.1.a", "How do I register as an Electrician Trainee with the State of California? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.23.3.1.0.p", "<span style=\"font-weight: 400;\">You must enroll in a state-approved training program, complete the Electrician Trainee registration application, submit proof of enrollment, and mail it with the required fee to the California DIR.</span>") }} /></div>        
<div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.23.3.3.div", "<a class=\"el-link uk-button uk-button-default\" href=\"https://www.dir.ca.gov/dlse/ecu/ElectricalTrainee.htm\" target=\"_blank\">Read more</a>") }} />        
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.25.1.a", "What happens if my Electrician Trainee card expires? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.25.3.1.0.p", "If your card expires, you may not legally perform electrical work and any hours worked while inactive do not count toward certification.")}</p></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.27.1.a", "Do I need to apply for the apprenticeship to be an entry level worker / Electrician trainee? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.27.3.1.div", "No. You do not need to apply for the apprenticeship to be an entry level worker.")}</div>                
    </div>
</div>    
</FaqSection>
<ReadyCta c={c} section="s.9" panelId={4} />
  </>
));
