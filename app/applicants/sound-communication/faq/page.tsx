import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import FaqSection from "@/components/FaqSection";
import SectionHero from "@/components/SectionHero";

const ROUTE = "/applicants/sound-communication/faq";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "FAQ - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}#page\\#4 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={{ src: "/images/assets/heros/hero-g08.jpg", alt: "An Electrician and Trainee working on the jobsite." }} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/sound-communication", html: "<span property=\"name\">Sound &amp; Communication</span>" }]} current="FAQ" title="Frequently Asked Questions" leadHtml={"This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>."} />
<FaqSection c={c} headingKey="s.7.1.1.1.1.1.0.1.h1">        
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
</FaqSection>
<ReadyCta c={c} section="s.9" panelId={4} />
  </>
));
