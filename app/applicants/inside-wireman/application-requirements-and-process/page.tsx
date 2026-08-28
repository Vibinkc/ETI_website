import { definePage, metadataFor } from "@/lib/page";
import ReadyCta from "@/components/ReadyCta";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";
import TitledSection from "@/components/TitledSection";
import EntryRequirements from "@/components/EntryRequirements";

const ROUTE = "/applicants/inside-wireman/application-requirements-and-process";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Application Requirements and Process - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{font-weight:bold;font-size:105%;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/et-how-to.jpg", alt: "Electrician Trainee working with a drill on a ladder.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: "/applicants/inside-wireman", html: "<span property=\"name\">Inside Wireman</span>" }]} current="Application Requirements and Process" />
<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title="Application Requirements and Process" leadKey="s.5.1.1.1.4.div" lead="Before applying, make sure you meet the requirements below and have all required documents ready." />
</PageHero>
<TitledSection c={c} headingKey="s.7.1.1.1.1.1.0.1.h2" heading="Application Requirements" section="uk-section-default uk-section uk-section-medium-top uk-section-xsmall-bottom" width="uk-grid-item-match uk-width-1-1" card="uk-card-overlay uk-card uk-card-body"><div className="uk-panel uk-margin"><p>{c.t("s.7.1.1.1.1.2.0.p", "Applicants must meet the following minimum requirements to apply for the Inside Wireman Apprenticeship:")}</p>
<EntryRequirements c={c} base="s.7.1.1.1.1.2.2" />
<p>{c.t("s.7.1.1.1.1.2.4.p", "Documents must be submitted in PDF format. Foreign transcripts must be translated into English by a certified translator.")}</p></div>
<div className="uk-margin-medium-top uk-text-center@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Application Flow Chart\" href=\"/images/pdf/ApplicationFlowChart.pdf\">\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Application Flow Chart    \n    \n</a>") }} /></TitledSection>
<TitledSection c={c} headingKey="s.9.1.1.1.1.0.1.h2" heading="How to Apply"><div className="uk-panel uk-margin">{c.t("s.9.1.1.1.2.div", "Applying to the Inside Wireman Apprenticeship Program is a multi-step process designed to identify qualified candidates for training in the electrical trade. Applicants must complete each step in order to be considered for selection.")}</div>
<h3 className="uk-h4">
                    {c.t("s.9.1.1.1.4.h3", "Step 1: Submit an Application")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.5.0.p", "Applications are available online and may be submitted at any time.")}</p>
<ul>
<li>{c.t("s.9.1.1.1.5.2.1.li", "Applicants must upload required documents, including proof of high school completion and evidence of meeting the algebra requirement. A valid driver\u2019s license is required.")}</li>
<li>{c.t("s.9.1.1.1.5.2.3.li", "Applicants must demonstrate successful completion of:")}</li>
<li>{c.t("s.9.1.1.1.5.2.5.li", "One year of high school algebra (two semesters), or")}</li>
<li>{c.t("s.9.1.1.1.5.2.7.li", "One semester of college algebra, or")}</li>
<li>{c.t("s.9.1.1.1.5.2.9.li", "The Electrical Training Alliance Tech Math course")}</li>
<li>{c.t("s.9.1.1.1.5.2.11.li", "Official transcripts must be uploaded in PDF format. Foreign transcripts must be translated into English by a certified translator.")}</li>
</ul></div>
<h3 className="uk-h4">
                    {c.t("s.9.1.1.1.7.h3", "Step 2: Aptitude Test")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.8.0.p", "Qualified applicants will be scheduled to take an aptitude test at ETI. The test measures algebra skills and reading comprehension and typically requires about three hours to complete. Test results are provided by email. Applicants who pass the aptitude test move forward to the interview stage. Free test preparation resources include:")}</p>
<ul>
<li>{c.t("s.9.1.1.1.8.2.1.li", "Electrical Training Alliance practice materials")}</li>
<li>{c.t("s.9.1.1.1.8.2.3.li", "Khan Academy algebra lessons")}</li>
</ul></div>
<h3 className="uk-h4">
                    {c.t("s.9.1.1.1.10.h3", "Step 3: Oral Interview")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.11.0.p", "Applicants who pass the aptitude test will be scheduled for an oral interview with the Apprenticeship Committee. Interview scores determine placement in the Pool of Eligible Applicants, where applicants remain eligible for selection for up to two years. Selection timing depends on the needs of the electrical construction industry. Applicants may re-interview after one year if they gain electrical work experience or complete trade-related coursework.")}</p></div>
<h3 className="uk-h4">
                    {c.t("s.9.1.1.1.13.h3", "Step 4: Selection and Orientation")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.14.0.p", "Selected applicants will be notified by email and phone. If selected, applicants must attend a scheduled orientation session.")}</p>
<p>{c.t("s.9.1.1.1.14.2.p", "After orientation paperwork is completed, applicants will be scheduled for a drug screening.")}</p>
<p>{c.t("s.9.1.1.1.14.4.p", "There are no tuition or registration fees for the program. Apprentices are responsible for purchasing required books and hand tools.")}</p>
<p>{c.t("s.9.1.1.1.14.6.p", "New apprentice classes are scheduled based on industry demand.")}</p></div></TitledSection>
<ReadyCta c={c} section="s.11" panelId={0} />
  </>
));
