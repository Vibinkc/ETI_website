import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/continuing-education/classes";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Classes - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%; font-weight: bold;}" }} />
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
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.5.1.span", "Classes")}</span>            <meta property="position" content="3" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Classes")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "Continuing education helps electrical professionals stay sharp, stay qualified, and stay ahead in a changing industry. This section features training opportunities designed to strengthen skills, support certification requirements and promote long-term success in the union electrical trade.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-default uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g18.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "students in a classroom")} /></picture>    
    
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
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-flex-center uk-grid-medium uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding uk-margin-remove-first-child uk-link-toggle" href="/images/pdf/CET-Class-Schedule.pdf" target="_blank" download="">    
        
            
                
            
            
                                

    
        <span className="uk-text-emphasis el-image" uk-icon="icon: file-pdf; width: 45; height: 45;"></span>
        
    
                
                
                    

        
                <h2 className="el-title uk-h5 uk-text-primary uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.3.h2", "Current Class Schedule")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </a>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <a className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding uk-margin-remove-first-child uk-link-toggle" href="/images/pdf/Signing-up-for-classes.pdf" target="_blank" download="">    
        
            
                
            
            
                                

    
        <span className="uk-text-emphasis el-image" uk-icon="icon: file-pdf; width: 45; height: 45;"></span>
        
    
                
                
                    

        
                <h2 className="el-title uk-h5 uk-text-primary uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.3.h2", "How to Sign Up for a Class")} </h2>        
        
    
        
        
        
        
        

                
                
            
        
        </a>    
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
