import type { ReactNode } from "react";
import ReadyCta from "@/components/ReadyCta";
import SectionHero from "@/components/SectionHero";
import TitledSection from "@/components/TitledSection";

import type { Accessor } from "@/components/applicants/types";

/**
 * Program Overview and Curriculum for the intelligent transportation systems apprenticeship.
 */
export default function body(c: Accessor): ReactNode {
  return (
    <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2{text-transform: uppercase;}#page\\#3 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-g17.jpg", alt: "Electrician Trainee digging a ditch for powerlines." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/intelligent-transportation-systems", html: "<span property=\"name\">Intelligent Transportation Systems</span>" }]} current="Program Overview and Curriculum" title="Program Overview and Curriculum" lead="The Intelligent Transportation Systems (ITS) Apprenticeship is a four-year program that prepares individuals for careers working on public infrastructure systems. Apprentices gain hands-on experience with traffic signals, street lighting, and transportation technologies while completing classroom training that builds the technical knowledge required for the trade." />
<TitledSection c={c} headingKey="s.7.1.1.1.1.0.1.h2" heading="Program Overview" section="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom" panel="uk-panel uk-margin-medium-bottom" panelId="page#0"><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Intelligent Transportation Systems (ITS) Apprenticeship is a four-year training program that prepares apprentices for careers as Transportation Systems Electricians. The program combines paid on-the-job training with structured classroom instruction, equipping apprentices with the technical knowledge and field experience required to work on critical public infrastructure systems.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 6,400 hours of on-the-job training with signatory contractors, working under the supervision of experienced Journeyman Transportation Systems Electricians. Apprentices rotate assignments to gain broad exposure to transportation and municipal electrical systems. Contractor placement is coordinated through the Electrical Training Institute.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "In addition to field training, apprentices complete approximately 802 hours of classroom instruction, attending classes two evenings per week. Coursework includes lectures, hands-on lab training, and competency assessments designed to reinforce real-world skills and ensure technical proficiency.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "ITS apprentices develop expertise in underground installations, conduit systems, traffic detection technology, freeway fiber optics and CCTV systems, photovoltaic applications, and street lighting and traffic signal systems. Training also includes blueprint reading, municipal coordination, system testing, troubleshooting, and repair.")}</p>
<p>{c.t("s.7.1.1.1.2.8.p", "Upon completion, apprentices receive a Certificate of Achievement \u2013 Transportation Systems Electrician through Palomar Community College, along with completion certificates from the California Division of Apprenticeship Standards and the U.S. Department of Labor Office of Apprenticeship.")}</p>
<p>{c.t("s.7.1.1.1.2.10.p", "Graduates are prepared to build long-term careers maintaining and installing the transportation systems that support safe and efficient public infrastructure.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-medium-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div>
<h2 className="uk-text-small uk-heading-line uk-margin-large-top uk-margin-medium-bottom uk-width-medium uk-margin-auto uk-text-center" id="page#2" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.5.h2", "<span>    \n        \n                    To Be Announced        \n        \n        </span>") }} /></TitledSection>
<ReadyCta c={c} section="s.9" panelId={3} />
    </>
  );
}
