import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import SectionLinkCards from "@/components/SectionLinkCards";

const ROUTE = "/applicants/sound-communication";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Sound & Communication - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-em01.jpg", alt: "Electrician working in an underground junction box.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current="Sound & Communication" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Sound & Communication" leadKey="s.5.1.1.1.4.div" lead="The Sound & Communications Apprenticeship is a four-year program that prepares individuals for careers in the low-voltage and telecommunications industry. Apprentices gain hands-on experience installing and maintaining voice, data, and video systems while completing classroom training that builds the technical knowledge needed for long-term success in the field." />
</PageHero>
<SectionLinkCards
  c={c}
  cards={[
    { href: "/applicants/sound-communication/program-overview-and-curriculum", title: "Program Overview and Curriculum" },
    { href: "/applicants/sound-communication/application-requirements-and-process", title: "Application Requirements and Process" },
    { href: "/applicants/sound-communication/faq", title: "FAQ" },
  ]}
/>
<ReadyCta c={c} section="s.9" panelId={1} />
  </>
));
