import type { Metadata } from "next";
import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import { getContent, pageMetadata } from "@/lib/content";

const ROUTE = "/";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Home - Electrical Training Institute", "Electrical Training Institute home page");
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <>
      <Hero3D />
<main id="tm-main">
                <div id="system-message-container" aria-live="polite"></div>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{color:#fff;}#page\\#1{color:#fff;}#page\\#2{color:#fff;}@media (min-width: 960px){#page\\#3{margin-top: -92px !important;}}#page\\#4 .el-link{display:none;}#page\\#4 .el-title{text-transform:uppercase;}#page\\#5{background-color:#3350A0; padding:20px 0;}#page\\#6 .el-link{display:none;}#page\\#6 .el-title{text-transform:uppercase;}#page\\#7{background-color:#14448e; padding:20px 0;}#page\\#8 .el-link{display:none;}#page\\#8 .el-title{text-transform:uppercase;}#page\\#9{background-color:#0f3878; padding:20px 0;}#page\\#10 .el-link{display:none;}#page\\#10 .el-title{text-transform:uppercase;}#page\\#11{background-color:#08295b; padding:20px 0;}#page\\#12 .el-link{display:none;}#page\\#12 .el-title{text-transform:uppercase;}#page\\#12 svg{width: 80px; height: auto;}#page\\#13{background-color:#031f4a; padding:20px 0;}#page\\#14{margin-top:7%;}#page\\#15{margin-top:7%;}#page\\#16 .el-image{border-radius: 50%; box-shadow: 0 0 0 0 #c42650; transform: scale(1); animation: pulse 2s infinite; margin-top: -42px;}@keyframes pulse{0%{transform: scale(0.95); box-shadow: 0 0 0 0 rgba(196,38,80, 0.8);}70%{transform: scale(1); box-shadow: 0 0 0 10px rgba(196,38,80, 0);}100%{transform: scale(0.95); box-shadow: 0 0 0 0 rgba(196,38,80, 0);}}#page\\#17{margin-top:7%;}#page\\#18{margin-top:7%;}#page\\#19 .el-item{display: flex; flex-direction: column;}#page\\#19 .el-title{order: 2;}#page\\#19 .el-content{order: 1; margin-bottom:10px;}#page\\#19 .el-meta{order: 3;}#page\\#20{margin-top:7%;}#page\\#21 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#21 .el-content{margin-bottom:20px;}#page\\#21 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#22 .el-content{font-weight:bold;font-size:105%;}" }} />
<div id="page#3" className="uk-section-default uk-position-relative uk-section uk-flex uk-flex-middle" style={{ backgroundColor: "rgba(3, 31, 74, 0.6)" }} {...{ "uk-height-viewport": "offset-top: true;" }}>
                <video playsInline={true} loop={true} muted={true} className="uk-blend-multiply" {...{ "uk-cover": "" }} src={c.m("s.5.1.video", "/images/assets/eti-home.mp4")} />        
                        <div className="uk-width-1-1">
                                <div className="uk-container uk-position-relative">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h1 className="uk-heading-large uk-text-center" id="page#0">
                    {c.t("s.5.3.1.1.1.1.h1", "Electrical Training Institute")}        
</h1>
<h2 className="uk-heading-medium uk-margin-small-top uk-margin-medium-bottom uk-text-center" id="page#1">
                    {c.t("s.5.3.1.1.1.3.h2", "Of San Diego & Imperial Counties")}        
</h2>
<h3 className="uk-heading-small uk-margin-top uk-margin-large-bottom uk-text-center" id="page#2">
                    <p>{c.t("s.5.3.1.1.1.5.1.p", "Where skilled training meets real-world opportunity")}</p>        
</h3>
<div className="uk-margin uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.3.1.1.1.7.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />
</div>
</div>
                                </div>                
                        </div>
</div>
<div className="uk-section-default uk-section uk-padding-remove-vertical" {...{ "uk-scrollspy": "target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: 100;" }}>
                                <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal">                
<div className="uk-grid tm-grid-expand uk-grid-collapse" {...{ "uk-grid": "" }}>
<div className="uk-light uk-width-1-2@s uk-width-1-5@m" id="page#5">
<div className="uk-margin uk-text-center" id="page#4">
        <Link className="uk-display-block uk-panel uk-margin-remove-first-child uk-link-toggle" href="/applicants">    
        <img className="uk-text-emphasis el-image" width="60" height="80" {...{ "uk-svg": "" }} src={c.m("s.7.1.1.1.1.1.1.img", "/images/assets/file-alt-solid.svg")} alt={c.a("s.7.1.1.1.1.1.1.img", "")} />
                <h4 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.3.h4", "Applicants")}</h4>        
                <div className="el-content uk-panel uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.5.div", "Start a rewarding career <br>in electrical construction") }} />        
        </Link>    
</div>
</div>
<div className="uk-light uk-width-1-2@s uk-width-1-5@m" id="page#7">
<div className="uk-margin uk-text-center" id="page#6">
        <Link className="uk-display-block uk-panel uk-margin-remove-first-child uk-link-toggle" href="/apprentices">    
        <img className="uk-text-emphasis el-image" width="100" height="80" {...{ "uk-svg": "" }} src={c.m("s.7.1.1.3.1.1.1.img", "/images/assets/graduation-cap-solid.svg")} alt={c.a("s.7.1.1.3.1.1.1.img", "")} />
                <h4 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.3.1.1.3.h4", "Apprentices")}</h4>        
                <div className="el-content uk-panel uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.3.1.1.5.div", "Continue to train, earn, <br>and build your future") }} />        
        </Link>    
</div>
</div>
<div className="uk-light uk-width-1-3@s uk-width-1-5@m" id="page#9">
<div className="uk-margin uk-text-center" id="page#8">
        <Link className="uk-display-block uk-panel uk-margin-remove-first-child uk-link-toggle" href="/electrician-trainees">    
        <img className="uk-text-emphasis el-image" width="80" height="80" {...{ "uk-svg": "" }} src={c.m("s.7.1.1.5.1.1.1.img", "/images/assets/wire.svg")} alt={c.a("s.7.1.1.5.1.1.1.img", "")} />
                <h4 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.5.1.1.3.h4", "Electrician Trainees")}</h4>        
                <div className="el-content uk-panel uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.5.1.1.5.div", "Grow your career in <br>electrical construction") }} />        
        </Link>    
</div>
</div>
<div className="uk-light uk-width-1-3@s uk-width-1-5@m" id="page#11">
<div className="uk-margin uk-text-center" id="page#10">
        <Link className="uk-display-block uk-panel uk-margin-remove-first-child uk-link-toggle" href="/continuing-education">    
        <img className="uk-text-emphasis el-image" width="80" height="80" {...{ "uk-svg": "" }} src={c.m("s.7.1.1.7.1.1.1.img", "/images/assets/hard-hat-solid.svg")} alt={c.a("s.7.1.1.7.1.1.1.img", "")} />
                <h4 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.7.1.1.3.h4", "Continuing Education")}</h4>        
                <div className="el-content uk-panel uk-margin-top"><p>{c.t("s.7.1.1.7.1.1.5.0.p", "Expand your skills, stay up to date & maintain certifications")}</p></div>        
        </Link>    
</div>
</div>
<div className="uk-light uk-width-1-3@s uk-width-1-5@m" id="page#13">
<div className="uk-margin uk-text-center" id="page#12">
        <a className="uk-display-block uk-panel uk-margin-remove-first-child uk-link-toggle" href="https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php" target="_blank">    
        <span className="uk-text-emphasis el-image" {...{ "uk-icon": "icon: fa6-solid--user-gear;" }}></span>
                <h4 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.9.1.1.3.h4", "Contractors")}</h4>        
                <div className="el-content uk-panel uk-margin-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.9.1.1.5.div", "Request or verify skilled <br>apprentices for your jobsite") }} />        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-default">{c.t("s.7.1.1.9.1.1.7.0.div", "Tap here to visit the Contractors' page. Opens in a new browser tab.")}</div></div>        
        </a>    
</div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-large-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h2 className="uk-text-center">
                    {c.t("s.9.1.1.1.1.h2", "Your path to a fulfilling, union electrical career")}        
</h2><div className="uk-panel uk-text-lead uk-margin-top uk-margin-large-bottom uk-width-2xlarge uk-margin-auto uk-text-center"><p>{c.t("s.9.1.1.1.2.0.p", "When you join a union electrical apprenticeship, you\u2019re not just learning a trade \u2014 you\u2019re stepping into a career with power, purpose and a union family that has your back from day one.")}</p>
<p>{c.t("s.9.1.1.1.2.2.p", "Here\u2019s what your journey will look like.")}</p></div>
<div className="hd-timeline-container hd-timeline-align-right hd-timeline-align-right-alternate@m">
    <div className="hd-timeline-line" style={{ backgroundColor: "#70BB32" }}></div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.3.3.1.1.h3", "Apply to the Electrical Training Institute Apprenticeship Program")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.3.3.1.3.0.p", "<mark>Become part of a brotherhood and sisterhood</mark> committed to skill, safety and solidarity. Your journey begins the moment you decide you deserve a career with real dignity and real opportunity.") }} /></div>        
</div>
</div>
</div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.5.3.1.1.h3", "Earn While You Learn")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.5.3.1.3.0.p", "Union training means you never have to choose between paying your bills and building your future. <mark>You\u2019ll get paid from day one</mark> while training for a lifelong union trade, because a real career shouldn\u2019t put you in debt.") }} /></div>        
</div>
</div>
</div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.7.3.1.1.h3", "Learn From the Best")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.7.3.1.3.0.p", "Classroom instruction gives you the technical skills and tools to succeed. <mark>You\u2019re learning from instructors who\u2019ve spent years in the field</mark> and believe in passing the trade on the right way, the safe way, the union way.") }} /></div>        
</div>
</div>
</div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.9.3.1.1.h3", "Experience Strength Through Solidarity")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.9.3.1.3.0.p", "Enjoy the union difference -<mark>better pay, strong benefits, a good retirement, workplace protections and more.</mark> Learn of the power that comes from standing together as a member of the IBEW.") }} /></div>        
</div>
</div>
</div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.11.3.1.1.h3", "Become a Journeyman Electrician")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.11.3.1.3.0.p", "Once you complete your training, you\u2019ll earn more than the title of Journeyman Electrician. <mark>You\u2019ll earn stability, pride and a future built on union protections, competitive pay and the power of standing together with thousands of IBEW professionals.</mark> These are skills and relationships that will benefit you the rest of your life, no matter where you go.") }} /></div>        
</div>
</div>
</div>
        <div>
<span className="el-timeline-icon" {...{ "uk-icon": "icon: eti-logo; width: 40; height: 40;" }} style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderColor: "#70BB32" }}></span>
<div className="hd-timeline-item-container">
<div className="el-item uk-margin-top uk-panel uk-tile-muted uk-padding uk-margin-remove-first-child">
                <h3 className="el-title uk-card-title uk-text-primary uk-margin-top uk-margin-remove-bottom">                        {c.t("s.9.1.1.1.4.13.3.1.1.h3", "Work Hard. Live Well.")}                    </h3>        
                <div className="el-content uk-panel uk-margin-top"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.4.13.3.1.3.0.p", "Join a trade where you take out of it what you put into it. <mark>This is not just a job - it\u2019s a career.</mark> It\u2019s the next step in the rest of your life.") }} /></div>        
</div>
</div>
</div>
</div>
<div className="uk-panel uk-text-lead uk-margin-large-top uk-margin-bottom uk-width-2xlarge uk-margin-auto uk-text-center"><p>{c.t("s.9.1.1.1.6.0.p", "Fair wages, good benefits, a comfortable retirement, a union family and training in skills from the best for a career that will last a lifetime.")}</p>
<p>{c.t("s.9.1.1.1.6.2.p", "What\u2019s stopping you?")}</p></div>
<div className="uk-margin-medium-top uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.8.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />
</div>
</div>
                                </div>                
</div>
<div className="uk-section-primary uk-section uk-section-medium-top uk-section-large-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin-large-bottom" id="page#14"><div>
<h2 className="elHeadLt" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.11.1.1.1.1.0.1.h2", "Opportunities<br class=\"uk-hidden@s\"> for Veterans") }} />
</div></div><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container uk-container-xsmall">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-4@m">
<div className="uk-margin uk-text-center">
        <picture><img className="el-image" loading="lazy" width="175" height="149" src={c.m("s.11.1.1.1.2.1.1.1.1.1.0.img", "/media/yootheme/cache/74/VEEP_Logo-7455a20e.png")} alt={c.a("s.11.1.1.1.2.1.1.1.1.1.0.img", "Offical VEEP logo")} /></picture>    
</div>
</div>
<div className="uk-width-3-4@m">
                    <div className="uk-panel uk-text-lead uk-margin-bottom uk-width-xlarge uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto">{c.t("s.11.1.1.1.2.1.1.3.1.div", "Our program offers military veterans a direct route into a skilled trade with strong pay, full benefits, and long-term stability. Your service experience translates into leadership, discipline, and teamwork\u2014qualities valued in every corner of the electrical industry.")}</div>
<div className="uk-margin-medium-top uk-text-left@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.11.1.1.1.2.1.1.3.3.div", "<a class=\"el-content uk-button uk-button-default\" aria-label=\"Tap here to learn more about opportunities for veterans.\" href=\"/applicants/veep\">\n    \n        Learn More    \n    \n</a>") }} />
</div>
        </div>    
</div></div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-large-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin" id="page#15"><div>
<h2 className="elHead" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.13.1.1.1.1.0.1.h2", "Over 80 Years <br class=\"uk-hidden@s\">of Excellence") }} />
</div></div>
</div>
</div>
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-row-large uk-child-width-1-1">
<div className="uk-grid-item-match uk-width-1-1">
                        <div className="uk-panel uk-width-1-1">            
<div className="uk-position-relative uk-margin uk-text-center" style={{ zIndex: "1" }}>
        <a className="el-link uk-box-shadow-bottom" href="#js-3" {...{ "uk-toggle": "" }}><picture><img className="el-image" width="750" height="393" src={c.m("s.13.1.3.1.1.1.1.0.0.img", "/media/yootheme/cache/0a/home-video-0a5ba3bd.jpg")} alt={c.a("s.13.1.3.1.1.1.1.0.0.img", "Watch the video about San Diego Electrical Training Institute ")} /></picture></a>    
            <div id="js-3" className="uk-flex-top uk-modal" {...{ "uk-modal": "" }}>
        <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
            <button className="uk-modal-close-outside" type="button" {...{ "uk-close": "" }}></button>
            <iframe src="https://www.youtube.com/embed/iZDcXoZ-9V0?si=HBf9I2X_EcCIDgg9&disablekb=1" width="950" height="534" allowFullScreen={true} loading="lazy" {...{ "uk-video": "" }} {...{ "uk-responsive": "" }} referrerPolicy="strict-origin-when-cross-origin" title="Video"></iframe>        </div>
    </div>
</div>
<div className="uk-disabled uk-position-absolute uk-width-1-1 uk-text-center" id="page#16" style={{ top: "45%", zIndex: "2" }}>
        <img className="el-image" width="84" height="84" src={c.m("s.13.1.3.1.1.3.1.img", "/images/assets/icon-play.svg")} alt={c.a("s.13.1.3.1.1.3.1.img", "Video play button")} />    
</div>
                        </div>            
</div>
</div>
                                </div>                
</div>
<div className="uk-section-secondary uk-preserve-color uk-section uk-section-medium-top uk-section-large-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin-large-bottom" id="page#17"><div>
<h2 className="elHeadLt">{c.t("s.15.1.1.1.1.0.1.h2", "Latest News")}</h2>
</div></div>
<div className="uk-slider-container uk-margin uk-text-center" {...{ "uk-slider": "autoplay: 1;" }}>
    <div className="uk-position-relative">
            <div className="uk-slider-items uk-grid">                                <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-flex">
<div className="el-item uk-width-1-1 uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-default uk-flex uk-flex-column uk-flex-middle uk-link-toggle" href="/news/congratulations-veep-sd05-graduates" aria-label="Tap here to read the article.">    
    <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.15.1.1.1.3.1.1.1.1.1.1.0.img", "/images/news/news251120.jpg")} alt={c.a("s.15.1.1.1.3.1.1.1.1.1.1.0.img", "Group of VEEP graduates standing together for a photo.")} /></picture>
                                <div className="uk-width-1-1 uk-padding-small uk-margin-remove-first-child">                
                <div className="el-meta uk-text-meta uk-margin-top">{c.t("s.15.1.1.1.3.1.1.1.1.1.3.1.div", "November 20, 2025")}</div>        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.15.1.1.1.3.1.1.1.1.1.3.3.h3", "Congratulations VEEP SD05 Graduates")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.15.1.1.1.3.1.1.1.1.1.3.5.0.div", "Read more")}</div></div>        
                                </div>                
        </Link>    
</div></div>                                <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-flex">
<div className="el-item uk-width-1-1 uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-default uk-flex uk-flex-column uk-flex-middle uk-link-toggle" href="/news/welcome-san-diego-building-trades-high-school-girls-boot-camp" aria-label="Tap here to read the article.">    
    <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.15.1.1.1.3.1.1.3.1.1.1.0.img", "/images/news/news250625.jpg")} alt={c.a("s.15.1.1.1.3.1.1.3.1.1.1.0.img", "Group of high school girls at Boot Camp posing for photo")} /></picture>
                                <div className="uk-width-1-1 uk-padding-small uk-margin-remove-first-child">                
                <div className="el-meta uk-text-meta uk-margin-top">{c.t("s.15.1.1.1.3.1.1.3.1.1.3.1.div", "June 25, 2025")}</div>        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.15.1.1.1.3.1.1.3.1.1.3.3.h3", "Welcome San Diego Building Trades High School Girls Boot Camp")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.15.1.1.1.3.1.1.3.1.1.3.5.0.div", "Read more")}</div></div>        
                                </div>                
        </Link>    
</div></div>                                <div className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-flex">
<div className="el-item uk-width-1-1 uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-default uk-flex uk-flex-column uk-flex-middle uk-link-toggle" href="/news/castle-park-high-school-visits-eti" aria-label="Tap here to read the article.">    
    <picture><img className="el-image uk-flex-1" loading="lazy" width="1200" height="628" src={c.m("s.15.1.1.1.3.1.1.5.1.1.1.0.img", "/images/news/news250312.jpg")} alt={c.a("s.15.1.1.1.3.1.1.5.1.1.1.0.img", "High school girl gives the thumb's up at ETI")} /></picture>
                                <div className="uk-width-1-1 uk-padding-small uk-margin-remove-first-child">                
                <div className="el-meta uk-text-meta uk-margin-top">{c.t("s.15.1.1.1.3.1.1.5.1.1.3.1.div", "March 12, 2025")}</div>        
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">{c.t("s.15.1.1.1.3.1.1.5.1.1.3.3.h3", "Castle Park High School Visits ETI")}</h3>        
                <div className="uk-margin-top"><div className="el-link uk-button uk-button-text">{c.t("s.15.1.1.1.3.1.1.5.1.1.3.5.0.div", "Read more")}</div></div>        
                                </div>                
        </Link>    
</div></div>                            </div>
    </div>
<div className="uk-margin-top" {...{ "uk-inverse": "" }}>
    <ul className="el-nav uk-slider-nav uk-dotnav uk-flex-center" {...{ "uk-margin": "" }}></ul>
</div>    
</div><div className="uk-panel uk-margin-medium-top uk-text-center"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.15.1.1.1.4.0.p", "<a class=\"el-link uk-button uk-button-text\" style=\"color: #fff;\" href=\"/all-news\" title=\"Tap of click here to read more news\">Read more news</a>") }} /></div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-small-bottom">
                                <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large-bottom">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin" id="page#18"><div>
<h2 className="elHead" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.17.1.1.1.1.0.1.h2", "What Members<br class=\"uk-hidden@s\"> Are Saying") }} />
</div></div>
</div>
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div className="uk-slider-container video-slider uk-margin-bottom uk-text-center" {...{ "uk-slider": "center: 1; velocity: 0.15; autoplay: 1;  autoplayInterval: 5000;" }} id="page#19">
    <div className="uk-position-relative">
            <div className="uk-slider-items uk-grid uk-grid-large uk-flex-middle">                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.1.1.1.h3", "Equalia Vines")} </h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.1.1.3.div", "Apprentice")}</div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="04WilBdpOu4">
  <img src={c.m("s.17.1.3.1.1.1.1.1.1.5.0.1.img", "/yt/04WilBdpOu4.jpg")} alt={c.a("s.17.1.3.1.1.1.1.1.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.3.1.1.h3", "Jorge Murrieta")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.3.1.3.div", "Journeyman")}</div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="U8PzhZirb4Q">
  <img src={c.m("s.17.1.3.1.1.1.1.3.1.5.0.1.img", "/yt/U8PzhZirb4Q.jpg")} alt={c.a("s.17.1.3.1.1.1.1.3.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.5.1.1.h3", "Desiree Bates")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.5.1.3.div", "Journeyman")}</div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="WOvX1L9f3oU">
  <img src={c.m("s.17.1.3.1.1.1.1.5.1.5.0.1.img", "/yt/WOvX1L9f3oU.jpg")} alt={c.a("s.17.1.3.1.1.1.1.5.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.7.1.1.h3", "Lily Voon")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.7.1.3.div", "Apprentice")} </div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="MhZQ_P-Jp48">
  <img src={c.m("s.17.1.3.1.1.1.1.7.1.5.0.1.img", "/yt/MhZQ_P-Jp48.jpg")} alt={c.a("s.17.1.3.1.1.1.1.7.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.9.1.1.h3", "David Johnson")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.9.1.3.div", "ETI Instructor")}</div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="FnNEYkAH5VQ">
  <img src={c.m("s.17.1.3.1.1.1.1.9.1.5.0.1.img", "/yt/FnNEYkAH5VQ.jpg")} alt={c.a("s.17.1.3.1.1.1.1.9.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.11.1.1.h3", "Shawn Barton")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.11.1.3.div", "Apprentice")} </div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="rypWAhtIHrM">
  <img src={c.m("s.17.1.3.1.1.1.1.11.1.5.0.1.img", "/yt/rypWAhtIHrM.jpg")} alt={c.a("s.17.1.3.1.1.1.1.11.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                                <div className="uk-width-1-1 uk-width-4-5@s uk-width-3-5@m">
<div className="el-item uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child">
                <h3 className="el-title uk-text-lead uk-margin-top uk-margin-remove-bottom">{c.t("s.17.1.3.1.1.1.1.13.1.1.h3", "Matt Graboski")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-xsmall-top">{c.t("s.17.1.3.1.1.1.1.13.1.3.div", "Journeyman")}</div>        
                <div className="el-content uk-panel uk-margin-remove-top"><div className="yt-lite" data-id="b3oGb4S4F_U">
  <img src={c.m("s.17.1.3.1.1.1.1.13.1.5.0.1.img", "/yt/b3oGb4S4F_U.jpg")} alt={c.a("s.17.1.3.1.1.1.1.13.1.5.0.1.img", "")} />
  <div className="play-button"></div>
</div></div>        
</div></div>                            </div>
    </div>
<div className="uk-margin-top" {...{ "uk-inverse": "" }}>
    <ul className="el-nav uk-slider-nav uk-dotnav uk-flex-center" {...{ "uk-margin": "" }}></ul>
</div>    
</div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-large-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <div className="uk-panel uk-margin-medium-bottom" id="page#20"><div>
<h2 className="elHead" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.1.0.1.h2", "Frequently<br class=\"uk-hidden@s\"> Asked Questions") }} />
</div></div>
<div className="uk-accordion-default uk-margin-remove-top uk-width-xlarge uk-margin-auto" {...{ "uk-accordion": "collapsible: true;" }} id="page#21">
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.1.1.a", "Who can apply to the program? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.19.1.1.1.3.1.3.1.0.p", "Applicants must meet minimum age, education and eligibility requirements. Specific application requirements are listed for each program:")}</p>
<ul>
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.1.3.1.2.1.li", "<a class=\"el-content uk-button uk-button-text\" href=\"/applicants/inside-wireman/application-requirements-and-process\" title=\"Tap here for Inside Wireman application requirements\">Inside Wireman</a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.1.3.1.2.3.li", "<a class=\"el-content uk-button uk-button-text\" href=\"/applicants/sound-communication/application-requirements-and-process\" title=\"Tap here for Sound & Communication\">Sound &amp; Communication</a>") }} />
<li data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.1.3.1.2.5.li", "<a class=\"el-content uk-button uk-button-text\" href=\"/applicants/intelligent-transportation-systems/application-requirements-and-process\" title=\"Tap here for Intelligent Transportation Systems application requirements\">Intelligent Transportation Systems</a>") }} />
</ul></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.3.1.a", "Do I need prior electrical experience? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.19.1.1.1.3.3.3.1.div", "No prior electrical experience. Training is designed to start from the fundamentals and build skills over time.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.5.1.a", "Is this a paid apprenticeship? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.19.1.1.1.3.5.3.1.div", "Yes. Apprentices earn wages while completing on-the-job training and classroom instruction.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.7.1.a", "How long does the apprenticeship take to complete? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.19.1.1.1.3.7.3.1.div", "Program length varies, but most apprenticeships range from four to five years.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.19.1.1.1.3.9.1.a", "How much does the program cost? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.19.1.1.1.3.9.3.1.div", "Most costs are covered by the apprenticeship program.")}</div>                
    </div>
</div>    
</div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-primary uk-section">
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-3-5@m">
<h1 className="uk-text-left@m uk-text-center">
                    {c.t("s.21.1.1.1.1.h1", "Are you Ready?")}        
</h1><div className="uk-panel uk-text-lead uk-position-relative uk-margin uk-text-left@m uk-text-center" style={{ left: "3px", top: "-6px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.21.1.1.1.2.div", "Take the next step to the <br class=\"uk-hidden@s\">rest of your life.") }} />
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
                        <div className="uk-panel uk-width-1-1">            
<div id="page#22" className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.21.1.1.3.1.1.div", "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />
                        </div>            
</div>
        </div>    
</div>
</div>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-small-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div>    <div style={{ marginTop: "1px" }}></div>
</div>
</div>
</div>
                                </div>                
</div>
            </main>
    </>
  );
}
