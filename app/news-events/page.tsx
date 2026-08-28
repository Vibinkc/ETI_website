import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/news-events";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Events - Electrical Training Institute", undefined);
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
<main id="tm-main">

                
                <div id="system-message-container" aria-live="polite"></div>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-Y_O7pP4p\\#0 .el-item{padding-left: 25px;}#template-Y_O7pP4p\\#1{padding: 20px;}" }} />
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<h1 className="uk-h2 uk-text-center">
    
        
                    {c.t("s.5.1.1.1.1.h1", "Events")}        
        
    
</h1>
                
            
        
    
</div>
    
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-3-4@m uk-visible@m">
    
        
            
            
            
                
                    
                
            
        
    
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
<div id="template-Y_O7pP4p#0" className="uk-margin-small-top uk-text-center uk-visible@m">    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" uk-grid="">
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fetiedu.org%2Fnews-events" title="Tap here to share this page to Facebook." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Facebook."><span uk-icon="icon: facebook;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://x.com/intent/post?url=https%3A%2F%2Fetiedu.org%2Fnews-events&text=" title="Tap here to share this page to X." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to X."><span uk-icon="icon: x;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://bsky.app/intent/compose?text=Tap+here+to+share+this+page+to+Bluesky.%0Ahttps%3A%2F%2Fetiedu.org%2Fnews-events" rel="noreferrer" target="_blank" aria-label="Bluesky"><span uk-icon="icon: bluesky;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://mastodon.social/share?url=https%3A%2F%2Fetiedu.org%2Fnews-events&text=" title="Tap here to share this page to Mastodon." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Mastodon."><span uk-icon="icon: mastodon;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fetiedu.org%2Fnews-events" title="Tap here to share this page to LinkedIn." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to LinkedIn."><span uk-icon="icon: linkedin;"></span></a></li>
    
    </ul></div>
                
            
        
        </div>    
</div>
    
</div></div><div className="uk-panel uk-margin-top">
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-2-3@s uk-width-1-1@m">
    
        
            
            
            
                
                    
<div className="uk-card uk-card-body uk-card-primary tm-child-list" id="template-Y_O7pP4p#1">
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
    
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.3.1.1.3.1.li", "<a href=\"/news\">\n        News            </a>") }} />
<li className="uk-active" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.3.1.3.1.3.1.1.3.3.li", "<a href=\"/news-events\">\n        Events            </a>") }} />
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
