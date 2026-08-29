import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import TitledSection from "@/components/TitledSection";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/applicants/inside-wireman/program-overview-and-curriculum";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Program Overview and Curriculum - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
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
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-flex-center uk-grid-row-large uk-grid-match" {...{ "uk-grid": "" }}>                <div>
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
));
