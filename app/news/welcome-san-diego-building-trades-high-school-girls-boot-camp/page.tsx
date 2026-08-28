import { definePage, metadataFor } from "@/lib/page";
import ShareLinks from "@/components/ShareLinks";
import NewsSidebar from "@/components/NewsSidebar";

const ROUTE = "/news/welcome-san-diego-building-trades-high-school-girls-boot-camp";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Welcome San Diego Building Trades High School Girls Boot Camp - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-jqGalp-c\\#0 .el-item{padding-left: 25px;}#template-jqGalp-c\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section uk-padding-remove-vertical">
    
        
        
        
            
                                <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal">                
                    
<div className="uk-grid-margin uk-container uk-container-xlarge">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<div className="uk-margin">
        <picture><img className="el-image" width="3000" height="1570" src={c.m("s.5.1.1.1.1.1.1.0.img", "/images/news/news250625.jpg")} alt={c.a("s.5.1.1.1.1.1.1.0.img", "Group of high school girls at Boot Camp posing for photo")} /></picture>    
    
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
    
        
                    {c.t("s.7.1.1.1.1.h1", "Welcome San Diego Building Trades High School Girls Boot Camp")}        
        
    
</h1><div className="uk-panel uk-text-meta uk-margin uk-width-2xlarge uk-margin-auto" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.2.div", "<time datetime=\"2025-06-25T12:49:52-07:00\">June 25, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>") }} /><div className="uk-panel uk-margin uk-width-2xlarge uk-margin-auto"><p>{c.t("s.7.1.1.1.3.0.p", "Huge thanks to IBEW Local 569 and the Electrical Training Institute staff for welcoming the San Diego Building Trades High School Girls Boot Camp with open arms! \ud83d\udca1\ud83d\udd27")}  </p>
<p>{c.t("s.7.1.1.1.3.2.p", "Our students had an unforgettable day exploring the electrical trade \u2014 from wiring an outlet, light, and a switch to bending conduit and even building solar-powered cars from scratch! \u26a1\ud83d\ude97\u2600\ufe0f")}  </p>
<p>{c.t("s.7.1.1.1.3.4.p", "We\u2019re so proud of our girls for stepping up with confidence and curiosity. Thank you for helping us spark inspiration and hands-on learning in the next generation! \ud83d\udcaa\ud83d\udc99")} </p></div>
<nav className="uk-margin-medium-top uk-text-center">
    <ul className="uk-pagination uk-margin-remove-bottom uk-flex-center" uk-margin="">
    
        
                        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.1.1.li", "<a href=\"/news/congratulations-veep-sd05-graduates\"><span uk-pagination-previous></span> Prev</a>") }} />

        
        
                        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.1.3.li", "<a href=\"/news/castle-park-high-school-visits-eti\">Next <span uk-pagination-next></span></a>") }} />

        
    
    </ul>
</nav>
                
            
        
    
</div>
<NewsSidebar c={c} route={ROUTE} base="s.7.1.1.3" shareId="template-jqGalp-c#0" latestId="template-jqGalp-c#1" />
    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
