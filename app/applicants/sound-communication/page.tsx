import Link from "next/link";
import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/applicants/sound-communication";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Sound & Communication - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-em01.jpg", alt: "Electrician working in an underground junction box.", width: "1200", height: "1200", aspectAuto: true }}>        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current="Sound & Communication" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Sound & Communication" leadKey="s.5.1.1.1.4.div" lead="The Sound & Communications Apprenticeship is a four-year program that prepares individuals for careers in the low-voltage and telecommunications industry. Apprentices gain hands-on experience installing and maintaining voice, data, and video systems while completing classroom training that builds the technical knowledge needed for long-term success in the field." />
                
            
        
</PageHero>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<div id="page#0" className="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center">
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-grid-medium uk-grid-divider uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/sound-communication/program-overview-and-curriculum">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.1.h2", "Program Overview and Curriculum")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/sound-communication/application-requirements-and-process">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.1.h2", "Application Requirements and Process")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/sound-communication/faq">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.5.1.1.1.h2", "FAQ")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                </div>
    
</div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<ReadyCta c={c} section="s.9" panelId={1} />

                
            
  </>
));
