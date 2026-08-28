import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/electrician-trainees/program-overview-and-curriculum";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Program Overview and Curriculum - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2{text-transform: uppercase;}#page\\#3 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-w03.jpg", alt: "Electrician Trainee learning about the tools of the trade.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/electrician-trainees", html: "<span property=\"name\">Electrician Trainees</span>" }]} current="Program Overview and Curriculum" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Program Overview and Curriculum" leadKey="s.5.1.1.1.4.div" lead="The Electrician Trainee Program provides a structured starting point for individuals entering the electrical industry. Trainees gain real-world jobsite experience while completing state-approved classroom instruction and working toward California electrician certification. This program allows new workers to develop foundational skills while working under the supervision of a state-certified electrician." />
                
            
        
</PageHero>
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
<ReadyCta c={c} section="s.9" panelId={3} />

                
            
  </>
));
