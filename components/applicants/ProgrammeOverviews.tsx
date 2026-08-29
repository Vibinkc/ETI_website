import type { ReactNode } from "react";
import ReadyCta from "@/components/ReadyCta";
import SectionHero from "@/components/SectionHero";
import TitledSection from "@/components/TitledSection";

type Accessor = {
  t: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
  m: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

/**
 * The program overview and curriculum page for each apprenticeship.
 *
 * These were three route files that opened with the same seventeen lines and
 * then said something different. One route serves them now
 * (app/applicants/[program]/program-overview-and-curriculum); the part that differs is here, unchanged.
 */
export const PROGRAMME_OVERVIEWS: Record<string, (c: Accessor) => ReactNode> = {
  "inside-wireman": (c) => (
    <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/et-Landing.jpg", alt: "Woman electrician in the attic working on wires." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/inside-wireman", html: "<span property=\"name\">Inside Wireman</span>" }]} current="Program Overview and Curriculum" title="Program Overview and Curriculum" lead="The Inside Wireman Apprenticeship offers a direct path to a career in the electrical industry. Apprentices earn while they learn, gaining hands-on experience and technical training needed to work on electrical systems that power buildings, infrastructure, and modern facilities." />
<TitledSection c={c} headingKey="s.7.1.1.1.1.0.1.h2" heading="Program Overview" section="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom" panel="uk-panel uk-margin-medium-bottom" panelId="page#0"><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Inside Wireman Apprenticeship is a comprehensive five-year training program designed to prepare apprentices for careers as Journeyman Inside Wiremen. The program combines paid on-the-job training with structured classroom instruction, allowing apprentices to develop the skills and knowledge required to work in the electrical industry.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 8,000 hours of on-the-job training working for licensed electrical contractors throughout San Diego County. This hands-on experience is supported by a minimum of 1,000 hours of related classroom and lab instruction, where apprentices study electrical theory, safety practices, and industry standards while reinforcing skills learned in the field.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "Inside Wireman apprentices install, maintain, and troubleshoot electrical systems in commercial and industrial facilities. This includes working with electrical conduits, wiring systems, cables, motor controls, and panelboards used to power buildings and equipment.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "Graduates of the program gain the experience and training necessary to become state-certified electricians and work as Journeyman Inside Wiremen.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-small-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div><div className="uk-panel uk-text-large uk-margin-xsmall-bottom uk-text-center">{c.t("s.7.1.1.1.4.div", "Inside Wireman")}</div><div className="uk-panel uk-margin-remove-top uk-margin-large-bottom uk-text-center">{c.t("s.7.1.1.1.5.div", "(5-year program)")}</div>
<div className="uk-margin">
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-flex-center uk-grid-row-large uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.1.1.1.h3", "APIW 101")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.1.1.3.div", "(2-week day school format)")}</div>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.1.li", "Introduction to Apprenticeship")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.3.li", "Electrical job information")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.5.li", "Applied Codeology")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.7.li", "Harassment prevention awareness")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.9.li", "Material Identification (boxes & fittings)")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.11.li", "Conduit bending and fabrication")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.13.li", "Various circuit switching labs")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.3.1.1.h3", "APIW 102")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.3.1.3.div", "(2-week day school format)")}</div>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.1.li", "Electrical Theory DC")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.3.li", "DC Theory Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.5.li", "Construction drawings")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.5.0.7.li", "Progressions from previous conduit bending and various circuit switching labs")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.5.1.1.h3", "APIW 103")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.5.1.3.div", "(2-week day school format)")}</div>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.1.li", "Electrical Theory AC")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.3.li", "AC Theory Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.5.li", "Code")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.7.li", "Standards & Practices II")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.5.0.9.li", "Progressions from previous conduit bending and various circuit switching labs")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.7.1.1.h3", "APIW 104")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.7.1.3.div", "(2-week day school format)")}</div>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.1.li", "Codeology (Navigating the Codebook)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.3.li", "Blueprint reading")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.5.li", "Blueprints Lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.5.0.7.li", "Intermediate conduit bending and various circuit switching labs")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.9.1.1.h3", "APIW 105")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.1.li", "Motor Controls lecture & lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.3.li", "Transformers lecture & lab")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.5.li", "Advanced conduit bending")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.7.li", "Various circuit switching labs")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.9.li", "LOTO (Lock Out/Tag Out)")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.11.1.1.h3", "APIW 106")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.1.li", "Solar (Photovoltaic Systems)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.3.li", "ESAM-TAC (Battery Storage)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.5.li", "EVITP (Electric Vehicle Infrastructure Training)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.7.li", "NFPA 70E")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.9.li", "Advanced conduit bending")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.13.1.1.h3", "APIW 107")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.1.li", "Intro to Fire Alarm systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.3.li", "Intro to Structured Cabling systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.5.li", "Intro to Fiber Optics systems (including labs)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.7.li", "Bluebeam")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.9.li", "Preparing for Leadership")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.15.1.1.h3", "APIW 108")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.1.li", "Electrical Certification Prep \u2013 CA General Electrician Cert")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.17.1.1.h3", "APIW 109")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.1.li", "Project Supervision")}</li>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.3.li", "Test Instruments")}</li>
<li>{c.t("s.7.1.1.1.7.1.17.1.3.0.5.li", "Service Equipment")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.19.1.1.h3", "APIW 110")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.19.1.3.0.1.li", "OSHA-30")}</li>
<li>{c.t("s.7.1.1.1.7.1.19.1.3.0.3.li", "CALCTP Technician Course (Lighting Controls & Safety)")}</li>
</ul></div>        
</div></div>
                </div>
</div></TitledSection>
<ReadyCta c={c} section="s.9" panelId={2} />
    </>
  ),
  "sound-communication": (c) => (
    <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-top:7%;}#page\\#2 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-em03.jpg", alt: "Electrician trainee in school working with wires." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/sound-communication", html: "<span property=\"name\">Sound &amp; Communication</span>" }]} current="Program Overview and Curriculum" title="Program Overview and Curriculum" lead="Start a career in the fast-growing world of low-voltage technology. The Sound & Communications Apprenticeship combines paid, hands-on training with classroom instruction, giving you the skills to install and maintain everything from data networks and security systems to audio/visual and life-safety systems." aspectAuto={false} lazy rightWidth="uk-width-2-5@m" rightCardClass="uk-card-primary uk-card uk-card-body uk-padding-remove" imageWrapClass="uk-margin" />
<TitledSection c={c} headingKey="s.7.1.1.1.1.0.1.h2" heading="Program Overview" section="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom" panel="uk-panel uk-margin-medium-bottom" panelId="page#0"><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.2.0.p", "The Sound & Communications Apprenticeship is a four-year training program that prepares apprentices for careers as Telecommunications Installers and Technicians. The program combines paid on-the-job training with classroom instruction, allowing apprentices to develop the technical skills needed to work in the growing low-voltage industry.")}</p>
<p>{c.t("s.7.1.1.1.2.2.p", "Apprentices complete approximately 6,000 hours of on-the-job training, gaining hands-on experience installing, maintaining, and troubleshooting voice, data, and video systems. This field experience is supported by a minimum of 480 hours of classroom and lab instruction, where apprentices study the theory and practices required for success in the trade.")}</p>
<p>{c.t("s.7.1.1.1.2.4.p", "Sound & Communications apprentices work in both new construction and existing facilities installing cabling and equipment for telephone systems, computer networks, video distribution, security and access control, audio/video systems, and fire and life-safety systems.")}</p>
<p>{c.t("s.7.1.1.1.2.6.p", "Graduates of the program gain the training and experience needed to build long-term careers in the telecommunications and low-voltage industry.")}</p></div><div className="uk-panel uk-margin-large-top uk-margin-small-bottom" id="page#1"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.3.0.1.h2", "Curriculum")}</h2>
</div></div><div className="uk-panel uk-text-large uk-margin-xsmall-bottom uk-text-center">{c.t("s.7.1.1.1.4.div", "Sound Technician")}</div><div className="uk-panel uk-margin-remove-top uk-margin-large-bottom uk-text-center">{c.t("s.7.1.1.1.5.div", "(4-year program)")}</div>
<div className="uk-margin">
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-flex-center uk-grid-row-large uk-grid-match" uk-grid="">                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.1.1.1.h3", "APSC 101")}</h3>        
                <div className="el-meta uk-text-meta uk-margin-remove-top">{c.t("s.7.1.1.1.7.1.1.1.3.div", "(2-week day school format)")}</div>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.1.li", "Code I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.3.li", "Blueprints I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.5.li", "Fire I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.7.li", "Network I (Copper)")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.9.li", "Meters I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.11.li", "Material ID I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.13.li", "Knots I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.15.li", "Anti-Harassment I")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.17.li", "Electric Job Info")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.19.li", "Circuit Essentials")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.21.li", "Intro to Apprenticeship")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.23.li", "Introduction to Skilled Trades")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.25.li", "Powder Actuated Tools Certification")}</li>
<li>{c.t("s.7.1.1.1.7.1.1.1.5.0.27.li", "Safety I (OSHA 10 & CPR)")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.3.1.1.h3", "APSC 102")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.1.li", "Code II (Applied Codeology)")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.3.li", "Network II (Fiber)")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.5.li", "Meters II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.7.li", "Material ID II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.9.li", "Knots II")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.11.li", "Install/Tech Elec Job Info 1")}</li>
<li>{c.t("s.7.1.1.1.7.1.3.1.3.0.13.li", "Install/Tech Elec Job Info 3")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.5.1.1.h3", "APSC 103")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.1.li", "Electrical Theory I (DC)")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.3.li", "Computer Skills I")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.5.li", "Blueprints II")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.7.li", "Meters III")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.9.li", "I/T Elec Job Info 2")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.11.li", "Leadership I")}</li>
<li>{c.t("s.7.1.1.1.7.1.5.1.3.0.13.li", "Code III (CodeStandards& Practices 1-Level 1)")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.7.1.1.h3", "APSC 104")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.1.li", "Electrical Theory II (AC Systems)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.3.li", "Electrical Theory III (AC Theory)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.5.li", "Computer Skills II")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.7.li", "Relays I")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.9.li", "Meters IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.11.li", "Audio Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.13.li", "Video Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.15.li", "Nurse Call Systems")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.17.li", "Code IV (Installer/Tech Code 2)")}</li>
<li>{c.t("s.7.1.1.1.7.1.7.1.3.0.19.li", "Material ID III")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.9.1.1.h3", "APSC 105")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.1.li", "Electronics I")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.3.li", "Fire II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.5.li", "Anti-Harassment II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.7.li", "Code V")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.9.li", "Blueprints III")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.11.li", "Computer Skills III")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.13.li", "Material ID IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.15.li", "Relays II")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.17.li", "Meters V")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.19.li", "Network III (IP Addresses/Classes (IPv4 & IPv6))")}</li>
<li>{c.t("s.7.1.1.1.7.1.9.1.3.0.21.li", "Remote Communication Systems I")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.11.1.1.h3", "APSC 106")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.1.li", "State Cert Prep I (Code VI)")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.3.li", "Remote Communication Systems II")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.5.li", "Computer Skills IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.7.li", "Material ID V")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.9.li", "Relays III")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.11.li", "Meters VI")}</li>
<li>{c.t("s.7.1.1.1.7.1.11.1.3.0.13.li", "Network IV (WECAT [Cyber Security, SBEMS], (IPv4 & IPv6 continued))")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.13.1.1.h3", "APSC 107")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.1.li", "Access Control I")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.3.li", "Security I (Intelligent Network Video)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.5.li", "Code VII")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.7.li", "Computer Skills V")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.9.li", "Material ID VI")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.11.li", "Relays IV")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.13.li", "Meters VII")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.15.li", "Network I Revisited (Copper)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.17.li", "Network II Revisited (Fiber)")}</li>
<li>{c.t("s.7.1.1.1.7.1.13.1.3.0.19.li", "Network III Revisited (IP Addressing)")}</li>
</ul></div>        
</div></div>
                <div>
<div className="el-item uk-panel uk-margin-remove-first-child">
                <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">{c.t("s.7.1.1.1.7.1.15.1.1.h3", "APSC 108")}</h3>        
                <div className="el-content uk-panel uk-margin-small-top"><ul>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.1.li", "Leadership II")}</li>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.3.li", "Safety II (OSHA, 30EM-385) Code VIII")}</li>
<li>{c.t("s.7.1.1.1.7.1.15.1.3.0.5.li", "Computer Skills VI")}</li>
</ul></div>        
</div></div>
                </div>
</div></TitledSection>
<ReadyCta c={c} section="s.9" panelId={2} />
    </>
  ),
  "intelligent-transportation-systems": (c) => (
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
  ),
};
