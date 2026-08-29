import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import SectionLinkCards from "@/components/SectionLinkCards";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/electrician-trainees";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Electrician Trainees - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-g01.jpg", alt: "Electrician Trainee students standing around the istructor as he speake to them." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }]} current="Electrician Trainees" title="Electrician Trainees (ET)" lead={"Start your career in the electrical industry with hands-on experience from day one. The Electrician Trainee Program allows you to work on real jobsites, earn experience, and complete required training while progressing toward state certification. It\u2019s a practical first step for those looking to build a career and eventually enter a registered apprenticeship."} />
<SectionLinkCards c={c} grid="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-3@m uk-flex-center uk-grid-medium uk-grid-match" titleClass="el-title uk-h5 uk-margin-top uk-margin-auto-bottom" linkClass="uk-tile-hover uk-flex-1 uk-panel uk-tile-muted uk-flex uk-flex-column uk-flex-middle uk-padding-small uk-margin-remove-first-child uk-link-toggle" cards={[ { href: "/electrician-trainees/program-overview-and-curriculum", title: "Program Overview and Curriculum" }, { href: "/electrician-trainees/how-to-become-an-et", title: "How to Become an Electrician Trainee" }, { href: "/electrician-trainees/maintaining-your-et-card", title: "Maintaining Your Trainee Card" }, { href: "/electrician-trainees/faq", title: "FAQ" }, ]} />
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
