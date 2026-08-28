import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/continuing-education/3rd-party-online-classes";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "3rd Party Online Classes - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{line-height: 1.4em;padding: 10px;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-g10.jpg", alt: "Standing meeting for a group of Journeymen.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/continuing-education", html: "<span property=\"name\">Continuing Education</span>" }]} current="3rd Party Online Classes" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="3rd Party Online Classes" leadKey="s.5.1.1.1.4.div" lead="Keep learning with flexible online education opportunities." />
                
            
        
</PageHero>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-xsmall-bottom">
    
        
        
        
            
                                <div className="uk-container uk-container-small">                
                    
<div className="uk-grid-margin uk-container uk-container-xsmall">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-card-overlay uk-card uk-card-body">    
        
            
            
            
                
                    <div className="uk-panel uk-margin">{c.t("s.7.1.1.1.1.1.1.div", "There are plenty of online courses available to help you meet your continuing education requirements. You can complete them at your own pace, wherever and whenever it works best for you. Costs vary, and each course includes a certificate of completion you can use toward your state certification.")}</div>
<div id="page#0" className="uk-margin-top uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.3.div", "<a class=\"el-content uk-button uk-button-default uk-button-small\" href=\"https://www.dir.ca.gov/dlse/ECU/Other-Approved-Continuing-Education-List-of-Providers.htm\" download>\n    \n        Approved  List of Providers    \n    \n</a>") }} />

                
            
        
        </div>    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
