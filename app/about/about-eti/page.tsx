import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";

const ROUTE = "/about/about-eti";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "About ETI - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{text-transform: uppercase;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<div className="uk-section uk-padding-remove-vertical">
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" {...{ "uk-grid": "" }}>
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-large uk-card-body uk-flex uk-flex-middle">    
                        <div className="uk-panel uk-width-1-1">            
<h1 className="uk-h2">
                    {c.t("s.5.1.1.1.1.1.h1", "Electrical Training Institute")}        
</h1><div className="uk-panel uk-text-lead uk-margin">{c.t("s.5.1.1.1.1.2.div", "Welcome to Electrical Training Institute (ETI)\u2014your gateway to a brighter future in the electrical and telecommunications industries. Our programs are designed to equip aspiring professionals with the skills, knowledge, and hands-on experience needed to excel in high-demand technical careers.")}</div>
                        </div>            
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g04.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Femail instructor teaching Electrician trainees in a classroor.")} /></picture>    
</div>
        </div>    
</div>
</div>
</div>
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div className="uk-margin-medium-bottom uk-width-2xlarge uk-margin-auto uk-text-center">
        <picture><img className="el-image uk-box-shadow-large" loading="lazy" width="1200" height="628" src={c.m("s.7.1.1.1.1.1.0.img", "/images/assets/home-video.jpg")} alt={c.a("s.7.1.1.1.1.1.0.img", "")} /></picture>    
</div><div className="uk-panel uk-margin uk-width-xlarge uk-margin-auto">{c.t("s.7.1.1.1.2.div", "Electrical Training Institute (ETI) is committed to delivering top-tier education through comprehensive training programs that blend theoretical instruction with real-world application. We partner with industry leaders, including the International Brotherhood of Electrical Workers (IBEW) and the National Electrical Contractors Association (NECA), to ensure our curriculum is aligned with the latest industry standards and technological advancements.")}</div>
<h2 className="uk-text-small uk-heading-line uk-margin-medium-top uk-margin-bottom uk-width-xlarge uk-margin-auto uk-text-center" id="page#0" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.4.h2", "<span>    \n        \n                    Our Mission Statement        \n        \n        </span>") }} /><div className="uk-panel uk-margin uk-width-xlarge uk-margin-auto"><p>{c.t("s.7.1.1.1.5.0.p", "The Electrical Training Institute (ETI) of San Diego and Imperial Counties, in alliance with the International Brotherhood of Electrical Workers (IBEW) Local Union 569 and the National Electrical Contractors Association (NECA) of San Diego, provides a professional, cutting-edge team of Industry-leading electrical workers through innovative training in emerging technologies.")}</p>
<p>{c.t("s.7.1.1.1.5.2.p", "The Electrical Training Institute strives to develop a higher standard of living for all members of the community as we progress toward a better place for everyone to work and live.")}</p></div>
<div className="uk-margin-medium-top uk-margin-bottom uk-text-center">
        <img className="el-image" loading="lazy" width="110" height="26" src={c.m("s.7.1.1.1.7.1.img", "/images/assets/resistor.svg")} alt={c.a("s.7.1.1.1.7.1.img", "")} />    
</div><div className="uk-panel uk-margin uk-width-xlarge uk-margin-auto"><p>{c.t("s.7.1.1.1.8.0.p", "You may recognize the electrical schematic symbol above, used throughout this site. In the electrical industry, it represents resistance\u2014the opposition to the flow of current. More broadly, resistance also means the refusal to accept or comply with something, or the act of standing up to prevent it. This symbol reflects both meanings: the literal control of electrical power and the collective power of organized labor.")}</p></div>
</div>
</div>
                                </div>                
</div>
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
