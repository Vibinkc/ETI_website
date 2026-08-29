import { definePage, metadataFor } from "@/lib/page";
import SectionLinkCards from "@/components/SectionLinkCards";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/continuing-education";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Continuing Education - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-wm08.jpg", alt: "Journeymen installing a junction box." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }]} current="Continuing Education" title="Continuing Education Training" lead="At ETI, we are dedicated to advancing knowledge, strengthening skills, and supporting ongoing professional development within the electrical trade. Our training programs, resources, and updates are available to IBEW 569 members in good standing, including journeymen, apprentices, and electrician trainees, to support continued growth, adaptability, and excellence in the field." />
<SectionLinkCards c={c} grid="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center uk-grid-medium uk-grid-divider uk-grid-match" cards={[ { href: "/continuing-education/classes", title: "Classes" }, { href: "/continuing-education/state-certification-renewal", title: "State Certification Renewal" }, { href: "/continuing-education/3rd-party-online-classes", title: "3rd Party Online Classes" }, { href: "/continuing-education/faq", title: "FAQ" }, ]} />
  </>
));
