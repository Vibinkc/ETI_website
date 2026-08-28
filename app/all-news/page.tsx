import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/all-news";

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

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#template-kDt0xp3P\\#0{text-transform: uppercase;}#template-kDt0xp3P\\#1 .el-item{padding-left: 25px;}#template-kDt0xp3P\\#2{padding: 20px;}" }} />
<div className="uk-section-primary uk-section uk-section-xsmall-top uk-section-medium-bottom">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<div className="uk-text-meta uk-margin-remove-bottom" id="template-kDt0xp3P#0">
    
        
                    {c.t("s.5.1.1.1.1.div", "Latest News")}        
        
    
</div>
<div className="uk-margin-remove-top uk-margin-bottom">
        <picture><img className="el-image" loading="lazy" width="1200" height="628" src={c.m("s.5.1.1.1.3.1.0.img", "/images/news/news251120.jpg")} alt={c.a("s.5.1.1.1.3.1.0.img", "")} /></picture>    
    
</div><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid uk-flex-center uk-child-width-1-1">    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    
<h1>
    
        
                    {c.t("s.5.1.1.1.4.1.1.1.1.h1", "Congratulations VEEP SD05 Graduates")}        
        
    
</h1>
                
            
        
    
</div>
        </div>    
</div>
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" uk-grid="">    
        
<div className="uk-width-3-4@s uk-width-3-4@m">
    
        
            
            
            
                
                    <div className="uk-panel uk-text-meta uk-margin" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.4.3.1.1.1.div", "<time datetime=\"2025-11-20T11:49:52-08:00\">November 20, 2025</time> | <a href=\"/news\">News</a>") }} /><div className="uk-panel uk-margin">{c.t("s.5.1.1.1.4.3.1.1.2.div", "11 Graduates from the Veteran's Electrical Entry Program (VEEP) will begin their careers as Inside Wireman Apprentices at JATC's around the United States! A couple chose to stay here in San Diego to finish their apprenticeship\u2026")}</div>
                
            
        
    
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-1-4@s uk-width-1-4@m">
    
        
            
            
                        <div className="uk-panel uk-width-1-1">            
                
                    
<div className="uk-margin" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.4.3.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-default\" title=\"Read more\" aria-label=\"Tap here to read more about Congratulations VEEP SD05 Graduates\" href=\"/news/congratulations-veep-sd05-graduates\">\n    \n        Read more    \n    \n</a>") }} />

                
                        </div>            
        
    
</div>
        </div>    
</div></div>
                
            
        
    
</div>
    
</div>
                                </div>                
            
        
    
</div>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-3-4@m">
    
        
            
            
            
                
                    
<div className="uk-margin">
    
        <div className="uk-grid uk-child-width-1-1 uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-card uk-card-default uk-card-small uk-flex uk-flex-column">
    
                <div className="uk-grid-collapse uk-flex-1 uk-flex-column  uk-flex-row@m" uk-grid="">        
                        <div className="uk-width-1-2@m uk-flex uk-flex-column  uk-flex-1 uk-flex-initial@m">            
                                <div className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column" uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m">

    
        <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.7.1.1.1.1.1.1.1.1.1.1.1.0.img", "/images/news/news250625.jpg")} alt={c.a("s.7.1.1.1.1.1.1.1.1.1.1.1.0.img", "Group of high school girls at Boot Camp posing for photo")} /></picture>
        
    
</div>                
                        </div>            
                        <div className="uk-width-expand uk-flex-none uk-flex-1@m">            
                
                                <div className="uk-card-body uk-margin-remove-first-child">                
                    

        
                <h1 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.3.1.1.h1", "Welcome San Diego Building Trades High School Girls Boot Camp")}</h1>        
                <div className="el-meta uk-text-meta uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.1.1.1.3.1.3.div", "<time datetime=\"2025-06-25T12:49:52-07:00\">June 25, 2025</time> | <a href=\"/news\">News</a>") }} />        
    
        
        
                <div className="el-content uk-panel uk-margin-top">{c.t("s.7.1.1.1.1.1.1.1.1.3.1.5.div", "Huge thanks to IBEW Local 569 and the Electrical Training Institute staff for welcoming the Sa\u2026")}</div>        
        
                <div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.1.1.1.3.1.7.div", "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\" aria-label=\"Tap here to read about Welcome San Diego Building Trades High School Girls Boot Camp\" class=\"el-link uk-button uk-button-default\">Read more</a>") }} />        

                                </div>                
                
                        </div>            
                </div>        
    
</div></div>
                <div>
<div className="el-item uk-card uk-card-default uk-card-small uk-flex uk-flex-column">
    
                <div className="uk-grid-collapse uk-flex-1 uk-flex-column  uk-flex-row@m" uk-grid="">        
                        <div className="uk-width-1-2@m uk-flex uk-flex-column  uk-flex-1 uk-flex-initial@m">            
                                <div className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column" uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m">

    
        <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.7.1.1.1.1.1.3.1.1.1.1.1.0.img", "/images/news/news250312.jpg")} alt={c.a("s.7.1.1.1.1.1.3.1.1.1.1.1.0.img", "High school girl gives the thumb's up at ETI")} /></picture>
        
    
</div>                
                        </div>            
                        <div className="uk-width-expand uk-flex-none uk-flex-1@m">            
                
                                <div className="uk-card-body uk-margin-remove-first-child">                
                    

        
                <h1 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.3.1.1.h1", "Castle Park High School Visits ETI")}</h1>        
                <div className="el-meta uk-text-meta uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.3.1.1.3.1.3.div", "<time datetime=\"2025-03-12T11:44:50-07:00\">March 12, 2025</time> | <a href=\"/news\">News</a>") }} />        
    
        
        
                <div className="el-content uk-panel uk-margin-top">{c.t("s.7.1.1.1.1.1.3.1.1.3.1.5.div", "Thank you Castle Park High School for visiting ETI and learning about the amazing benefits an\u2026")}</div>        
        
                <div className="uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.3.1.1.3.1.7.div", "<a href=\"/news/castle-park-high-school-visits-eti\" aria-label=\"Tap here to read about Castle Park High School Visits ETI\" class=\"el-link uk-button uk-button-default\">Read more</a>") }} />        

                                </div>                
                
                        </div>            
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
        
            
            
            
                
                    
<div className="uk-h3 uk-visible@m">
    
        
                    {c.t("s.7.1.1.3.1.2.1.1.1.1.div", "Share Us")}        
        
    
</div>
<div id="template-kDt0xp3P#1" className="uk-margin-small-top uk-text-center uk-visible@m">    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" uk-grid="">
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fetiedu.org%2Fall-news" title="Tap here to share this page to Facebook." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Facebook."><span uk-icon="icon: facebook;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://x.com/intent/post?url=https%3A%2F%2Fetiedu.org%2Fall-news&text=" title="Tap here to share this page to X." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to X."><span uk-icon="icon: x;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://bsky.app/intent/compose?text=Tap+here+to+share+this+page+to+Bluesky.%0Ahttps%3A%2F%2Fetiedu.org%2Fall-news" rel="noreferrer" target="_blank" aria-label="Bluesky"><span uk-icon="icon: bluesky;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://mastodon.social/share?url=https%3A%2F%2Fetiedu.org%2Fall-news&text=" title="Tap here to share this page to Mastodon." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to Mastodon."><span uk-icon="icon: mastodon;"></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fetiedu.org%2Fall-news" title="Tap here to share this page to LinkedIn." rel="noreferrer" target="_blank" aria-label="Tap here to share this page to LinkedIn."><span uk-icon="icon: linkedin;"></span></a></li>
    
    </ul></div>
                
            
        
        </div>    
</div>
    
</div></div><div className="uk-panel uk-margin-top">
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
    
        
<div className="uk-width-2-3@s uk-width-1-1@m">
    
        
            
            
            
                
                    
<div className="uk-card uk-card-body uk-card-primary tm-child-list" id="template-kDt0xp3P#2">
        <div className="el-title uk-card-title">{c.t("s.7.1.1.3.1.3.1.1.1.1.div", "Latest News")}</div>    
    
<ul className="latestnews">
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.1.1.3.1.li", "<a href=\"/news/congratulations-veep-sd05-graduates\">Congratulations VEEP SD05 Graduates</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.1.1.3.3.li", "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Welcome San Diego Building Trades High School Girls Boot Camp</a>") }} />
        <li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.1.1.3.5.li", "<a href=\"/news/castle-park-high-school-visits-eti\"> Castle Park High School Visits ETI </a>") }} />
    </ul>

</div>
                
            
        
    
</div>
<div className="uk-grid-item-match uk-width-1-3@s uk-width-1-1@m">
        <div className="uk-card-default uk-card uk-card-small uk-card-body">    
        
            
            
            
                
                    
<div className="uk-panel tm-child-list">
        <div className="el-title uk-h3">{c.t("s.7.1.1.3.1.3.1.3.1.1.1.div", "Categories")}</div>    
    <ul className="categories-module">
    
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.3.1.1.3.1.li", "<a href=\"/news\">\n        News            </a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.3.1.1.3.3.li", "<a href=\"/news-events\">\n        Events            </a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.3.1.3.1.1.3.5.li", "<a href=\"/apprentice-of-the-month\">\n        Apprentice of the Month            </a>") }} />
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
