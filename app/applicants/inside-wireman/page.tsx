import Link from "next/link";
import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/applicants/inside-wireman";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Inside Wireman - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-bm02.jpg", alt: "Electrician opening an electric panel.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current="Inside Wireman" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Inside Wireman" leadKey="s.5.1.1.1.4.div" lead="The Inside Wireman Apprenticeship is a five-year training program that prepares individuals for careers as Journeyman electricians. Apprentices receive paid on-the-job training combined with classroom instruction, gaining the skills needed to install, maintain, and troubleshoot electrical systems in commercial and industrial settings." />
</PageHero>
<div className="uk-section-default uk-section">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div id="page#0" className="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center">
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-grid-medium uk-grid-divider uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/inside-wireman/program-overview-and-curriculum">    
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.1.1.1.1.h2", "Program Overview and Curriculum")}</h2>        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/inside-wireman/application-requirements-and-process">    
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.3.1.1.1.h2", "Application Requirements and Process")}</h2>        
        </Link>    
</div></div>
                <div>
<div className="el-item uk-flex uk-flex-column">
        <Link className="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-padding-small uk-margin-remove-first-child uk-link-toggle" href="/applicants/inside-wireman/faq">    
                <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.1.1.5.1.1.1.h2", "FAQ")}</h2>        
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
