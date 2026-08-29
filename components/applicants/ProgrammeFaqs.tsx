import type { ReactNode } from "react";

type Accessor = {
  t: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

export type ProgrammeFaq = {
  hero: { src: string; alt: string };
  /** the standfirst, which carries its own markup */
  leadHtml: string;
  /** CMS key for the accordion band's heading */
  headingKey: string;
  /** one programme heads its band with an h2 */
  headingTag?: "h1" | "h2";
  /** the questions themselves */
  items: (c: Accessor) => ReactNode;
};

/**
 * Each apprenticeship's FAQ.
 *
 * The three FAQ pages were three route files opening with the same seventeen
 * lines. One route serves them now (app/applicants/[program]/faq); what
 * actually differs between them lives here.
 */
export const PROGRAMME_FAQS: Record<string, ProgrammeFaq> = {
  "inside-wireman": {
    hero: { src: "/images/assets/heros/et-Program-Overview.jpg", alt: "Electrician Trainee on a jobsite carring a cable." },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h2",
    headingTag: "h2",
    items: (c) => (
      <>
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is the Inside Wireman Apprenticeship Program? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "The Inside Wireman Apprenticeship is a five-year training program designed to prepare apprentices for careers as Journeyman Inside Wiremen. The program combines paid on-the-job training with classroom instruction so apprentices can develop the technical knowledge and practical skills required in the electrical trade.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "How much on-the-job training is required? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.3.3.1.div", "Inside Wireman apprentices complete approximately 8,000 hours of on-the-job training working for licensed electrical contractors. Apprentices gain experience installing, maintaining, and troubleshooting electrical systems in commercial and industrial environments.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "How much classroom training is required? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.5.3.1.div", "Apprentices complete a minimum of 1,000 hours of related supplemental instruction during the program. Training includes classroom lectures, hands-on lab work, and online learning designed to reinforce skills learned in the field.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "What type of work does an Inside Wireman Apprentice perform? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.7.3.1.div", "Inside Wiremen install and maintain electrical systems found in commercial and industrial facilities. This work includes installing electrical conduits, wiring systems, cables, motor controls, and panelboards used to power buildings and equipment.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "Do Inside Wireman apprentices get paid? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.9.3.1.div", "Yes. Apprentices earn wages while receiving training. Pay increases at regular intervals as apprentices progress through the program and gain additional experience and skills.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "How often do apprentices receive raises? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Apprentices receive scheduled wage increases approximately every six months as they advance through each training period of the apprenticeship.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "Do apprentices receive benefits? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.13.3.1.div", "Yes. Apprentices working for signatory electrical contractors receive benefits that may include health coverage, retirement contributions, and other negotiated benefits through the collective bargaining agreement.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "What is the Pay scale for an Inside Wireman Apprentice? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><div className="uk-overflow-container">
<table className="uk-table uk-table-hover uk-table-striped uk-table-middle uk-table-responsive" style={{ border: "2px solid #031F4A" }}>
<thead style={{ backgroundColor: "#031f4a", color: "#fff" }}>
<tr>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.1.th", "Period (6 Months)")}</th>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.3.th", "% of Journeyman Wage")}</th>
<th>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.1.1.5.th", "Hourly Rate")}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.1.td", "1ST")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.3.td", "40%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.1.5.td", "$23.58")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.1.td", "2ND")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.3.td", "44%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.4.5.td", "$25.94")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.1.td", "3RD")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.3.td", "48%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.7.5.td", "$28.30")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.1.td", "4TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.3.td", "52%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.10.5.td", "$30.65")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.1.td", "5TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.3.td", "56%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.13.5.td", "$33.01")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.1.td", "6TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.3.td", "60%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.16.5.td", "$35.37")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.1.td", "7TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.3.td", "66%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.19.5.td", "$38.91")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.1.td", "8TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.3.td", "70%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.22.5.td", "$41.27")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.1.td", "9TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.3.td", "78%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.25.5.td", "$45.98")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.1.td", "10TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.3.td", "82%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.28.5.td", "$48.34")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.1.td", "Journeyman Inside Wireman")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.3.td", "100%")}</td>
<td>{c.t("s.7.1.1.1.1.3.15.3.1.0.1.3.31.5.td", "$58.95")}</td>
</tr>
</tbody>
</table>
</div></div>                
    </div>
</div>    
      </>
    ),
  },
  "sound-communication": {
    hero: { src: "/images/assets/heros/hero-g08.jpg", alt: "An Electrician and Trainee working on the jobsite." },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h1",
    items: (c) => (
      <>
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is the Sound & Communications Apprenticeship Program? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "The Sound & Communications Apprenticeship is a four-year training program that prepares apprentices to become Telecommunications Installers and Technicians. The program combines paid on-the-job training with classroom instruction, allowing apprentices to develop the technical knowledge and hands-on skills needed to work in the low-voltage industry.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "How much on-the-job training is required? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.3.3.1.div", "Sound & Communications apprentices complete approximately 6,000 hours of on-the-job training working for licensed contractors. Apprentices gain experience installing, maintaining, and troubleshooting voice, data, and video systems.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "How much classroom training is required? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.5.3.1.div", "Apprentices complete a minimum of 480 hours of related supplemental instruction during the program. Training includes classroom lectures, hands-on lab instruction, and online learning designed to reinforce skills learned in the field.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "What type of work does a Sound & Communications Apprentice perform? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.7.3.1.0.p", "Telecommunications Installers and Technicians work in both new construction and existing buildings. Their work includes installing cabling and equipment for:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.1.li", "Telephone systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.3.li", "Computer networks")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.5.li", "Video distribution systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.7.li", "Security and access control systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.9.li", "Audio/visual systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.11.li", "Fire and life-safety systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.7.3.1.2.13.li", "Other low-voltage communication systems")}</li>
</ul></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "Do Sound & Communications apprentices get paid? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.9.3.1.0.p", "Yes. Apprentices earn wages while receiving training. Pay increases at scheduled intervals as apprentices progress through the program and gain experience.")}</p></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "How often do apprentices receive raises? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Apprentices receive scheduled wage increases approximately every six months as they advance through the program.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "What is the pay scale for a Sound Technician Apprentice? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><div className="uk-overflow-container">
<table className="uk-table uk-table-hover uk-table-striped uk-table-middle uk-table-responsive" style={{ border: "2px solid #031F4A" }}>
<thead style={{ backgroundColor: "#031f4a", color: "#fff" }}>
<tr>
<th>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.1.1.1.th", "Period (6 Months)")}</th>
<th>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.1.1.3.th", "% of Journeyman Wage")}</th>
<th>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.1.1.5.th", "Hourly Rate")}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.1.1.td", "1ST")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.1.3.td", "55%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.1.5.td", "$24.88")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.4.1.td", "2ND")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.4.3.td", "55%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.4.5.td", "$24.88")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.7.1.td", "3RD")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.7.3.td", "65%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.7.5.td", "$29.40")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.10.1.td", "4TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.10.3.td", "65%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.10.5.td", "$29.40")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.13.1.td", "5TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.13.3.td", "85%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.13.5.td", "$38.45")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.16.1.td", "6TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.16.3.td", "85%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.16.5.td", "$38.45")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.19.1.td", "7TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.19.3.td", "90%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.19.5.td", "$40.71")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.22.1.td", "8TH")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.22.3.td", "90%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.22.5.td", "$40.71")}</td>
</tr>
<tr>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.25.1.td", "Journeyman Sound Technician")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.25.3.td", "100%")}</td>
<td>{c.t("s.7.1.1.1.1.3.13.3.1.0.1.3.25.5.td", "$45.23")}</td>
</tr>
</tbody>
</table>
</div></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "Where is the program offered? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.15.3.1.0.p", "Training is offered at the following locations:")}</p>
<address data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.3.1.2.address", "San Diego County<br>4675 Viewridge Ave<br>San Diego, CA 92123") }} /><address data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.3.1.3.address", "Imperial County<br>2420 Imperial Business Park Drive<br>Imperial, CA 92251") }} />
<p>{c.t("s.7.1.1.1.1.3.15.3.1.5.p", "Jobsite opportunities are located throughout San Diego and Imperial Counties within the IBEW Local 569 jurisdiction.")}</p></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.17.1.a", "Is the apprenticeship full-time or part-time? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.17.3.1.div", "The Sound & Communications Apprenticeship is a full-time program that combines full-time employment with scheduled classroom instruction.")}</div>                
    </div>
</div>    
      </>
    ),
  },
  "intelligent-transportation-systems": {
    hero: { src: "/images/assets/heros/hero-g06.jpg", alt: "Instructor explaining cable connections to a femail Electrician Trainee in class" },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h1",
    items: (c) => (
      <>
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.1.1.a", "What is the Intelligent Transportation Systems (ITS) Apprenticeship? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.1.3.1.div", "The ITS Apprenticeship is a training program that prepares apprentices for careers as Transportation Systems Electricians. The program combines paid on-the-job training with classroom instruction.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.3.1.a", "What type of work does an ITS Electrician perform? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.3.3.1.0.p", "ITS Electricians install, maintain, and troubleshoot:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.1.li", "Traffic signal systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.3.li", "Street lighting systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.5.li", "Traffic detection loops")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.7.li", "Freeway fiber optic and CCTV systems")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.9.li", "Municipal electrical infrastructure")}</li>
<li>{c.t("s.7.1.1.1.1.3.3.3.1.2.11.li", "Low-voltage transportation control systems")}</li>
</ul></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.5.1.a", "How long is the program? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.5.3.1.0.p", "The program is four years in length.")}</p></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.7.1.a", "How many training hours are required? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.7.3.1.div", "Apprentices complete approximately: 6,400 hours of on-the-job training and 802 hours of classroom instruction.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.9.1.a", "What does on-the-job training include? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.9.3.1.div", "Apprentices work under the supervision of Journeyman Transportation Systems Electricians. Training includes underground installations, conduit systems, traffic signals, freeway fiber optics, CCTV systems, photovoltaic applications, and street lighting systems.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.11.1.a", "What is the classroom schedule? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.11.3.1.div", "Apprentices attend classes two evenings per week including one evening lecture and one evening hands-on lab training. Competency assessments are required to progress through the program.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.13.1.a", "Who assigns apprentices to contractors? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.13.3.1.div", "The Electrical Training Institute coordinates contractor assignments to ensure apprentices receive diverse training experiences.")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.15.1.a", "Is the program accredited? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.15.3.1.div", "Yes. The program is approved by the California Division of Apprenticeship Standards and the U.S. Department of Labor Office of Apprenticeship")}</div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.17.1.a", "What certifications are awarded upon completion? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel"><p>{c.t("s.7.1.1.1.1.3.17.3.1.0.p", "Graduates receive:")}</p>
<ul>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.1.li", "A Certificate of Achievement \u2013 Transportation Systems Electrician (Palomar Community College)")}</li>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.3.li", "A Completion Certificate from the California Division of Apprenticeship Standards")}</li>
<li>{c.t("s.7.1.1.1.1.3.17.3.1.2.5.li", "A Completion Certificate from the U.S. Department of Labor")}</li>
</ul></div>                
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.3.19.1.a", "Is this a paid apprenticeship? <span uk-accordion-icon></span>") }} />
    <div className="uk-accordion-content">
                <div className="el-content uk-panel">{c.t("s.7.1.1.1.1.3.19.3.1.div", "Yes. Apprentices earn wages while completing required training hours.")}</div>                
    </div>
</div>    
      </>
    ),
  },
};
