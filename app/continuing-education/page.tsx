import Link from "next/link";
import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/continuing-education";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Continuing Education - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-wm08.jpg", alt: "Journeymen installing a junction box.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }]} current="Continuing Education" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Continuing Education Training" leadKey="s.5.1.1.1.4.div" lead="At ETI, we are dedicated to advancing knowledge, strengthening skills, and supporting ongoing professional development within the electrical trade. Our training programs, resources, and updates are available to IBEW 569 members in good standing, including journeymen, apprentices, and electrician trainees, to support continued growth, adaptability, and excellence in the field." />
                
            
        
</PageHero>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<div id="page#0" className="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center">
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center uk-grid-medium uk-grid-divider uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/continuing-education/classes">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.1.h2", "Classes")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/continuing-education/state-certification-renewal">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.1.h2", "State Certification Renewal")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/continuing-education/3rd-party-online-classes">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.5.1.1.1.h2", "3rd Party Online Classes")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/continuing-education/faq">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.7.1.1.1.h2", "FAQ")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                </div>
    
</div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
