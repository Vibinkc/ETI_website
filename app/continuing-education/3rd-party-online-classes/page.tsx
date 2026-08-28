import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/continuing-education/3rd-party-online-classes";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "3rd Party Online Classes - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{line-height: 1.4em;padding: 10px;}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <a href="/continuing-education" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.3.1.a", "<span property=\"name\">Continuing Education</span>") }} />
            <meta property="position" content="2" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.5.1.span", "3rd Party Online Classes")}</span>            <meta property="position" content="3" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "3rd Party Online Classes")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "Keep learning with flexible online education opportunities.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g10.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Standing meeting for a group of Journeymen.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
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

                
            </main>
    </>
  );
}
