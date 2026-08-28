import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";

const ROUTE = "/electrician-trainees/maintaining-your-et-card";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Maintaining Your ET Card - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{line-height: 1.4em;padding: 10px;}#page\\#1 .el-content{line-height: 1.4em;padding: 10px;}#page\\#2 .uk-tile{padding:50px;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-wm04.jpg", alt: "Electrician Trainee on a roof about to use a ladder to get down.", width: "1200", height: "1200", aspectAuto: true }}>        
<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/electrician-trainees", html: "<span property=\"name\">Electrician Trainees</span>" }]} current="Maintaining Your ET Card" />
<h1 className="uk-heading-medium uk-margin-large-bottom">
                    {c.t("s.5.1.1.1.3.h1", "Maintaining Your Electrician Trainee Card (California)")}        
</h1>
<h2 className="uk-h3">
                    {c.t("s.5.1.1.1.5.h2", "Why Your Electrician Trainee Card Is Important")}        
</h2><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.6.div", "In California, anyone performing electrical work who is not, yet a certified journeyperson or an apprentice must hold a current Electrician Trainee (ET) card issued by the California Department of Industrial Relations (DIR).")}</div>
</PageHero>
<div className="uk-section-default uk-section uk-section-medium-top uk-section-xsmall-bottom">
                                <div className="uk-container uk-container-small">                
<div className="uk-grid-margin uk-container uk-container-xsmall uk-margin-large-bottom">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-card-overlay uk-card uk-card-body">    
                    <div className="uk-panel uk-margin"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.1.0.p", "<strong>At IBEW Local 569 and the Electrical Training Institute (ETI), maintaining your trainee card is required to:</strong>") }} />
<ul>
<li>{c.t("s.7.1.1.1.1.1.1.2.1.li", "Work legally in the electrical trade")} </li>
<li>{c.t("s.7.1.1.1.1.1.1.2.3.li", "Have your on-the-job hours count toward apprenticeship or certification")}</li>
<li>{c.t("s.7.1.1.1.1.1.1.2.5.li", "Remain eligible for union employment")}</li>
<li>{c.t("s.7.1.1.1.1.1.1.2.7.li", "Stay in good standing with state regulations")}</li>
</ul>
<p>{c.t("s.7.1.1.1.1.1.1.4.p", "Working with an expired trainee card is illegal and can result in removal from a job site, fines, and delays.")}</p></div>
        </div>    
</div>
        </div>    
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<h2 className="uk-h3">
                    {c.t("s.7.1.3.1.1.h2", "What Is an Electrician Trainee Card?")}        
</h2><div className="uk-panel uk-margin"><p>{c.t("s.7.1.3.1.2.0.p", "An Electrician Trainee card allows individuals to work in the electrical trade while enrolled in a state-approved training program, such as the IBEW Local 569 / ETI Electrician Trainee or Apprenticeship Program.")}</p>
<p>{c.t("s.7.1.3.1.2.2.p", "If you are working in the field and are not yet a certified electrician, this card is required by the State of California.")}</p></div>
<div id="page#0" className="uk-margin-top uk-margin-medium-bottom uk-text-left@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.4.div", "<a class=\"el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the application from PDF. Opens in a new browser tab.\" href=\"https://www.dir.ca.gov/dlse/ecu/ElectricalTraineeRenewRegistration.pdf\" target=\"_blank\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Apply for or renew your <br class=\"uk-hidden@s\">Electrician Trainee card    \n    \n</a>") }} />
<h2 className="uk-h3">
                    {c.t("s.7.1.3.1.6.h2", "How to Maintain Your Electrician Trainee Card")}        
</h2><div className="uk-panel uk-text-lead uk-margin">{c.t("s.7.1.3.1.7.div", "To keep your Electrician Trainee card active, all three of the following must be completed every year:")}</div>
<h3 className="uk-h4">
                    {c.t("s.7.1.3.1.9.h3", "1. Remain Enrolled at ETI")}
</h3><div className="uk-panel uk-margin"><p>{c.t("s.7.1.3.1.10.0.p", "You must be actively enrolled in a DIR-approved electrical training program, such as the Electrical Training Institute (ETI) affiliated with IBEW Local 569.")}</p>
<p>{c.t("s.7.1.3.1.10.2.p", "If you are not enrolled in an approved program, your trainee card is not valid, even if you are working.")}</p></div>
<h3 className="uk-h4">
                    {c.t("s.7.1.3.1.12.h3", "2. Complete Required Classroom Instruction")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.7.1.3.1.13.0.p", "The State of California requires Electrician Trainees to complete a minimum number of classroom hours (150) each year to remain eligible for renewal.")}</p>
<p>{c.t("s.7.1.3.1.13.2.p", "At ETI:")}</p>
<ul>
<li>{c.t("s.7.1.3.1.13.4.1.li", "Classroom hours are tracked by the training center")}</li>
<li>{c.t("s.7.1.3.1.13.4.3.li", "Hours must be completed before your trainee card expires")}</li>
<li>{c.t("s.7.1.3.1.13.4.5.li", "Incomplete hours may prevent renewal")}</li>
</ul>
<p>{c.t("s.7.1.3.1.13.6.p", "Important: Working hours alone do not keep your trainee card active \u2014 classroom instruction is mandatory. It is YOUR responsibility to maintain your ET card.")}</p></div>
<h3 className="uk-h4">
                    {c.t("s.7.1.3.1.15.h3", "3. Renew Your Trainee Card Annually with the DIR")}        
</h3><div className="uk-panel uk-margin"><p>{c.t("s.7.1.3.1.16.0.p", "Electrician Trainee cards must be renewed every year through the California DIR.")}</p>
<p>{c.t("s.7.1.3.1.16.2.p", "You are responsible for:")}</p>
<ul>
<li>{c.t("s.7.1.3.1.16.4.1.li", "Monitoring your expiration date")}</li>
<li>{c.t("s.7.1.3.1.16.4.3.li", "Submitting your renewal on time")}</li>
<li>{c.t("s.7.1.3.1.16.4.5.li", "Paying the required state renewal fee")}</li>
</ul>
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.16.6.p", "<mark>Your employer does not renew this for you.<br>It is the trainee\u2019s responsibility to maintain a current card.</mark>") }} /></div>
<div id="page#1" className="uk-margin-top uk-margin-medium-bottom uk-text-left@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.18.div", "<a class=\"el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Renew Registration from PDF. Opens in a new browser tab.\" href=\"https://www.dir.ca.gov/dlse/ecu/ElectricalTraineeRenewRegistration.pdf\" target=\"_blank\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Renew your trainee card    \n    \n</a>") }} />
<h3 className="uk-h4">
                    {c.t("s.7.1.3.1.20.h3", "Common Issues We See")}        
</h3><div className="uk-panel uk-margin"><ul>
<li>{c.t("s.7.1.3.1.21.0.1.li", "Letting a trainee card expire")}</li>
<li>{c.t("s.7.1.3.1.21.0.3.li", "Falling short of required classroom hours")}</li>
<li>{c.t("s.7.1.3.1.21.0.5.li", "Waiting too long to renew")}</li>
<li>{c.t("s.7.1.3.1.21.0.7.li", "Assuming someone else is handling the process")}</li>
</ul>
<p>{c.t("s.7.1.3.1.21.2.p", "Any of these can delay your entry into the apprenticeship or interrupt your ability to work.")}</p></div>
</div>
</div>
                                </div>                
</div>
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-container uk-container-small" id="page#2">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
<div className="uk-grid-item-match uk-width-1-1">
        <div className="uk-tile-primary uk-tile">    
<h2 className="uk-heading-small">
                    {c.t("s.9.1.1.1.1.1.1.h2", "Need Help? Contact ETI")}        
</h2><div className="uk-panel uk-margin"><p>{c.t("s.9.1.1.1.1.1.2.0.p", "If you have questions about:")}</p>
<ul>
<li>{c.t("s.9.1.1.1.1.1.2.2.1.li", "Your Electrician Trainee card status")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.3.li", "Classroom hour requirements")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.5.li", "ETI enrollment")}</li>
<li>{c.t("s.9.1.1.1.1.1.2.2.7.li", "Preparing for apprenticeship")}</li>
</ul>
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.1.2.4.p", "<a href=\"/contact\" title=\"Tap here to contact us.\"><strong>Contact the Electrical Training Institute (ETI)</strong></a> - we are here to help you stay compliant, working, and on track to becoming an IBEW Local 569 journeyperson.") }} /></div>
<div className="uk-margin-medium-top" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.1.4.div", "<a class=\"el-content uk-button uk-button-default\" title=\"Tap here to contact us.\" href=\"/contact\">\n    \n        Contact Us    \n    \n</a>") }} />
        </div>    
</div>
        </div>    
</div>
                                </div>                
</div>
  </>
));
