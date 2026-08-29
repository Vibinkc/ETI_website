"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { makeContent, type ContentData } from "@/lib/content";

/**
 * Site footer. Contact details and copy come from the CMS (the `/_global`
 * page); the share links follow whichever page is being viewed.
 */
export default function Footer({ content }: { content: ContentData }) {
  const c = makeContent(content);
  const pathname = usePathname();
  const shareUrl = encodeURIComponent("https://etiedu.org" + pathname);

  return (
<footer>
                <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#footer\\#0{font-weight: bolder; text-transform: uppercase;}#footer\\#1 .el-item{font-weight: bolder;}#footer\\#1 a[href^=\"tel:\"]{color: #335dcd;}#footer\\#1 a[href^=\"tel:\"]:hover{color: #2e4698;}#footer\\#2{font-weight: bolder; text-transform: uppercase;}#footer\\#3{font-weight: bolder; text-transform: uppercase;}#footer\\#4{font-weight: bolder; text-transform: uppercase;}#footer\\#5{font-size:80%;}#footer\\#6{font-weight: bolder; text-transform: uppercase;}#footer\\#7{font-weight: bolder; text-transform: uppercase;}#footer\\#8 .el-link{font-size: 85%;}#footer\\#8 .el-link.footHead{text-transform: uppercase; font-weight: bolder; margin-top:12px;}/* border-bottom:1px solid #595858;*/#footer\\#9{font-weight: bolder; text-transform: uppercase;}#footer\\#10{font-weight: bolder; text-transform: uppercase;}#footer\\#11 .el-link{font-size: 85%;}#footer\\#12{font-weight: bolder; text-transform: uppercase;}#footer\\#13 .el-link{font-size: 85%;}#footer\\#14{font-weight: bolder; text-transform: uppercase;}#footer\\#15{font-weight: bolder; text-transform: uppercase;}#footer\\#16 .el-link{font-size: 85%;}#footer\\#17{font-weight: bolder; text-transform: uppercase;}#footer\\#18 .el-link{font-size: 85%;}#sticky-to-top a{padding:21px 17px;background-color:#031F4ADB;border:4px solid #3350A0A1;border-radius:40px;}#sticky-to-top svg{color:#fff;}#footer\\#19{background-color: #fff; border-bottom: 15px solid #373D20;}" }} />
<div className="uk-section-default uk-section uk-section-small-top uk-section-medium-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div className="uk-panel">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1@m">
<div className="uk-text-lead uk-text-center">
                    {c.t("ftr.3.1.1.1.1.1.1.1.div", "Share Us")}        
</div>
<div className="uk-margin uk-text-center">    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" {...{ "uk-grid": "" }}>
            <li className="el-item">
<a className="el-link uk-icon-button" href={"https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + ""} title="Tap to visit our Facebook page. Opens in new window." rel="noreferrer" target="_blank" aria-label="Tap to visit our Facebook page. Opens in new window."><span {...{ "uk-icon": "icon: facebook;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-button" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareUrl + ""} title="Tap to visit our LinkedIn page. Opens in new window." rel="noreferrer" target="_blank" aria-label="Tap to visit our LinkedIn page. Opens in new window."><span {...{ "uk-icon": "icon: linkedin;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-button" href={"https://bsky.app/intent/compose?text=%0A" + shareUrl + ""} title="Tap to visit our Bluesky page. Opens in new window." rel="noreferrer" target="_blank" aria-label="Tap to visit our Bluesky page. Opens in new window."><span {...{ "uk-icon": "icon: bluesky;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-button" href={"https://mastodon.social/share?url=" + shareUrl + "&text="} title="Tap to visit our Mastodon page. Opens in new window." rel="noreferrer" target="_blank" aria-label="Tap to visit our Mastodon page. Opens in new window."><span {...{ "uk-icon": "icon: mastodon;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-button" href={"https://x.com/intent/post?url=" + shareUrl + "&text="} title="Tap to visit our X page. Opens in new window." rel="noreferrer" target="_blank" aria-label="Tap to visit our X page. Opens in new window."><span {...{ "uk-icon": "icon: x;" }}></span></a></li>
    </ul></div>
</div>
</div>
</div>
</div>
</div>
                                </div>                
</div>
<div id="footer#19" className="uk-section-muted uk-section uk-section-medium-top uk-section-small-bottom">
                                <div className="uk-container">                
<div className="uk-grid-margin uk-grid tm-grid-expand uk-grid-divider" {...{ "uk-grid": "" }}>
<div className="uk-width-1-2@m uk-flex-first@m">
                    <div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>
<div className="uk-width-2-3@s uk-width-2-3@m">
                    <div className="uk-panel uk-margin-medium-bottom">
<div className="uk-grid-margin uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>
<div className="uk-width-1-2@s uk-width-1-2@m">
<div className="uk-text-center">
        <Link className="el-link" href="/"><img className="el-image" loading="lazy" width="175" height="118" src={c.m("ftr.5.1.1.1.1.1.1.1.1.1.1.1.0.img", "/images/ETI_logo.svg")} alt={c.a("ftr.5.1.1.1.1.1.1.1.1.1.1.1.0.img", "Tap here to go to the home page.")} /></Link>    
</div>
</div>
<div className="uk-width-1-2@s uk-width-1-2@m">
<h3 className="uk-h6 uk-text-center" id="footer#0" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.1.1.1.1.1.3.1.h3", "<a href=\"/contact\" title=\"Tap here to visit our Contact page.\">Contact</a>") }} />
<div id="footer#1" className="uk-margin uk-text-center">
        <div className="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-center" {...{ "uk-grid": "" }}>    
                <div className="el-item" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.1.1.1.1.1.3.3.1.1.div", "<a class=\"el-content uk-button uk-button-text\" title=\"Tap here to call the main office.\" href=\"tel:8585696633\">\n    \n        (858) 569-6633    \n    \n</a>") }} />
                <div className="el-item">
<a className="el-content uk-button uk-button-text" title="Tap here to send us an email." href="mailto:info@sdett.org">
        <joomla-hidden-mail is-link="1" is-email="1" first="aW5mbw==" last="c2RldHQub3Jn" text="aW5mb0BzZGV0dC5vcmc=" base="">{c.t("ftr.5.1.1.1.1.1.1.1.1.3.3.1.3.1.1.joomla-hidden-mail", "This email address is being protected from spambots. You need JavaScript enabled to view it.")}</joomla-hidden-mail>    
</a>
                </div>
        </div>    
</div>
</div>
</div></div><div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>
<div className="uk-width-1-2@s uk-width-1-2@m">
<h3 className="uk-h6 uk-text-center" id="footer#2">
                    {c.t("ftr.5.1.1.1.1.1.1.2.1.1.1.h3", "Flip The Switch")}        
</h3>
<div className="uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.1.1.1.2.1.1.3.div", "<a class=\"el-content uk-button uk-button-danger uk-button-small\" title=\"Tap here to apply at ETI.\" href=\"/applicants\">\n    \n        Get Started    \n    \n</a>") }} />
</div>
<div className="uk-width-1-2@s uk-width-1-2@m">
<h3 className="uk-h6 uk-text-center" id="footer#3">
                    {c.t("ftr.5.1.1.1.1.1.1.2.1.3.1.h3", "Follow Us")}        
</h3>
<div className="uk-margin uk-text-center">    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle" {...{ "uk-grid": "" }}>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.facebook.com/ElectricalTrainingInstituteofSanDiegoandImperial/" aria-label="Tap here to visit our Facebook page. Opens in a new browser tab." target="_blank"><span {...{ "uk-icon": "icon: facebook;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://x.com/ETI569" aria-label="Tap here to visit our X page. Opens in a new browser tab." target="_blank"><span {...{ "uk-icon": "icon: x;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.instagram.com/electrical_training_institute/" aria-label="Tap here to visit our Instagram page. Opens in a new browser tab." target="_blank"><span {...{ "uk-icon": "icon: instagram;" }}></span></a></li>
            <li className="el-item">
<a className="el-link uk-icon-link" href="https://www.youtube.com/channel/UCNRlTsqUWirC64upO0i8slg" aria-label="Tap here to visit our YouTube page. Opens in a new browser tab." target="_blank"><span {...{ "uk-icon": "icon: youtube;" }}></span></a></li>
    </ul></div>
</div>
</div></div>
</div>
<div className="uk-width-1-3@s uk-width-1-3@m">
<h3 className="uk-h6 uk-text-center" id="footer#4">
                    {c.t("ftr.5.1.1.1.1.1.3.1.h3", "Offices")}        
</h3><div className="uk-panel uk-text-meta uk-margin uk-text-left@m uk-text-center"><span style={{ textTransform: "uppercase" }}>{c.t("ftr.5.1.1.1.1.1.3.2.0.span", "San Diego Campus")}</span>
<address style={{ marginTop: "4px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.1.1.3.2.2.address", "4675 Viewridge Ave.<br>San Diego, CA 92123") }} /></div><div className="uk-panel uk-text-meta uk-margin uk-text-left@m uk-text-center"><span style={{ textTransform: "uppercase" }}>{c.t("ftr.5.1.1.1.1.1.3.3.0.span", "Imperial County")}</span><br />
<address style={{ marginTop: "4px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.1.1.3.3.3.address", "2420 Imperial Business Park Dr.<br>\nImperial, CA 92251") }} />
</div>
</div>
</div></div><div className="uk-panel uk-text-meta uk-margin-small" id="footer#5"><p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.2.0.p", "<strong>Serving cities in San Diego County:</strong> Carlsbad, Chula Vista, Coronado, Del Mar, El Cajon, Encinitas, Escondido, Imperial Beach, La Mesa, Lemon Grove, National City, Oceanside, Poway, San Diego, San Marcos, Santee, Solana Beach, Vista, Alpine, Bonita, Borrego Springs, Fallbrook, Lakeside, Ramona, Rancho Santa Fe, Spring Valley") }} />
<p data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.1.2.2.p", "<strong>Serving cities in Imperial County:</strong> Brawley, Calexico, Calipatria, El Centro, Holtville, Imperial, Westmorland, Niland, Bombay Beach, Heber, Ocotillo, Palo Verde, Salton City, Seeley, Winterhaven") }} /></div><hr className="uk-margin-top uk-margin-small-bottom" /><div className="uk-panel uk-text-small uk-margin">{c.t("ftr.5.1.1.1.4.div", "The Trustees of the JATC will not discriminate against apprenticeship applicants or apprentices based on race, color, religion, national origin, sex (including pregnancy and gender identity), sexual orientation, genetic information, or because they are an individual with a disability or a person 40 years old or older. The Trustees of the JATC will take affirmative action to provide equal opportunity in apprenticeship and will operate the apprenticeship program as required under Title 29 of the Code of Federal Regulations, Part 30, as amended.")}</div><hr className="uk-margin" />
<h3 className="uk-h6 uk-margin-top uk-margin-small-bottom uk-text-center" id="footer#6">
                    {c.t("ftr.5.1.1.1.7.h3", "Our Partners")}        
</h3><div className="uk-panel uk-margin-remove-top">
<div className="uk-grid-margin uk-container uk-container-expand">
        <div className="uk-grid tm-grid-expand uk-grid-column-medium" {...{ "uk-grid": "" }}>    
<div className="uk-grid-item-match uk-flex-middle uk-width-1-3@s">
                        <div className="uk-panel uk-width-1-1">            
<div className="uk-margin uk-text-right@s uk-text-center">
        <a className="el-link" href="https://www.necasandiego.org/" target="_blank"><picture><img className="el-image" loading="lazy" width="85" height="50" src={c.m("ftr.5.1.1.1.8.1.1.1.1.1.1.0.0.img", "/media/yootheme/cache/f9/necaSD-f97f7ca5.png")} alt={c.a("ftr.5.1.1.1.8.1.1.1.1.1.1.0.0.img", "Tap here to visit the NECA San Diego website. Opens in a new browser tab.")} /></picture></a>    
</div>
                        </div>            
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-1-3@s">
                        <div className="uk-panel uk-width-1-1">            
<div className="uk-margin uk-text-center">
        <a className="el-link" href="https://electricaltrainingalliance.org/" target="_blank"><picture><img className="el-image" loading="lazy" width="170" height="42" src={c.m("ftr.5.1.1.1.8.1.1.3.1.1.1.0.0.img", "/media/yootheme/cache/55/Electrical-Training-Alliance-logo-558fba6e.png")} alt={c.a("ftr.5.1.1.1.8.1.1.3.1.1.1.0.0.img", "Tap here to visit the Electrical Training Alliance website. Opens in a new browser tab.")} /></picture></a>    
</div>
                        </div>            
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-1-3@s">
                        <div className="uk-panel uk-width-1-1">            
<div className="uk-text-left@s uk-text-center">
        <a className="el-link" href="https://ibew569.org/" target="_blank"><picture><img className="el-image" loading="lazy" width="110" height="21" src={c.m("ftr.5.1.1.1.8.1.1.5.1.1.1.0.0.img", "/media/yootheme/cache/ad/ibew569-logo-ad4e4a59.png")} alt={c.a("ftr.5.1.1.1.8.1.1.5.1.1.1.0.0.img", "Tap here to visit IBEW 569's website. Opens in a new browser tab.")} /></picture></a>    
</div>
                        </div>            
</div>
        </div>    
</div></div>
</div>
<div className="uk-width-1-2@m uk-flex-first">
                    <div className="uk-panel uk-margin">
<div className="uk-grid-margin uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>
<div className="uk-width-1-3@s uk-width-1-3@m">
<h3 className="uk-h6 uk-text-center" id="footer#7" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.1.h3", "<a href=\"/applicants\" title=\"Tap here to visit our Applicants page.\">Applicants</a>") }} />
<div id="footer#8" className="uk-text-left@m uk-text-center">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.1.li", "<a class=\"uk-flex-left@m uk-flex-center el-link footHead\" href=\"/applicants/veep\">\n    \n        \n                    VEEP        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.3.li", "<a class=\"uk-flex-left@m uk-flex-center el-link footHead\" href=\"/applicants/inside-wireman\">\n    \n        \n                    Inside Wireman        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.5.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/inside-wireman/program-overview-and-curriculum\">\n    \n        \n                    Program Overview and Curriculum        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.7.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/inside-wireman/application-requirements-and-process\">\n    \n        \n                    Application Requirements and Process        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.9.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/inside-wireman/faq\">\n    \n        \n                    FAQ        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.11.li", "<a class=\"uk-flex-left@m uk-flex-center el-link footHead\" href=\"/applicants/sound-communication\">\n    \n        \n                    Sound & Communication         \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.13.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/sound-communication/program-overview-and-curriculum\">\n    \n        \n                    Program Overview and Curriculum        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.15.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/sound-communication/application-requirements-and-process\">\n    \n        \n                    Application Requirements and Process        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.17.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/sound-communication/faq\">\n    \n        \n                    FAQ        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.19.li", "<a class=\"uk-flex-left@m uk-flex-center el-link footHead\" href=\"/applicants/intelligent-transportation-systems\">\n    \n        \n                    Intelligent Transportation Systems         \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.21.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/intelligent-transportation-systems/program-overview-and-curriculum\">\n    \n        \n                    Program Overview and Curriculum        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.23.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/intelligent-transportation-systems/application-requirements-and-process\">\n    \n        \n                    Application Requirements and Process        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.1.3.1.25.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/applicants/intelligent-transportation-systems/faq\">\n    \n        \n                    FAQ        \n    \n</a>") }} />
                            </ul>
</div>
</div>
<div className="uk-width-1-3@s uk-width-1-3@m">
<h3 className="uk-h6 uk-text-center" id="footer#9" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.1.h3", "<a href=\"/apprentices\" title=\"Tap here to visit our Apprentices page.\">Apprentices</a>") }} />
<h3 className="uk-h6 uk-text-center" id="footer#10" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.3.h3", "<a href=\"/electrician-trainees\" title=\"Tap here to visit our Electrician Trainees page.\">Electrician Trainees</a>") }} />
<div id="footer#11" className="uk-text-left@m uk-text-center">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.5.1.1.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/electrician-trainees/program-overview-and-curriculum\">\n    \n        \n                    Program Overview and Curriculum        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.5.1.3.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/electrician-trainees/how-to-become-an-et\">\n    \n        \n                    How to Become an ET        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.5.1.5.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/electrician-trainees/maintaining-your-et-card\">\n    \n        \n                    Maintaining Your ET Card        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.5.1.7.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/electrician-trainees/faq\">\n    \n        \n                    FAQ        \n    \n</a>") }} />
                            </ul>
</div>
<h3 className="uk-h6 uk-text-center" id="footer#12" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.7.h3", "<a href=\"/continuing-education\" title=\"Tap here to visit our Continuing Education page.\">Continuing Education</a>") }} />
<div id="footer#13" className="uk-text-left@m uk-text-center">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.9.1.1.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/continuing-education/classes\">\n    \n        \n                    Classes        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.9.1.3.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/continuing-education/state-certification-renewal\">\n    \n        \n                    State Certification Renewal        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.9.1.5.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/continuing-education/3rd-party-online-classes\">\n    \n        \n                    3rd Party Online Classes        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.3.9.1.7.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/continuing-education/faq\">\n    \n        \n                    FAQ        \n    \n</a>") }} />
                            </ul>
</div>
</div>
<div className="uk-width-1-3@s uk-width-1-3@m">
<h3 className="uk-h6 uk-text-center" id="footer#14" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.1.h3", "<a href=\"https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php\" title=\"Tap here to access the Contractors portal. Opens in a new browser tab.\" target=\"_blank\">Contractors</a>") }} />
<h3 className="uk-h6 uk-text-center" id="footer#15">
                    {c.t("ftr.5.1.1.3.1.1.5.3.h3", "Explore")}        
</h3>
<div id="footer#16" className="uk-text-left@m uk-text-center">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.1.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/resources\">\n    \n        \n                    Resources        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.3.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/all-news\">\n    \n        \n                    News        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.5.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/about/photos\">\n    \n        \n                    Photos        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.7.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/about/about-eti\">\n    \n        \n                    About ETI        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.9.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/about/committees\">\n    \n        \n                    Committees        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.5.1.11.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/contact\">\n    \n        \n                    Contact        \n    \n</a>") }} />
                            </ul>
</div>
<h3 className="uk-h6 uk-text-center" id="footer#17">
                    {c.t("ftr.5.1.1.3.1.1.5.7.h3", "Legal")}        
</h3>
<div id="footer#18" className="uk-text-left@m uk-text-center">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">                                <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.9.1.1.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/images/pdf/EEOC.pdf\" target=\"_blank\" download>\n    \n        <span class=\"el-image\" uk-icon=\"icon: file-pdf;\"></span>\n                    EEOC        \n    \n</a>") }} />
                                            <li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.9.1.3.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/images/pdf/Rules-regs.pdf\" target=\"_blank\" download>\n    \n        <span class=\"el-image\" uk-icon=\"icon: file-pdf;\"></span>\n                    Rules and regs.        \n    \n</a>") }} />
<li className="el-item " data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.1.3.1.1.5.9.1.5.li", "<a class=\"uk-flex-left@m uk-flex-center el-link\" href=\"/privacy-policy\">\n    <span class=\"el-image\" uk-icon=\"icon: lock;\"></span>\n                    Privacy Policy\n</a>") }} />
                            </ul>
</div>
<div id="sticky-to-top" className="uk-margin"><a href="#" title="Tap to scroll to the top." {...{ "uk-totop": "" }} {...{ "uk-scroll": "" }} aria-label="Tap to scroll to the top."></a></div>
</div>
</div></div>
</div>
</div>
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-flex uk-flex-column uk-width-1-1">
                    <hr className="uk-margin" /><div className="uk-panel uk-text-meta uk-margin-auto-top uk-margin-xsmall-bottom uk-text-center">{c.t("ftr.5.1.3.1.2.div", "\u00a92026 Electrical Training Institute  (San Diego Electrical Training Trust SDETT). All Rights Reserved.")}
</div><div className="uk-panel uk-text-meta uk-text-muted uk-margin-xsmall-top uk-text-center"><p style={{ fontSize: "90%" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("ftr.5.1.3.1.3.0.p", "Another <a style=\"color: #999;\" href=\"http://www.effectivedesigns.com/\" target=\"_blank\" rel=\"noopener\" title=\"Tap here to visit the Web Developer's website.\">EffectiveDesigns.com</a>") }} /></div>
</div>
</div>
                                </div>                
</div>            </footer>
  );
}
