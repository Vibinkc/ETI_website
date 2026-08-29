import { definePage, metadataFor } from "@/lib/page";

const ROUTE = "/contact";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Contact - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "@media (max-width: 960px){#page\\#0{margin-right:30px}}#page\\#1{text-transform: uppercase; font-weight:bolder;}#page\\#2{text-transform: uppercase; font-weight:bolder;}#page\\#3{margin-top:7%;}/*#page\\#4 .uk-h5{font-size:19px;}*/" }} />
<div className="uk-section-default uk-section uk-padding-remove-vertical">
<div className="uk-grid tm-grid-expand uk-grid-collapse" {...{ "uk-grid": "" }}>
<div className="uk-width-2-3@m">
<div id="page#0" className="uk-margin" data-map-consent="preferences.openstreetmap">
        <div className="uk-preserve-width uk-position-relative uk-position-z-index uk-dark" style={{ height: "650px" }} {...{ "uk-map": "" }}>
            <script type="application/json" dangerouslySetInnerHTML={{ __html: "{\"clustering\":false,\"controls\":true,\"dragging\":true,\"fit_bounds\":true,\"max_zoom\":18,\"min_zoom\":0,\"poi\":false,\"type\":\"roadmap\",\"zoom\":\"9\",\"zooming\":true,\"lazyload\":true,\"icon\":\"\\/images\\/assets\\/eti-only-logo.svg\",\"iconSize\":[60,51],\"iconAnchor\":[30,51],\"markers\":[{\"lat\":32.8237,\"lng\":-117.1211,\"title\":\"San Diego\",\"show_popup\":true},{\"lat\":32.8264391,\"lng\":-115.5762298,\"title\":\"Imperial County\"}],\"center\":{\"lat\":32.8237,\"lng\":-117.1211}}" }} />                                            <template dangerouslySetInnerHTML={{ __html: "\n                    \n<div class=\"el-item uk-text-default uk-font-default uk-text-center uk-margin-remove-first-child\">\n    \n    \n\n\n<div class=\"el-meta uk-h5 uk-margin-top uk-margin-remove-bottom\">San Diego</div>\n\n\n<div class=\"uk-margin-top\"><a href=\"https://maps.app.goo.gl/tfsSbYmWGnzQucxA7\" target=\"_blank\" class=\"el-link uk-button uk-button-danger\">Get Directions</a></div>\n</div>                " }} />
                                                            <template dangerouslySetInnerHTML={{ __html: "\n                    \n<div class=\"el-item uk-text-default uk-font-default uk-text-center uk-margin-remove-first-child\">\n    \n    \n\n\n<div class=\"el-meta uk-h5 uk-margin-top uk-margin-remove-bottom\">Imperial County</div>\n\n\n<div class=\"uk-margin-top\"><a href=\"https://maps.app.goo.gl/5HgKzLREMZdCMAm49\" target=\"_blank\" class=\"el-link uk-button uk-button-danger\">Get Directions</a></div>\n</div>                " }} />
        </div>
</div>
</div>
<div className="uk-grid-item-match uk-width-1-3@m">
        <div className="uk-card-primary uk-card uk-card-small uk-card-body uk-flex uk-flex-middle">    
                        <div className="uk-panel uk-width-1-1">            
<div className="uk-margin uk-text-center@m uk-text-center">
        <img className="el-image" loading="lazy" width="200" height="135" src={c.m("s.5.1.3.1.1.1.1.img", "/images/ETI_logo_lt.svg")} alt={c.a("s.5.1.3.1.1.1.1.img", "")} />    
</div>
<h2 className="uk-text-large uk-margin-xsmall-bottom uk-text-center">
                    {c.t("s.5.1.3.1.1.3.h2", "Electrical Training Institute")}        
</h2><hr className="uk-width-large uk-margin-auto" /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-grid-divider" {...{ "uk-grid": "" }}>
<div className="uk-width-1-2@s">
<h3 className="uk-text-small uk-margin-xsmall-bottom uk-width-small@s uk-margin-auto-left uk-text-left@s uk-text-center" id="page#1">
                    {c.t("s.5.1.3.1.1.5.1.1.1.h3", "San Diego")}        
</h3><div className="uk-panel uk-text-small uk-width-small@s uk-margin-auto-left uk-text-left@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.5.1.1.2.div", "<a href=\"https://maps.app.goo.gl/tfsSbYmWGnzQucxA7\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to get directions. Opens in a new browser tab.\">4675 Viewridge Ave.<br>San Diego, CA 92123</a>") }} />
</div>
<div className="uk-width-1-2@s">
<h3 className="uk-text-small uk-margin-xsmall-bottom uk-text-left@s uk-text-center" id="page#2">
                    {c.t("s.5.1.3.1.1.5.1.3.1.h3", "Imperial County")}        
</h3><div className="uk-panel uk-text-small uk-text-left@s uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.5.1.3.2.div", "<a href=\"https://maps.app.goo.gl/5HgKzLREMZdCMAm49\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to get directions. Opens in a new browser tab.\">2420 Imperial<br>Business Park Dr.<br>\nImperial, CA 92251</a>") }} />
</div>
</div></div><hr className="uk-width-large uk-margin-auto" />
<ul className="uk-list uk-margin-medium-top uk-width-medium uk-margin-auto@m uk-margin-auto">        <li className="el-item">
    <div className="uk-child-width-expand uk-grid-column-small" {...{ "uk-grid": "" }}>        <div className="uk-width-auto">
<div className="el-title uk-margin-remove uk-h5 uk-text-primary">{c.t("s.5.1.3.1.1.8.1.1.1.1.div", "Phone:")}</div>
        </div>        <div>
            <div className="el-content uk-panel uk-h5 uk-margin-remove" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.8.1.1.3.1.div", "<a class=\"uk-margin-remove-last-child\" href=\"tel:8585696633\">(858) 569-6633</a>") }} />
        </div>
    </div>
</li>
        <li className="el-item">
    <div className="uk-child-width-expand uk-grid-column-small" {...{ "uk-grid": "" }}>        <div className="uk-width-auto">
<div className="el-title uk-margin-remove uk-h5 uk-text-primary">{c.t("s.5.1.3.1.1.8.3.1.1.1.div", "E-Mail:")}</div>
        </div>        <div>
            <div className="el-content uk-panel uk-h5 uk-margin-remove"><joomla-hidden-mail className="uk-margin-remove-last-child" is-link="1" is-email="1" first="aW5mbw==" last="c2RldHQub3Jn" text="aW5mb0BzZGV0dC5vcmc=" base="">{c.t("s.5.1.3.1.1.8.3.1.3.1.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
        </div>
    </div>
</li>
        <li className="el-item">
    <div className="uk-child-width-expand uk-grid-column-small" {...{ "uk-grid": "" }}>        <div className="uk-width-auto">
<div className="el-title uk-margin-remove uk-h5 uk-text-primary">{c.t("s.5.1.3.1.1.8.5.1.1.1.div", "Outreach:")}</div>
        </div>        <div>
            <div className="el-content uk-panel uk-h5 uk-margin-remove"><joomla-hidden-mail className="uk-margin-remove-last-child" is-link="1" is-email="1" first="b3V0cmVhY2g=" last="c2RldHQub3Jn" text="b3V0cmVhY2hAc2RldHQub3Jn" base="">{c.t("s.5.1.3.1.1.8.5.1.3.1.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
        </div>
    </div>
</li>
        <li className="el-item">
    <div className="uk-child-width-expand uk-grid-column-small" {...{ "uk-grid": "" }}>        <div className="uk-width-auto">
<div className="el-title uk-margin-remove uk-h5 uk-text-primary">{c.t("s.5.1.3.1.1.8.7.1.1.1.div", "Social:")}</div>
        </div>        <div>
            <div className="el-content uk-panel uk-h5 uk-margin-remove" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.5.1.3.1.1.8.7.1.3.1.div", "<a href=\"https://www.facebook.com/ElectricalTrainingInstituteofSanDiegoandImperial/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit our Facebook page. Opens in a new browser tab.\">Facebook</a><br>\n<a href=\"https://x.com/ETI569\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit our X page. Opens in a new browser tab.\">X</a><br>\n<a href=\"https://www.instagram.com/electrical_training_institute/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit our Instagram page. Opens in a new browser tab.\">Instagram</a><br>\n<a href=\"https://www.youtube.com/channel/UCNRlTsqUWirC64upO0i8slg?view_as=subscriber\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit our YouTube page. Opens in a new browser tab.\">YouTube</a>") }} />
        </div>
    </div>
</li>
    </ul>
                        </div>            
        </div>    
</div>
</div>
</div>
<div className="uk-section-default uk-section uk-section-xsmall-top uk-section-medium-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-bottom">
<div className="uk-width-1-1">
                    <div className="uk-panel" id="page#3"><div>
<h2 className="elHead">{c.t("s.7.1.1.1.1.0.1.h2", "Staff Directory")}</h2>
</div></div>
</div>
</div>
<div className="uk-grid-margin uk-container uk-container-small" id="page#4">
        <div className="uk-grid tm-grid-expand uk-grid-column-medium uk-grid-divider" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@s uk-width-1-2@m">
<h3 className="uk-heading-small uk-heading-divider uk-margin-medium-bottom">
                    {c.t("s.7.1.3.1.1.1.h3", "Training Team")}        
</h3><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.2.1.1.1.1.div", "Kevin Johnson")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.2.1.1.1.2.div", "Training Director")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.2.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Kevin Johnson.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="S0pvaG5zb24=" last="c2RldHQub3Jn" text="S0pvaG5zb25Ac2RldHQub3Jn" base="" title="Tap here to send Kevin Johnson an email.">{c.t("s.7.1.3.1.1.2.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.4.1.1.1.1.div", "James Stark")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.4.1.1.1.2.div", "Assistant Training Director - Inside Wireman & Electrician Trainee")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.4.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call James Stark.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SlN0YXJr" last="c2RldHQub3Jn" text="SlN0YXJrQHNkZXR0Lm9yZw==" base="" title="Tap here to send James Stark an email.">{c.t("s.7.1.3.1.1.4.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.6.1.1.1.1.div", "John Campbell")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.6.1.1.1.2.div", "Assistant Training Director - Sound Technician Apprenticeship, Pre-Apprenticeship, Student Council")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.6.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call John Campbell.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SkNhbXBiZWxs" last="c2RldHQub3Jn" text="SkNhbXBiZWxsQHNkZXR0Lm9yZw==" base="" title="Tap here to send John Campbell an email.">{c.t("s.7.1.3.1.1.6.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.8.1.1.1.1.div", "Marcus McGhee")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.8.1.1.1.2.div", "Curiculum Developer")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.8.1.1.3.1.div", "<a href=\"tel:8582768394\" title=\"Tap here to call Marcus McGhee.\">(858)276-8394</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="TU1jZ2hlZQ==" last="c2RldHQub3Jn" text="TU1jZ2hlZUBzZGV0dC5vcmc=" base="" title="Tap here to send Marcus McGhee an email.">{c.t("s.7.1.3.1.1.8.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.10.1.1.1.1.div", "Ken Collier")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.10.1.1.1.2.div", "Lead Instructor")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.10.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Ken Collier.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="S0NvbGxpZXI=" last="c2RldHQub3Jn" text="S0NvbGxpZXJAc2RldHQub3Jn" base="" title="Tap here to send Ken Collier an email.">{c.t("s.7.1.3.1.1.10.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.12.1.1.1.1.div", "Garett Camp")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.12.1.1.1.2.div", "Project Coordinator / Instructor")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.12.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Garett Camp.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="R0NhbXA=" last="c2RldHQub3Jn" text="R0NhbXBAc2RldHQub3Jn" base="" title="Tap here to send Garett Camp an email.">{c.t("s.7.1.3.1.1.12.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.14.1.1.1.1.div", "Jose Durazo")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.14.1.1.1.2.div", "Day School Instructor")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.14.1.1.3.1.div", "<a href=\"tel:8582892877\" title=\"Tap here to call Jose Durazo.\">(858)289-2877</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SkR1cmF6bw==" last="c2RldHQub3Jn" text="SkR1cmF6b0BzZGV0dC5vcmc=" base="" title="Tap here to send Jose Durazo an email.">{c.t("s.7.1.3.1.1.14.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.16.1.1.1.1.div", "Josh Walters")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.16.1.1.1.2.div", "Day School Instructor")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.16.1.1.3.1.div", "<a href=\"tel:8582894909\" title=\"Tap here to call Josh Walters.\">(858)289-4909</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SldhbHRlcnM=" last="c2RldHQub3Jn" text="SldhbHRlcnNAc2RldHQub3Jn" base="" title="Tap here to send Josh Walters an email.">{c.t("s.7.1.3.1.1.16.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-container">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.1.18.1.1.1.1.div", "Richard Gonzales")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.1.18.1.1.1.2.div", "Apprenticeship Coordinator - Imperial Valley")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.1.18.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Richard Gonzales.\">(858)569-6633</a> - #2") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="UkdvbnphbGVz" last="c2RldHQub3Jn" text="UkdvbnphbGVzQHNkZXR0Lm9yZw==" base="" title="Tap here to send Richard Gonzales an email.">{c.t("s.7.1.3.1.1.18.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div>
</div>
<div className="uk-width-1-2@s uk-width-1-2@m uk-flex-first">
<h3 className="uk-heading-small uk-heading-divider uk-margin-medium-bottom">
                    {c.t("s.7.1.3.1.3.1.h3", "Operations Team")}        
</h3><div className="uk-panel uk-margin">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.2.1.1.1.1.div", "Joyce Poblete")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.2.1.1.1.2.div", "Chief Operations Officer")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.2.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Joyce Poblete.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SlBvYmxldGU=" last="c2RldHQub3Jn" text="SlBvYmxldGVAc2RldHQub3Jn" base="" title="Tap here to send Joyce Poblete an email.">{c.t("s.7.1.3.1.3.2.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><hr /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.4.1.1.1.1.div", "Alejandra Velasquez")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.4.1.1.1.2.div", "Administrative Assistant")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.4.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Alejandra Velasuez.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="QVZlbGFzcXVleg==" last="c2RldHQub3Jn" text="QVZlbGFzcXVlekBzZGV0dC5vcmc=" base="" title="Tap here to send Alejandra Velasuez an email.">{c.t("s.7.1.3.1.3.4.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom"><p>{c.t("s.7.1.3.1.3.5.0.p", "Front desk operations, Electrician Trainee classes, Work hours reports, Class reminders, CET Courses, JW State Renewals, Bookstore")}</p></div><hr id="gail" /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.7.1.1.1.1.div", "Gail Broughman")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.7.1.1.1.2.div", "Administrative Assistant")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.7.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Gail Broughman.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="R0Jyb3VnaG1hbg==" last="c2RldHQub3Jn" text="R0Jyb3VnaG1hbkBzZGV0dC5vcmc=" base="" title="Tap here to send Gail Broughman an email.">{c.t("s.7.1.3.1.3.7.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom">{c.t("s.7.1.3.1.3.8.div", "Coordinate and dispatch apprentice manpower, Process and Indenture new Apprentices")}</div><hr /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.10.1.1.1.1.div", "Judy Milligan")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.10.1.1.1.2.div", "Administrative Assistant")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.10.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Judy Milligan.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="Sk1pbGxpZ2Fu" last="c2RldHQub3Jn" text="Sk1pbGxpZ2FuQHNkZXR0Lm9yZw==" base="" title="Tap here to send Judy Milligan an email.">{c.t("s.7.1.3.1.3.10.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom">{c.t("s.7.1.3.1.3.11.div", "Front desk operations, Applications, Coordinate aptitude testing")}</div><hr /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.13.1.1.1.1.div", "Irene Castro")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.13.1.1.1.2.div", "Administrative Assistant")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.13.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Irene Castro.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SUNhc3Rybw==" last="c2RldHQub3Jn" text="SUNhc3Ryb0BzZGV0dC5vcmc=" base="" title="Tap here to send Irene Castro an email.">{c.t("s.7.1.3.1.3.13.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom">{c.t("s.7.1.3.1.3.14.div", "Apprentice re-rates, Apprentice Make-ups")}</div><hr /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.16.1.1.1.1.div", "Jenny Marin")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.16.1.1.1.2.div", "Administrative Assistant - Imperial Valley")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.16.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Jenny Marin.\">(858)569-6633</a> - #2") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="Sk1hcmlu" last="c2RldHQub3Jn" text="Sk1hcmluQHNkZXR0Lm9yZw==" base="" title="Tap here to send Jenny Marin an email.">{c.t("s.7.1.3.1.3.16.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom">{c.t("s.7.1.3.1.3.17.div", "Front desk operations, Applications, Apprentice intake, Class reminders, Evaluations, Bookstore, Notary services")}</div><hr /><div className="uk-panel uk-margin-top uk-margin-remove-bottom">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.19.1.1.1.1.div", "Jocelyn Zepeda")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.19.1.1.1.2.div", "Administrative Assistant - Imperial Valley")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.19.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Jocelyn Zepeda.\">(858)569-6633</a> - #2") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="SlplcGVkYQ==" last="c2RldHQub3Jn" text="SlplcGVkYUBzZGV0dC5vcmc=" base="" title="Tap here to send Jocelyn Zepeda an email.">{c.t("s.7.1.3.1.3.19.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div><div className="uk-panel uk-text-small uk-margin-small-top uk-margin-bottom">{c.t("s.7.1.3.1.3.20.div", "Applications, Coordinate aptitude testing, Veteran's Benefits")}</div><hr /><div className="uk-panel uk-margin-top">
<div className="uk-grid-margin-small uk-container">
        <div className="uk-grid tm-grid-expand uk-grid-row-small" {...{ "uk-grid": "" }}>    
<div className="uk-width-1-2@m">
<div className="uk-h5 uk-margin-xsmall-bottom">
                    {c.t("s.7.1.3.1.3.22.1.1.1.1.div", "Sin Khounborin")}        
</div><div className="uk-panel uk-text-small uk-margin-remove-top">{c.t("s.7.1.3.1.3.22.1.1.1.2.div", "Facilities Maintenance")}</div>
</div>
<div className="uk-width-1-2@m">
                    <div className="uk-panel" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("s.7.1.3.1.3.22.1.1.3.1.div", "<a href=\"tel:8585696633\" title=\"Tap here to call Sin Khounborin.\">(858)569-6633</a>") }} /><div className="uk-panel uk-margin-small-top"><joomla-hidden-mail is-link="1" is-email="1" first="U2tob3VuYm9yaW4=" last="c2RldHQub3Jn" text="U2tob3VuYm9yaW5Ac2RldHQub3Jn" base="" title="Tap here to send Sin Khounborin an email.">{c.t("s.7.1.3.1.3.22.1.1.3.2.0.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail></div>
</div>
        </div>    
</div></div>
</div>
        </div>    
</div>
                                </div>                
</div>
  </>
));
