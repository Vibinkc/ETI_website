import { definePage, metadataFor } from "@/lib/page";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import HeroHeading from "@/components/HeroHeading";

const ROUTE = "/applicants";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Applicants - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-content{font-weight:bold;font-size:105%;}#page\\#1{text-transform: uppercase;}#page\\#2{text-transform: uppercase;}" }} />
<PageHero c={c} image={{ imgKey: "s.5.1.3.1.1.1.0.img", src: "/images/assets/heros/hero-g20.jpg", alt: "Three Electricians posing for the photo. They are on a jobsite. The middle person is holding up the IBEW logo and the first person is giving a thumb's up.", width: "1200", height: "1200", aspectAuto: true }} leftWidth="uk-width-1-2@m" rightWidth="uk-width-1-2@m uk-visible@m">        
            
            
            
                
                    

<Breadcrumb c={c} keyBase="s.5.1.1.1.1.1" links={[{ href: "/", html: "<span property=\"name\">Home</span>" }]} current="Applicants" />

<HeroHeading c={c} titleKey="s.5.1.1.1.3.h1" title={"You\u2019re taking the first step toward a career built on skill, purpose and opportunity."} leadKey="s.5.1.1.1.4.div" lead="ETI apprenticeship programs provide a direct path to a skilled, high-demand career in the electrical industry. Apprentices receive paid on-the-job training, classroom instruction and industry experience while working for licensed electrical contractors." className="uk-h2 uk-margin-large-bottom" />
<div id="page#0" className="uk-margin-large uk-text-left" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.1.1.6.div", "<a class=\"el-content uk-width-1-1 uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/sign-up\">\n    \n        Apply Now    \n    \n</a>") }} />

                
            
        
</PageHero>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand uk-grid-divider" uk-grid="">    
        
<div className="uk-width-1-2@m">
    
        
            
            
            
                
                    
<h2 className="uk-text-small uk-heading-line uk-margin-medium-bottom uk-text-center" id="page#1" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.h2", "<span>    \n        \n                    Additional Information        \n        \n        </span>") }} /><div className="uk-panel uk-margin uk-width-xlarge"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.2.0.p", "<strong>Find out more about the programs we offer</strong>") }} />
<p>{c.t("s.7.1.1.1.1.2.2.p", "Each offers specialized training and a structured path toward professional certification and long-term career growth.")}</p>
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.2.4.p", "<strong>Our Programs:</strong>") }} /></div>
<div>
    
    
        
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary uk-nav-divider">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.1.1.li", "<a class=\"el-link\" href=\"/applicants/inside-wireman\">\n    \n        \n                    Inside Wireman        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.1.3.li", "<a class=\"el-link\" href=\"/applicants/sound-communication\">\n    \n        \n                    Sound & Communication        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.1.5.li", "<a class=\"el-link\" href=\"/applicants/intelligent-transportation-systems\">\n    \n        \n                    Intelligent Transportation Systems        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.1.7.li", "<a class=\"el-link\" href=\"/electrician-trainees\">\n    \n        \n                    Electrician Trainees        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.1.9.li", "<a class=\"el-link\" href=\"/applicants/veep\">\n    \n        \n                    VEEP        \n    \n</a>") }} />
                            </ul>
        
    
    
</div>
                
            
        
    
</div>
<div className="uk-width-1-2@m">
    
        
            
            
            
                
                    
<h2 className="uk-text-small uk-heading-line uk-margin-medium-bottom uk-text-center" id="page#2" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.1.h2", "<span>    \n        \n                    Downloads        \n        \n        </span>") }} />
<div className="uk-margin-medium-top uk-width-xlarge uk-margin-auto uk-text-center">
        <div className="uk-flex-middle uk-grid-medium uk-child-width-auto uk-flex-center" uk-grid="">    
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.1.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Application Deadlines\" href=\"/images/pdf/ApplicationDeadlines.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Application Deadlines    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.3.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Application Flow Chart\" href=\"/images/pdf/ApplicationFlowChart.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Application Flow Chart    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.5.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" title=\"Tap here to download the Applicant Re-Interview Request Form\" href=\"/images/pdf/ApplicantReinterviewForm.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Re-Interview Request Form    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.7.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" href=\"/images/pdf/ApprenticeshipStandards.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Apprenticeship Standards    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.9.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" href=\"/images/pdf/Rules-regs.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Rules, Regs. and Guidelines    \n    \n</a>") }} />
        
    
        </div>    
</div>

                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
