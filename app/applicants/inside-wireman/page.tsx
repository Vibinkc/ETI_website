import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import SectionLinkCards from "@/components/SectionLinkCards";

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
<SectionLinkCards
  c={c}
  cards={[
    { href: "/applicants/inside-wireman/program-overview-and-curriculum", title: "Program Overview and Curriculum" },
    { href: "/applicants/inside-wireman/application-requirements-and-process", title: "Application Requirements and Process" },
    { href: "/applicants/inside-wireman/faq", title: "FAQ" },
  ]}
/>
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
