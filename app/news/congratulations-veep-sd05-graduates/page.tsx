import { definePage, metadataFor } from "@/lib/page";
import ShareLinks from "@/components/ShareLinks";
import NewsSidebar from "@/components/NewsSidebar";

const ROUTE = "/news/congratulations-veep-sd05-graduates";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Congratulations VEEP SD05 Graduates - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-jqGalp-c\\#0 .el-item{padding-left: 25px;}#template-jqGalp-c\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section uk-padding-remove-vertical">
    
        
        
        
            
                                <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal">                
                    
<div className="uk-grid-margin uk-container uk-container-xlarge">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<div className="uk-margin">
        <picture><img className="el-image" width="3000" height="1570" src={c.m("s.5.1.1.1.1.1.1.0.img", "/images/news/news251120.jpg")} alt={c.a("s.5.1.1.1.1.1.1.0.img", "Group of VEEP graduates standing together for a photo.")} /></picture>    
    
</div>
                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-3-4@m">
    
        
            
            
            
                
                    
<h1 className="uk-h2 uk-margin-bottom uk-width-2xlarge uk-margin-auto">
    
        
                    {c.t("s.7.1.1.1.1.h1", "Congratulations VEEP SD05 Graduates")}        
        
    
</h1><div className="uk-panel uk-text-meta uk-margin uk-width-2xlarge uk-margin-auto" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.2.div", "<time datetime=\"2025-11-20T11:49:52-08:00\">November 20, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>") }} /><div className="uk-panel uk-margin uk-width-2xlarge uk-margin-auto"><p>{c.t("s.7.1.1.1.3.0.p", "11 Graduates from the Veteran's Electrical Entry Program (VEEP) will begin their careers as Inside Wireman Apprentices at JATC's around the United States! A couple chose to stay here in San Diego to finish their apprenticeship and others were placed around the country!")}</p>
<p>{c.t("s.7.1.1.1.3.2.p", "Congratulations finishing your training here in sunny San Diego! You chose an amazing career! This is just the beginning!")}</p></div>
<nav className="uk-margin-medium-top uk-text-center">
    <ul className="uk-pagination uk-margin-remove-bottom uk-flex-center">
    
        
        
                        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.1.1.li", "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Next <span uk-pagination-next></span></a>") }} />

        
    
    </ul>
</nav>
                
            
        
    
</div>
<NewsSidebar c={c} route={ROUTE} base="s.7.1.1.3" shareId="template-jqGalp-c#0" latestId="template-jqGalp-c#1" />
    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
