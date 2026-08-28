import Link from "next/link";
import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/electrician-trainees";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Electrician Trainees - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-g01.jpg", alt: "Electrician Trainee students standing around the istructor as he speake to them.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }]} current="Electrician Trainees" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Electrician Trainees (ET)" leadKey="s.5.1.1.1.4.div" lead={"Start your career in the electrical industry with hands-on experience from day one. The Electrician Trainee Program allows you to work on real jobsites, earn experience, and complete required training while progressing toward state certification. It\u2019s a practical first step for those looking to build a career and eventually enter a registered apprenticeship."} />
</PageHero>
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
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
