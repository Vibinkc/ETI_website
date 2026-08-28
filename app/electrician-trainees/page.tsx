import type { Metadata } from "next";
import Link from "next/link";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/electrician-trainees";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Electrician Trainees - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body">    
        
            
            
            
                
                    

<nav aria-label="Breadcrumb" className="uk-margin-small-bottom">
    <ul className="uk-breadcrumb uk-margin-remove-bottom" vocab="https://schema.org/" typeof="BreadcrumbList">
    
            <li property="itemListElement" typeof="ListItem">            <a href="/" property="item" typeof="WebPage" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.1.1.1.1.a", "<span property=\"name\">Home</span>") }} />
            <meta property="position" content="1" />
            </li>    
            <li property="itemListElement" typeof="ListItem">            <span property="name" aria-current="page">{c.t("s.5.1.1.1.1.1.3.1.span", "Electrician Trainees")}</span>            <meta property="position" content="2" />
            </li>    
    </ul>
</nav>

<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.3.h1", "Electrician Trainees (ET)")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.4.div", "Start your career in the electrical industry with hands-on experience from day one. The Electrician Trainee Program allows you to work on real jobsites, earn experience, and complete required training while progressing toward state certification. It\u2019s a practical first step for those looking to build a career and eventually enter a registered apprenticeship.")}</div>
                
            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g01.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Electrician Trainee students standing around the istructor as he speake to them.")} /></picture>    
    
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
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-3@m uk-flex-center uk-grid-medium uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/electrician-trainees/program-overview-and-curriculum">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.1.h2", "Program Overview and Curriculum")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/electrician-trainees/how-to-become-an-et">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.1.h2", "How to Become an Electrician Trainee")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/electrician-trainees/maintaining-your-et-card">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.5.1.1.1.h2", "Maintaining Your Trainee Card")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/electrician-trainees/faq">    
        
            
                
            
            
                                                
                
                    

        
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-auto-bottom">{c.t("s.7.1.1.1.1.1.7.1.1.1.h2", "FAQ")}</h2>        
        
    
        
        
        
        
        

                
                
            
        
        </Link>    
</div></div>
                </div>
    
</div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-primary uk-section">
    
        
        
        
            
                
                    
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" uk-grid="">    
        
<div className="uk-width-3-5@m">
    
        
            
            
            
                
                    
<h1 className="uk-text-left@m uk-text-center">
    
        
                    {c.t("s.9.1.1.1.1.h1", "Are you Ready?")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-position-relative uk-margin uk-text-left@m uk-text-center" style={{ left: "3px", top: "-6px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.2.div", "Take the next step to the <br class=\"uk-hidden@s\">rest of your life.") }} />
                
            
        
    
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
    
        
            
            
                        <div className="uk-panel uk-width-1-1">            
                
                    
<div id="page#1" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div>
                
            
        
    
</div>

                
            </main>
    </>
  );
}
