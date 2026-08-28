import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/applicants/veep";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "VEEP - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/logos/VEEP_Logo.png", alt: "Electrician Trainee working with a drill on a ladder.", width: "300", height: "256", aspectAuto: true }} rightCardClass="uk-card-primary uk-card uk-card-large uk-card-body uk-flex uk-flex-column">        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current="VEEP" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title={"IBEW Veteran\u2019s Electrical Entry Program (VEEP)"} leadKey="s.5.1.1.1.4.div" lead={"The Veteran\u2019s Electrical Entry Program (VEEP) is a pre-apprenticeship initiative developed to help U.S. military veterans and transitioning service members start careers in the electrical industry."} />
                
            
        
</PageHero>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-xsmall">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-card-default uk-card uk-card-body">    
        
            
            
            
                
                    <div className="uk-panel uk-margin">{c.t("s.7.1.1.1.1.1.1.div", "VEEP is designed for veterans, active duty service members nearing separation, and recently separated military personnel (typically within five years of discharge) who want a direct pathway into IBEW/NECA electrical apprenticeship programs.")}</div>
<h2 className="uk-h3">
    
        
                    {c.t("s.7.1.1.1.1.1.3.h2", "How It Works")}        
        
    
</h2><div className="uk-panel uk-margin"><ul>
<li aria-level={1}>{c.t("s.7.1.1.1.1.1.4.0.1.li", "VEEP provides pre-apprenticeship electrical training that prepares participants with fundamental skills and knowledge needed for a full apprenticeship.")}</li>
<li aria-level={1}>{c.t("s.7.1.1.1.1.1.4.0.3.li", "The program often runs several weeks (e.g., a seven-week in-person course) and includes classroom instruction, hands-on learning, and electrical industry fundamentals.")}</li>
<li style={{ fontWeight: "400" }} aria-level={1} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.4.0.5.li", "VEEP partners the San Diego ETI so graduates can enter a union apprenticeship program directly<span style=\"font-weight: 400;\"></span>") }} />
</ul></div><div className="uk-panel uk-margin"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.5.0.p", "To learn more about this program, visit <a href=\"https://in2veep.com/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the VEEP website. Opens in a new browser tab.\">in2veep.com</a>") }} /></div>
                
            
        
        </div>    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>
<ReadyCta c={c} section="s.9" panelId={0} />

                
            
  </>
));
