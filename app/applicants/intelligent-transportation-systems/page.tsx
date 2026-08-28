import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import SectionLinkCards from "@/components/SectionLinkCards";

const ROUTE = "/applicants/intelligent-transportation-systems";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Intelligent Transportation Systems - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-bm03.jpg", alt: "Electrician Trainee working a backhoe", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current="Intelligent Transportation Systems" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Intelligent Transportation Systems" leadKey="s.5.1.1.1.4.div" lead="Build the systems that keep cities moving. The ITS Apprenticeship combines paid, hands-on training with classroom instruction, preparing you to work on traffic signals, fiber optics, and critical transportation infrastructure that supports safe and efficient travel." />
</PageHero>
<SectionLinkCards
  c={c}
  cards={[
    { href: "/applicants/intelligent-transportation-systems/program-overview-and-curriculum", title: "Program Overview and Curriculum" },
    { href: "/applicants/intelligent-transportation-systems/application-requirements-and-process", title: "Application Requirements and Process" },
    { href: "/applicants/intelligent-transportation-systems/faq", title: "FAQ" },
  ]}
/>
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
