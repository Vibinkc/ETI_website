import { definePage, metadataFor } from "@/lib/page";

const ROUTE = "/apprentices";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Apprentices - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>

                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{text-transform: uppercase;}#page\\#1{text-transform: uppercase;}#page\\#2 .el-item{padding:0px 9px;}#page\\#2 .el-item:not(:last-child){border-right: 1.5px solid;}#page\\#2 .el-item{text-transform:uppercase;}#page\\#3{text-transform: uppercase;}#page\\#4{margin-top:7%;}#page\\#5{margin-bottom:40px;}#page\\#5 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#5 .el-content{margin-bottom:20px;}#page\\#5 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#6{background-color:#EBECE9;}#page\\#7{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#7{background-image:none;}}" }} />
<div className="uk-section uk-padding-remove-vertical">
    
        
        
        
            
                
                    
<div className="uk-grid-margin-large uk-grid tm-grid-expand uk-grid-column-collapse uk-grid-row-large" uk-grid="">
    
        
<div className="uk-grid-item-match uk-width-3-5@m">
        <div className="uk-card-primary uk-card uk-card-body uk-flex uk-flex-middle">    
        
            
            
                        <div className="uk-panel uk-width-1-1">            
                
                    
<h1 className="uk-heading-medium uk-margin-large-bottom">
    
        
                    {c.t("s.5.1.1.1.1.1.h1", "Apprentices")}        
        
    
</h1><div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t("s.5.1.1.1.1.2.div", "This section is designed for current apprentices enrolled in ETI programs.")}</div>
                
                        </div>            
        
        </div>    
</div>
<div className="uk-grid-item-match uk-width-2-5@m uk-visible@m">
        <div className="uk-card-primary uk-card uk-card-body uk-padding-remove uk-flex uk-flex-column">    
        
            
            
            
                
                    
<div className="uk-flex-1 uk-flex uk-margin uk-visible@m">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} width="1200" height="1200" src={c.m("s.5.1.3.1.1.1.0.img", "/images/assets/heros/hero-g02.jpg")} alt={c.a("s.5.1.3.1.1.1.0.img", "Instructor showing Electrician Trainees how to use a chop saw.")} /></picture>    
    
</div>
                
            
        
        </div>    
</div>
    
</div>
                
            
        
    
</div>
<div className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand uk-grid-divider" uk-grid="">    
        
<div className="uk-width-3-5@m">
    
        
            
            
            
                
                    
<h2 className="uk-text-small uk-heading-line uk-margin-medium-bottom uk-text-center" id="page#0" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.1.h2", "<span>    \n        \n                    What You Need        \n        \n        </span>") }} /><div className="uk-panel uk-margin">{c.t("s.7.1.1.1.1.2.div", "Apprentice section provides current apprentices with quick access to schedules, resources, policies, forms, and program updates. Check out the links below to stay informed, meet program requirements, and find the information you need throughout your apprenticeship.")}</div>
<h2 className="uk-text-small uk-heading-line uk-margin-medium uk-text-center" id="page#1" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.4.h2", "<span>    \n        \n                    Resources        \n        \n        </span>") }} />
<div id="page#2" className="uk-width-large uk-margin-auto uk-text-center">
        <div className="uk-flex-middle uk-grid-column-collapse uk-grid-row-small uk-child-width-auto uk-flex-center" uk-grid="">    
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.6.1.1.div", "<a class=\"el-content uk-link-text\" title=\"Tap here to visit the TradeSchool website. Opens in a new browser tab.\" href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\">\n    \n        TradeSchool    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.6.1.3.div", "<a class=\"el-content uk-link-text\" title=\"Tap here to visit the Moodle website. Opens in a new browser tab.\" href=\"https://sdett-moodle.sdett.org/moodle/\" target=\"_blank\">\n    \n        Moodle    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.6.1.5.div", "<a class=\"el-content uk-link-text\" title=\"Tap here to visit the LMS website. Opens in a new browser tab.\" href=\"https://lms.protechskillsinstitute.org/login/index.php\" target=\"_blank\">\n    \n        LMS    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.6.1.7.div", "<a class=\"el-content uk-link-text\" title=\"Tap here to visit the eBooks website. Opens in a new browser tab.\" href=\"https://ebooks.electricaltraining.org/\" target=\"_blank\">\n    \n        eBooks    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.1.6.1.9.div", "<a class=\"el-content uk-link-text\" title=\"Tap here to visit the ETI Store. Opens in a new browser tab.\" href=\"https://www.talech.com/biz/ordering/307835/ELECTRICAL-TRAINING-INSTITUTE-SAN-DIEGO-CA\" target=\"_blank\">\n    \n        ETI Store    \n    \n</a>") }} />
        
    
        </div>    
</div>

                
            
        
    
</div>
<div className="uk-width-2-5@m">
    
        
            
            
            
                
                    
<h2 className="uk-text-small uk-heading-line uk-margin-medium-bottom uk-text-center" id="page#3" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.1.h2", "<span>    \n        \n                    Downloads        \n        \n        </span>") }} />
<div className="uk-margin-medium-top uk-width-xlarge uk-margin-auto uk-text-center">
        <div className="uk-flex-middle uk-grid-medium uk-child-width-auto uk-flex-center" uk-grid="">    
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.1.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" href=\"/images/pdf/Rules-regs.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Rules, Regs. and Guidelines    \n    \n</a>") }} />
        
    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.1.1.3.3.1.3.div", "<a class=\"el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle\" href=\"/images/pdf/ApprenticeshipStandards.pdf\" download>\n        <span class=\"uk-margin-xsmall-right\" uk-icon=\"file-pdf\"></span>    \n        Apprenticeship Standards    \n    \n</a>") }} />
        
    
        </div>    
</div>

                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>
<div id="page#7" className="uk-section-default uk-section">
    
        
        
        
            
                                <div className="uk-container">                
                    
<div className="uk-grid-margin uk-container uk-container-small" id="page#6">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">    
        
<div className="uk-width-1-1">
    
        
            
            
            
                
                    <div className="uk-panel uk-text-lead uk-margin-bottom" id="page#4"><div>
<h2 className="elHead">{c.t("s.9.1.1.1.1.1.0.1.h2", "Frequently Asked Questions")}</h2>
</div></div>
<div className="uk-accordion-default uk-margin-remove-top uk-width-2xlarge uk-margin-auto" uk-accordion="collapsible: true;" id="page#5">
        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.1.1.a", "When do classes start? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.1.3.1.0.p", "January, May, and September. Check your <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a> account for class schedule.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.3.1.a", "Where can I find my class schedule? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.3.3.1.0.p", "Log onto your <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a> account to view your class schedule.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.5.1.a", "What happens if I miss a class? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.5.3.1.0.p", "The apprentice will need to schedule a make-up class in <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a>.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.7.1.a", "How do I make up missed class hours? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.7.3.1.0.p", "The apprentice is responsible for scheduling make-up classes in their <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a> account.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.9.1.a", "How do I advance to the next pay period? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel">{c.t("s.9.1.1.1.1.3.9.3.1.div", "A combination of class hours and on the job training hours.")}</div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.11.1.a", "What happens if I fall behind? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.11.3.1.0.p", "Contact the <a href=\"/contact\" title=\"Tap here to get our contact info.\"><strong>Training Center</strong></a>.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.13.1.a", "What happens if I am laid off? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.13.3.1.0.p", "Check in at the IBEW 569 Hall and contact the <a href=\"/contact\" title=\"Tap here to get our contact info.\"><strong>Training Center</strong></a>.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.15.1.a", "Who do I contact if my phone number or email changes? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.15.3.1.0.p", "You can make changes in your <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a> account.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.17.1.a", "Where can I find apprentice forms and documents? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.17.3.1.0.p", "On <a href=\"https://sdett-moodle.sdett.org/moodle/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the Moodle website. Opens in a new browser tab.\"><strong>Moodle</strong></a> or your <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a> account.") }} /></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.19.1.a", "What tools or books do I need for class? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel"><p>{c.t("s.9.1.1.1.1.3.19.3.1.0.p", "Refer to class syllabus.")}</p></div>                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.21.1.a", "How are on-the-job hours tracked? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.21.3.1.div", "It is the apprentices\u2019 responsibility to log on the job training hours in <a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to log into TradSchool. Opens in a new browser tab.\"><strong>TradeSchool</strong></a>.") }} />                
    
    </div>
</div>        
<div className="el-item">
    <a className="el-title uk-accordion-title" href="" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.23.1.a", "Who should I contact with dispatch or contractor questions? <span uk-accordion-icon></span>") }} />

    <div className="uk-accordion-content">
    
                <div className="el-content uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.9.1.1.1.1.3.23.3.1.div", "Contact Gail at the <a href=\"/contact#gail\" title=\"Tap here to contact Gail at the Training Center.\"><strong>Training Center</strong></a>.") }} />                
    
    </div>
</div>    
</div>
                
            
        
    
</div>
        </div>    
</div>
                                </div>                
            
        
    
</div>

                
            
  </>
));
