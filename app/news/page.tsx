import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/news";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "News - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-8aQccsbZ\\#0 .el-item{padding-left: 25px;}#template-8aQccsbZ\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<h1 className="uk-h2 uk-text-center">
    
        
                    {c.t("s.5.1.1.1.1.h1", "News")}        
        
    
</h1>
                
            
        
    
</div>
    
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-3-4@m">
    
        
            
            
            
                
                    
<div className="uk-margin">
    
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-card uk-card-default uk-card-small uk-flex uk-flex-column">
    
        
            
                
            
            
                                <div className="uk-card-media-top uk-flex-1 uk-flex uk-flex-column">

    
        <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.5.1.3.1.1.1.1.1.1.1.0.img", "/images/news/news251120.jpg")} alt={c.a("s.5.1.3.1.1.1.1.1.1.1.0.img", "Group of VEEP graduates standing together for a photo.")} /></picture>
        
    
</div>                
                                <div className="uk-card-body uk-margin-remove-first-child">                
                    

        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.5.1.3.1.1.1.1.1.3.1.h3", "Congratulations VEEP SD05 Graduates")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.1.1.3.3.div", "<time datetime=\"2025-11-20T11:49:52-08:00\">November 20, 2025</time> | <a href=\"/news\">News</a>") }} />        
    
        
        
                <div className="el-content uk-panel uk-margin-top">{c.t("s.5.1.3.1.1.1.1.1.3.5.div", "11 Graduates from the Veteran's Electrical Entry Program (VEEP) will begin their careers as Inside\u2026")}</div>        
        
                <div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.1.1.3.7.div", "<a href=\"/news/congratulations-veep-sd05-graduates\" aria-label=\"Tep here to read more about Congratulations VEEP SD05 Graduates\" class=\"el-link uk-button uk-button-default\">Read more</a>") }} />        

                                </div>                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-card uk-card-default uk-card-small uk-flex uk-flex-column">
    
        
            
                
            
            
                                <div className="uk-card-media-top uk-flex-1 uk-flex uk-flex-column">

    
        <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.5.1.3.1.1.1.3.1.1.1.0.img", "/images/news/news250625.jpg")} alt={c.a("s.5.1.3.1.1.1.3.1.1.1.0.img", "Group of high school girls at Boot Camp posing for photo")} /></picture>
        
    
</div>                
                                <div className="uk-card-body uk-margin-remove-first-child">                
                    

        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.5.1.3.1.1.1.3.1.3.1.h3", "Welcome San Diego Building Trades High School Girls Boot Camp")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.3.1.3.3.div", "<time datetime=\"2025-06-25T12:49:52-07:00\">June 25, 2025</time> | <a href=\"/news\">News</a>") }} />        
    
        
        
                <div className="el-content uk-panel uk-margin-top">{c.t("s.5.1.3.1.1.1.3.1.3.5.div", "Huge thanks to IBEW Local 569 and the Electrical Training Institute staff for welcoming the San\u2026")}</div>        
        
                <div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.3.1.3.7.div", "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\" aria-label=\"Tep here to read more about Welcome San Diego Building Trades High School Girls Boot Camp\" class=\"el-link uk-button uk-button-default\">Read more</a>") }} />        

                                </div>                
                
            
        
    
</div></div>
                <div>
<div className="el-item uk-card uk-card-default uk-card-small uk-flex uk-flex-column">
    
        
            
                
            
            
                                <div className="uk-card-media-top uk-flex-1 uk-flex uk-flex-column">

    
        <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.5.1.3.1.1.1.5.1.1.1.0.img", "/images/news/news250312.jpg")} alt={c.a("s.5.1.3.1.1.1.5.1.1.1.0.img", "High school girl gives the thumb's up at ETI")} /></picture>
        
    
</div>                
                                <div className="uk-card-body uk-margin-remove-first-child">                
                    

        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.5.1.3.1.1.1.5.1.3.1.h3", "Castle Park High School Visits ETI")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.5.1.3.3.div", "<time datetime=\"2025-03-12T11:44:50-07:00\">March 12, 2025</time> | <a href=\"/news\">News</a>") }} />        
    
        
        
                <div className="el-content uk-panel uk-margin-top">{c.t("s.5.1.3.1.1.1.5.1.3.5.div", "Thank you Castle Park High School for visiting ETI and learning about the amazing benefits an IBEW\u2026")}</div>        
        
                <div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.1.5.1.3.7.div", "<a href=\"/news/castle-park-high-school-visits-eti\" aria-label=\"Tep here to read more about Castle Park High School Visits ETI\" class=\"el-link uk-button uk-button-default\">Read more</a>") }} />        

                                </div>                
                
            
        
    
</div></div>
                </div>
    
</div>
                
            
        
    
</div>
<div className="js-sticky uk-width-1-4@m">
    
        
            
            
            
                                <div className="uk-panel uk-position-z-index" uk-sticky="end: !.js-sticky; media: @m;">                
                    <hr className="uk-margin-large-bottom uk-hidden@m" /><div className="uk-panel uk-margin-top uk-margin-medium-bottom uk-visible@m">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1 uk-visible@m">
    
        
<div className="uk-grid-item-match uk-width-1-1 uk-visible@m">
        <div className="uk-card-default uk-card uk-card-small uk-card-body">    
        
            
            
            
                
                    
<h4 className="uk-h3 uk-visible@m">
    
        
                    {c.t("s.5.1.3.3.1.2.1.1.1.1.h4", "Share Us")}        
        
    
</h4>
<div id="template-8aQccsbZ#0" className="uk-margin-small-top uk-text-center uk-visible@m">    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" uk-grid="">
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fetiedu.org%2Fnews" title="Tap here to share this page to Facebook." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Facebook."><span uk-icon="icon: facebook;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://x.com/intent/post?url=https%3A%2F%2Fetiedu.org%2Fnews&text=" title="Tap here to share this page to X." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to X."><span uk-icon="icon: x;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://bsky.app/intent/compose?text=Tap+here+to+share+this+page+to+Bluesky.%0Ahttps%3A%2F%2Fetiedu.org%2Fnews" rel="noreferrer" target="_blank" aria-label="Bluesky"><span uk-icon="icon: bluesky;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://mastodon.social/share?url=https%3A%2F%2Fetiedu.org%2Fnews&text=" title="Tap here to share this page to Mastodon." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Mastodon."><span uk-icon="icon: mastodon;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fetiedu.org%2Fnews" title="Tap here to share this page to LinkedIn." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to LinkedIn."><span uk-icon="icon: linkedin;"></span></a></li>
    
    </ul></div>
                
            
        
        </div>    
</div>
    
</div></div><div className="uk-panel uk-margin-top">
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-2-3@s uk-width-1-1@m">
    
        
            
            
            
                
                    
<div className="uk-card uk-card-body uk-card-primary tm-child-list" id="template-8aQccsbZ#1">
        <div className="el-title uk-card-title">{c.t("s.5.1.3.3.1.3.1.1.1.1.div", "Latest News")}</div>    
    
<ul className="latestnews">
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.1.1.3.1.li", "<a href=\"/news/congratulations-veep-sd05-graduates\">Congratulations VEEP SD05 Graduates</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.1.1.3.3.li", "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Welcome San Diego Building Trades High School Girls Boot Camp</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.1.1.3.5.li", "<a href=\"/news/castle-park-high-school-visits-eti\"> Castle Park High School Visits ETI </a>") }} />
    </ul>

</div>
                
            
        
    
</div>
<div className="uk-grid-item-match uk-width-1-3@s uk-width-1-1@m">
        <div className="uk-card-default uk-card uk-card-small uk-card-body">    
        
            
            
            
                
                    
<div className="uk-panel tm-child-list">
        <div className="el-title">{c.t("s.5.1.3.3.1.3.1.3.1.1.1.div", "Categories")}</div>    
    <ul className="categories-module">
    
<li className="uk-active" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.3.1.1.3.1.li", "<a href=\"/news\">\n        News            </a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.3.1.1.3.3.li", "<a href=\"/news-events\">\n        Events            </a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.3.1.1.3.5.li", "<a href=\"/apprentice-of-the-month\">\n        Apprentice of the Month            </a>") }} />
</ul>

</div>
                
            
        
        </div>    
</div>
    
</div></div>
                                </div>                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>

                
            </main>
    </>
  );
}
