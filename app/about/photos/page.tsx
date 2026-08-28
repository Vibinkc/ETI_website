import Link from "next/link";
import { definePage, metadataFor } from "@/lib/page";

const ROUTE = "/about/photos";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Photos - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h1 className="uk-h2 uk-text-center">
                    {c.t("s.4.1.1.1.1.h1", "Photo Galleries")}        
</h1>
<div uk-filter="target: .js-filter;" className="uk-margin-medium uk-text-center">
<ul className="el-nav uk-margin uk-subnav uk-flex-center" uk-margin="">
        <li className="uk-active" uk-filter-control="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.4.1.1.1.3.1.1.li", "<a href>All</a>") }} />
        <li uk-filter-control={"{\"filter\":\"[data-tag~=\\\"Event\\\"]\"}"} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.4.1.1.1.3.1.3.li", "<a href>Event</a>") }} />
        <li uk-filter-control={"{\"filter\":\"[data-tag~=\\\"Graduation\\\"]\"}"} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.4.1.1.1.3.1.5.li", "<a href>Graduation</a>") }} />
</ul>
            <div className="uk-grid js-filter uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-flex-center uk-grid-match" uk-grid="">                        <div data-tag="Graduation">
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-flex-1 uk-card uk-card-default uk-card-small uk-transition-toggle uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="/about/photos/graduation/2025-graduation">    
        <div className="uk-inline-clip uk-flex-1 uk-flex uk-flex-column">    
        <picture><img className="el-image uk-transition-scale-up uk-transition-opaque uk-flex-1" width="600" height="400" src={c.m("s.4.1.1.1.3.3.1.1.1.1.1.0.img", "/images/galleries/Graduation-2025/250613-BCP07853.jpg")} alt={c.a("s.4.1.1.1.3.3.1.1.1.1.1.0.img", "Photo of all of the 2025 graduates.")} /></picture>
        </div>    
                <h3 className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">{c.t("s.4.1.1.1.3.3.1.1.1.3.h3", "2025 Graduation")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.4.1.1.1.3.3.1.1.1.5.0.div", "View gallery")}</div></div>        
        </Link>    
</div></div>                        <div data-tag="Event">
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-flex-1 uk-card uk-card-default uk-card-small uk-transition-toggle uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="/about/photos/events/6th-annual-bbq-2025">    
        <div className="uk-inline-clip uk-flex-1 uk-flex uk-flex-column">    
        <picture><img className="el-image uk-transition-scale-up uk-transition-opaque uk-flex-1" width="600" height="400" src={c.m("s.4.1.1.1.3.3.3.1.1.1.1.0.img", "/images/galleries/2025-6th-Annual-BBQ/20250621_BCP_9728.jpg")} alt={c.a("s.4.1.1.1.3.3.3.1.1.1.1.0.img", "our people posing for a photo holding up a larger IBEW logo.")} /></picture>
        </div>    
                <h3 className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">{c.t("s.4.1.1.1.3.3.3.1.1.3.h3", "6th Annual BBQ - 2025")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.4.1.1.1.3.3.3.1.1.5.0.div", "View gallery")}</div></div>        
        </Link>    
</div></div>                        <div data-tag="Graduation">
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-flex-1 uk-card uk-card-default uk-card-small uk-transition-toggle uk-flex uk-flex-column uk-flex-middle uk-card-body uk-margin-remove-first-child uk-link-toggle" href="/about/photos/graduation/graduates-over-the-years">    
        <div className="uk-inline-clip uk-flex-1 uk-flex uk-flex-column">    
        <picture><img className="el-image uk-transition-scale-up uk-transition-opaque uk-flex-1" width="1352" height="1083" src={c.m("s.4.1.1.1.3.3.5.1.1.1.1.0.img", "/images/galleries/grads/Graduating-Class-of-1949-to-1951.jpg")} alt={c.a("s.4.1.1.1.3.3.5.1.1.1.1.0.img", "Group of ETI graduates from 1949 to 1051")} /></picture>
        </div>    
                <h3 className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">{c.t("s.4.1.1.1.3.3.5.1.1.3.h3", "Our Graduates Over the Years")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.4.1.1.1.3.3.5.1.1.5.0.div", "View gallery")}</div></div>        
        </Link>    
</div></div>                        </div>
</div>
</div>
</div>
                                </div>                
</div>
  </>
));
