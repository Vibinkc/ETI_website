import type { Metadata } from "next";
import Link from "next/link";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/continuing-education";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Continuing Education - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.3.1.span", "Continuing Education")}</span>            <meta property="position" content="2" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Continuing Education Training")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "At ETI, we are dedicated to advancing knowledge, strengthening skills, and supporting ongoing professional development within the electrical trade. Our training programs, resources, and updates are available to IBEW 569 members in good standing, including journeymen, apprentices, and electrician trainees, to support continued growth, adaptability, and excellence in the field.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-wm08.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Journeymen installing a junction box.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
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

                
            </main>
    </>
  );
}
