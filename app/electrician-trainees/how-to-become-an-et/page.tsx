import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";

const ROUTE = "/electrician-trainees/how-to-become-an-et";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "How to Become an ET - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1 .uk-tile{padding:50px;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-wm06.jpg", alt: "Electrician Trainee learning in a shop calss.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/electrician-trainees", html: "<span property=\"name\">Electrician Trainees</span>" }]} current="How to Become an ET" />

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "How to Become an Electrician Trainees (ET) Through IBEW 569")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge"><p>{c.t("s.5.1.1.1.4.0.p", "Becoming an Electrician Trainee with IBEW Local 569 is the first step toward entering the electrical industry and beginning a path toward apprenticeship.")}</p>
<p>{c.t("s.5.1.1.1.4.2.p", "Our process ensures new workers enter the field safely, legally, and with strong union support.")}</p></div>
                
            
        
</PageHero>
<div className="uk-section-default uk-section uk-section-small-top uk-section-xsmall-bottom">
    
        
        
        
            
                                <div className="uk-container uk-container-small">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    <div className="uk-panel uk-margin" id="page#0"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.1.0.1.h2", "Four Step Process")}</h2>
</div></div>
<h2 className="uk-h4">
    
        
                    {c.t("s.7.1.1.1.3.h2", "Step 1: Sign the Entry-Level Books at the IBEW 569 Hall")}        
        
    
</h2><div className="uk-panel uk-margin"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.4.0.p", "Visit the <a href=\"https://www.ibew569.org/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the IBEW 569 website. Opens in new browser tab\">IBEW Local 569</a> union hall <span style=\"text-transform: uppercase;\">in persson</span> with your <span style=\"text-transform: uppercase;\">valid driver's license</span> and <span style=\"text-transform: uppercase;\">social security card</span> to sign Entry-Level Books.") }} />
<address data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.4.2.address", "<strong>IBEW Local 569</strong><br>4545 Viewridge Ave<br>San Diego CA 92123") }} />
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.4.4.p", "<a class=\"el-content uk-button uk-button-small uk-button-default\" href=\"https://maps.app.goo.gl/RudVn3WrrzExXCG97\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to get directions to the union hall. Open in a new browser tab.\">Get Directions</a>") }} />
<p>{c.t("s.7.1.1.1.4.6.p", "These entry-level positions include:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.4.8.1.li", "Material Handler")}</li>
<li>{c.t("s.7.1.1.1.4.8.3.li", "Construction Wireman (CW)")}</li>
<li>{c.t("s.7.1.1.1.4.8.5.li", "Street Light Tech")}</li>
<li>{c.t("s.7.1.1.1.4.8.7.li", "Sound Tech")}</li>
</ul>
<p>{c.t("s.7.1.1.1.4.10.p", "You do not need experience to sign the books \u2014 just a willingness to learn and work safely.")}</p></div>
<h2 className="uk-h4">
    
        
                    {c.t("s.7.1.1.1.6.h2", "Step 2: Get Dispatched to an Entry-Level Job")}        
        
    
</h2><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.7.0.p", "Once you pick up a job, you will be dispatched to a signatory contractor.")}</p>
<p>{c.t("s.7.1.1.1.7.2.p", "This is the best way to get real jobsite exposure and begin learning the trade.")}</p></div>
<h2 className="uk-h4">
    
        
                    {c.t("s.7.1.1.1.9.h2", "Step 3: Enroll in Electrician Training Classes at ETI")}        
        
    
</h2><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.10.0.p", "Once you are a member, you must enroll in state-approved training classes through the Electrical Training Institute.")}</p>
<p>{c.t("s.7.1.1.1.10.2.p", "ETI provides the hands-on and classroom training required for you to legally perform electrical work.")}</p>
<p>{c.t("s.7.1.1.1.10.4.p", "Our curriculum teaches safety, tools, basic electrical theory, jobsite conduct, and prepares you for future apprenticeship opportunities.")}</p></div>
<h2 className="uk-h4">
    
        
                    {c.t("s.7.1.1.1.12.h2", "Step 4: Register With the State as an Electrician Trainee (ET)")}        
        
    
</h2><div className="uk-panel uk-margin"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.13.0.p", "California law requires you to register as an Electrician Trainee with the <a href=\"https://www.dir.ca.gov/das/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to learn more about the Division of Apprenticeship Standards. Opens in a new browser tab.\">Division of Apprenticeship Standards (DAS).</a>To register, you must submit:") }} />
<ul>
<li>{c.t("s.7.1.1.1.13.2.1.li", "ET Registration Application")}</li>
<li>{c.t("s.7.1.1.1.13.2.3.li", "Proof of ETI enrollment")}</li>
<li>{c.t("s.7.1.1.1.13.2.5.li", "$25 fee to the state")}</li>
</ul>
<p>{c.t("s.7.1.1.1.13.4.p", "Once registered, you are legally allowed to perform electrical work under the supervision of a State-Certified Electrician.")}</p></div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-small" id="page#1">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-tile-primary uk-tile">    
        
            
            
            
                
                    
<h3 className="uk-heading-small">
    
        
                    {c.t("s.9.1.1.1.1.1.1.h3", "Why This Process Matters")}        
        
    
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.1.1.2.0.p", "This pathway protects new workers by ensuring they receive:")}</p>
<ul>
<li>{c.t("s.9.1.1.1.1.1.2.2.1.li", "Proper training")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.3.li", "Legal status to work")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.5.li", "Supervision by certified electricians")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.7.li", "A safe entry point into the union electrical industry")}</li>
</ul>
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.1.2.4.p", "It also creates the strongest foundation for applying to the <strong>Inside Wireman Apprenticeship</strong> at ETI.") }} /></div>
<div className="uk-margin-medium-top uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.1.4.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
            
        
        </div>    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
