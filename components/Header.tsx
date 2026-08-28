"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Site header. This is navigation, not editable content — the menu structure,
 * its routes and the active-item logic live in code. Joomla stamped `uk-active`
 * on the current item server-side; here it is derived from the route, so it is
 * right on first paint.
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navCls = (base: string, href: string) => {
    const active =
      href === pathname || (href !== "/" && pathname.startsWith(href + "/"));
    return active ? base + " uk-active" : base;
  };

  return (
    <>
      {isHome ? (
        <style
          dangerouslySetInnerHTML={{ __html: "#module-117\\#1{height: 210px;}" }}
        />
      ) : null}
<header className="tm-header-mobile uk-hidden@m">
        <div className="uk-navbar-container">
            <div className="uk-container uk-container-expand">
                <nav className="uk-navbar" uk-navbar={"{\"align\":\"left\",\"container\":\".tm-header-mobile\",\"boundary\":\".tm-header-mobile .uk-navbar-container\"}"}>
                                        <div className="uk-navbar-left ">
                                                    <Link href="/" aria-label="Back to home" className="uk-logo uk-navbar-item">
    <img src="/images/ETI_logo.svg" width="133" height="90" alt="" /></Link>
                    </div>
                                        <div className="uk-navbar-right">
                                                    <a uk-toggle="" href="#tm-dialog-mobile" className="uk-navbar-toggle" aria-controls="tm-dialog-mobile">
        <div uk-navbar-toggle-icon=""></div>
    </a>
                    </div>
                </nav>
            </div>
        </div>
        <div id="tm-dialog-mobile" uk-offcanvas="container: true; overlay: true" mode="slide" flip="">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                        <button className="uk-offcanvas-close uk-close-large" type="button" uk-close="" uk-toggle="cls: uk-close-large; mode: media; media: @s"></button>
                        <div className="uk-margin-auto-bottom">
<div className="uk-grid uk-child-width-1-1" uk-grid="">    <div>
<div className="uk-panel" id="module-125">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
<div className="uk-margin uk-text-center">
        <ul className="uk-margin-remove-bottom uk-subnav  uk-subnav-divider uk-flex-center" uk-margin="">                <li className="el-item ">
<a className="el-link" href="https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php">
        TradeSchool
</a></li>
                <li className="el-item ">
<a className="el-link" href="https://sdett-moodle.sdett.org/moodle/">
        Moodle
</a></li>
                <li className="el-item ">
<a className="el-link" href="https://lms.protechskillsinstitute.org/login/index.php">
        LMS
</a></li>
                <li className="el-item ">
<a className="el-link" href="https://ebooks.electricaltraining.org/">
        eBooks
</a></li>
                <li className="el-item ">
<a className="el-link" href="https://www.talech.com/biz/ordering/307835/ELECTRICAL-TRAINING-INSTITUTE-SAN-DIEGO-CA">
        ETI Store
</a></li>
                </ul>
</div>
</div>
</div>
</div>
</div>    <div>
<div className="uk-panel" id="module-124">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <hr className="uk-margin-xsmall-bottom" />
<div>    
<ul className="uk-nav uk-nav-secondary uk-nav-divider uk-nav-accordion" uk-nav="targets: > .js-accordion">
	<li className="item-176 js-accordion uk-parent"><a href="">Applicants <span uk-nav-parent-icon=""></span></a>
	<ul className="uk-nav-sub">
		<li className={navCls("item-192", "/applicants/veep")}><Link href="/applicants/veep">VEEP</Link></li>
		<li className="item-177 uk-nav-header">Inside Wireman</li>
		<li className={navCls("item-178", "/applicants/inside-wireman/program-overview-and-curriculum")}><Link href="/applicants/inside-wireman/program-overview-and-curriculum">Program Overview and Curriculum</Link></li>
		<li className={navCls("item-181", "/applicants/inside-wireman/application-requirements-and-process")}><Link href="/applicants/inside-wireman/application-requirements-and-process"> Application Requirements and Process</Link></li>
		<li className={navCls("item-183", "/applicants/inside-wireman/faq")}><Link href="/applicants/inside-wireman/faq">FAQ</Link></li>
		<li className="item-179 uk-nav-header">Sound &amp; Communication</li>
		<li className={navCls("item-180", "/applicants/sound-communication/program-overview-and-curriculum")}><Link href="/applicants/sound-communication/program-overview-and-curriculum">Program Overview and Curriculum</Link></li>
		<li className={navCls("item-182", "/applicants/sound-communication/application-requirements-and-process")}><Link href="/applicants/sound-communication/application-requirements-and-process">Application Requirements and Process</Link></li>
		<li className={navCls("item-184", "/applicants/sound-communication/faq")}><Link href="/applicants/sound-communication/faq">FAQ</Link></li>
		<li className="item-188 uk-nav-header">Intelligent Transportation Systems</li>
		<li className={navCls("item-189", "/applicants/intelligent-transportation-systems/program-overview-and-curriculum")}><Link href="/applicants/intelligent-transportation-systems/program-overview-and-curriculum">Program Overview and Curriculum</Link></li>
		<li className={navCls("item-190", "/applicants/intelligent-transportation-systems/application-requirements-and-process")}><Link href="/applicants/intelligent-transportation-systems/application-requirements-and-process">Application Requirements and Process</Link></li>
		<li className={navCls("item-191", "/applicants/intelligent-transportation-systems/faq")}><Link href="/applicants/intelligent-transportation-systems/faq">FAQ</Link></li></ul></li>
	<li className={navCls("item-195", "/apprentices")}><Link href="/apprentices">Apprentices</Link></li>
	<li className="item-185 js-accordion uk-parent"><a href="">Electrician Trainees <span uk-nav-parent-icon=""></span></a>
	<ul className="uk-nav-sub">
		<li className={navCls("item-186", "/electrician-trainees/program-overview-and-curriculum")}><Link href="/electrician-trainees/program-overview-and-curriculum">Program Overview and Curriculum</Link></li>
		<li className={navCls("item-187", "/electrician-trainees/how-to-become-an-et")}><Link href="/electrician-trainees/how-to-become-an-et">How to Become an ET</Link></li>
		<li className={navCls("item-193", "/electrician-trainees/maintaining-your-et-card")}><Link href="/electrician-trainees/maintaining-your-et-card"> Maintaining Your ET Card</Link></li>
		<li className={navCls("item-194", "/electrician-trainees/faq")}><Link href="/electrician-trainees/faq">FAQ</Link></li></ul></li>
	<li className="item-196 js-accordion uk-parent"><a href="">Continuing Education <span uk-nav-parent-icon=""></span></a>
	<ul className="uk-nav-sub">
		<li className={navCls("item-197", "/continuing-education/classes")}><Link href="/continuing-education/classes">Classes</Link></li>
		<li className={navCls("item-198", "/continuing-education/state-certification-renewal")}><Link href="/continuing-education/state-certification-renewal">State Certification Renewal</Link></li>
		<li className={navCls("item-199", "/continuing-education/3rd-party-online-classes")}><Link href="/continuing-education/3rd-party-online-classes"> 3rd Party Online Classes</Link></li>
		<li className={navCls("item-200", "/continuing-education/faq")}><Link href="/continuing-education/faq">FAQ</Link></li></ul></li></ul>
</div><hr className="uk-margin-xsmall-top" />
</div>
</div>
</div>
</div>    <div>
<div className="uk-panel uk-text-center" id="module-123">
<ul className="uk-nav uk-nav-secondary uk-nav-accordion uk-nav-center" uk-nav="targets: > .js-accordion">
	<li className={navCls("item-140", "/resources")}><Link href="/resources">Resources</Link></li>
	<li className={navCls("item-139", "/all-news")}><Link href="/all-news">News</Link></li>
	<li className="item-141 js-accordion uk-parent"><a href="">About <span uk-nav-parent-icon=""></span></a>
	<ul className="uk-nav-sub">
		<li className={navCls("item-142", "/about/photos")}><Link href="/about/photos">Photos</Link></li>
		<li className={navCls("item-143", "/about/about-eti")}><Link href="/about/about-eti">About ETI</Link></li>
		<li className={navCls("item-144", "/about/committees")}><Link href="/about/committees">Committees</Link></li></ul></li>
	<li className={navCls("item-145", "/contact")}><Link href="/contact">Contact</Link></li></ul>
</div>
</div>    <div>
<div className="uk-panel" id="module-128">
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
<div className="uk-width-1-1">
                    <hr />
<div className="uk-margin-large-top uk-margin-bottom uk-text-center">
<a className="el-content uk-button uk-button-default" href="https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php" target="_blank">
        Contractors    
</a>
</div>
<div className="uk-panel uk-margin-medium-top uk-text-center">Office: <a href="tel:858569-6633" title="Click here to call the main office.">(858) 569-6633</a></div>
</div>
</div>
</div>
</div></div>
            </div>
                        <div className="uk-grid-margin">
<div className="uk-grid uk-child-width-1-1" uk-grid="">    <div>
<div className="uk-panel" id="module-tm-3">
    <form action="https://etiedu.org/search-results" method="get" role="search" className="uk-search js-finder-searchform uk-search-default uk-width-1-1"><input name="q" className="js-finder-search-query uk-search-input" placeholder="Search" required={true} aria-label="Search" type="search" /><button uk-search-icon="" className="uk-search-icon-flip" type="submit"></button></form>
</div>
</div>    <div>
<div className="uk-panel" id="module-tm-5">
    <ul className="uk-grid uk-flex-inline uk-flex-middle uk-flex-nowrap">                    <li><a href="https://www.facebook.com/ElectricalTrainingInstituteofSanDiegoandImperial/" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Facebook"><span uk-icon="icon: facebook;"></span></a></li>
                    <li><a href="https://x.com/ETI569" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="X"><span uk-icon="icon: x;"></span></a></li>
                    <li><a href="https://www.instagram.com/electrical_training_institute/" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Instagram"><span uk-icon="icon: instagram;"></span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCNRlTsqUWirC64upO0i8slg?view_as=subscriber" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Youtube"><span uk-icon="icon: youtube;"></span></a></li>
            </ul>
</div>
</div></div>
            </div>
        </div>
    </div>
</header>
<div className="tm-toolbar tm-toolbar-default uk-visible@m">
    <div className="uk-container uk-flex uk-flex-middle">
                <div>
            <div className="uk-grid-medium uk-child-width-auto uk-flex-middle" uk-grid="margin: uk-margin-small-top">
                                <div>
<div className="uk-panel" id="module-tm-4">
    <ul className="uk-grid uk-flex-inline uk-flex-middle uk-flex-nowrap uk-grid-medium">                    <li><a href="https://www.facebook.com/ElectricalTrainingInstituteofSanDiegoandImperial/" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Tap here to visit our Facebook page. Opens in a new browser tab."><span uk-icon="icon: facebook; width: 18; height: 18;"></span></a></li>
                    <li><a href="https://x.com/ETI569" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Tap here to visit our X page. Opens in a new browser tab."><span uk-icon="icon: x; width: 18; height: 18;"></span></a></li>
                    <li><a href="https://www.instagram.com/electrical_training_institute/" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Tap here to visit our Instagram page. Opens in a new browser tab."><span uk-icon="icon: instagram; width: 18; height: 18;"></span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCNRlTsqUWirC64upO0i8slg?view_as=subscriber" className="uk-preserve-width uk-icon-link" rel="noreferrer" target="_blank" aria-label="Tap here to visit our YouTube page. Opens in a new browser tab."><span uk-icon="icon: youtube; width: 18; height: 18;"></span></a></li>
            </ul>
</div>
</div>
            </div>
        </div>
                <div className="uk-margin-auto-left">
            <div className="uk-grid-medium uk-child-width-auto uk-flex-middle" uk-grid="margin: uk-margin-small-top">
                <div>
<div className="uk-panel" id="module-115">
    <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#module-115\\#0 .el-item{padding:0px 9px;}#module-115\\#0 .el-item:not(:last-child){border-right: 1.5px solid;}#module-115\\#0 .el-item{text-transform:uppercase;}#module-115\\#1 .el-content{line-height: 22px;}" }} />
<div className="uk-grid-margin uk-grid tm-grid-expand" uk-grid="">
<div className="uk-width-3-5@m">
<div id="module-115#0" className="uk-width-large uk-text-right">
        <div className="uk-flex-middle uk-grid-column-collapse uk-grid-row-small uk-child-width-auto uk-flex-right" uk-grid="">    
                <div className="el-item">
<a className="el-content uk-link-text" title="Tap here to visit the TradeSchool website. Opens in a new browser tab." href="https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php" target="_blank">
        TradeSchool    
</a>
                </div>
                <div className="el-item">
<a className="el-content uk-link-text" title="Tap here to visit the Moodle website. Opens in a new browser tab." href="https://sdett-moodle.sdett.org/moodle/" target="_blank">
        Moodle    
</a>
                </div>
                <div className="el-item">
<a className="el-content uk-link-text" title="Tap here to visit the LMS website. Opens in a new browser tab." href="https://lms.protechskillsinstitute.org/login/index.php" target="_blank">
        LMS    
</a>
                </div>
                <div className="el-item">
<a className="el-content uk-link-text" title="Tap here to visit the eBooks website. Opens in a new browser tab." href="https://ebooks.electricaltraining.org/" target="_blank">
        eBooks    
</a>
                </div>
                <div className="el-item">
<a className="el-content uk-link-text" title="Tap here to visit the ETI Store. Opens in a new browser tab." href="https://www.talech.com/biz/ordering/307835/ELECTRICAL-TRAINING-INSTITUTE-SAN-DIEGO-CA" target="_blank">
        ETI Store    
</a>
                </div>
        </div>    
</div>
</div>
<div className="uk-width-2-5@m">
<div id="module-115#1" className="uk-margin uk-text-right">
        <div className="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-right" uk-grid="">    
                <div className="el-item">
<a className="el-content uk-button uk-button-default uk-button-small" title="Contractors log in to TradeSchool, tap here. Opens in a new browser tab." href="https://secure2.tradeschoolinc.com/v5/sdett-org/login/index.php" target="_blank">
        Contractors    
</a>
                </div>
                <div className="el-item">
<Link className="el-content uk-button uk-button-danger uk-button-small" title="Tap here to apply at ETI." href="/applicants">
        Apply Now    
</Link>
                </div>
        </div>    
</div>
</div>
</div>
</div>
</div>
            </div>
        </div>
    </div>
</div>
<header className="tm-header uk-visible@m">
        <div className="uk-navbar-container">
            <div className="uk-container uk-container-xlarge">
                <nav className="uk-navbar" uk-navbar={"{\"align\":\"left\",\"container\":\".tm-header\",\"boundary\":\".tm-header .uk-navbar-container\"}"}>
                                        <div className="uk-navbar-left ">
<div className="uk-navbar-item" id="module-117">
    <style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#module-117\\#0 .el-image{padding: 12px 0px;}" }} />
<div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1" id="module-117#1">
<div className="uk-flex uk-flex-column uk-width-1-1">
<div className="uk-flex-1 uk-flex" id="module-117#0">
        <Link className="el-link uk-flex" href="/"><img className="el-image" style={{ aspectRatio: "auto" }} src="/images/ETI_logo.svg" alt="Tap here to return to our home page." loading="lazy" width={isHome ? 275 : 150} height={isHome ? 186 : 102} /></Link>    
</div>
</div>
</div>
</div>
                    </div>
                                        <div className="uk-navbar-right">
<ul className="uk-navbar-nav" id="module-114">
	<li className={navCls("item-112 uk-parent", "/applicants")}><Link href="/applicants">Applicants <span uk-navbar-parent-icon=""></span></Link>
	<div className="uk-drop uk-navbar-dropdown" pos="bottom-left" stretch="x" boundary-x=".tm-header .uk-navbar-container"><style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#menu-item-112\\#0{text-transform: uppercase;}#menu-item-112\\#1{text-transform: uppercase;}#menu-item-112\\#2{text-transform: uppercase;}#menu-item-112\\#3 .el-image{display: block; margin: 0 auto;}" }} />
<div className="uk-grid-margin uk-grid tm-grid-expand uk-grid-column-small" uk-grid="">
<div className="uk-grid-item-match uk-width-1-2@s uk-width-1-4@m">
        <div className="uk-card-overlay uk-card uk-card-small uk-card-body uk-flex uk-flex-column">    
<h2 className="uk-h5 uk-heading-divider uk-text-primary uk-margin-xsmall-bottom" id="menu-item-112#0">
                <Link className="el-link uk-link-heading" href="/applicants/inside-wireman">        
                    Inside Wireman        
                </Link>        
</h2><div className="uk-panel uk-text-meta uk-margin-xsmall-top uk-margin-auto-bottom">Become a highly skilled electrician working on commercial, industrial, and large-scale electrical systems—developing skills you can use anywhere.</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/inside-wireman/program-overview-and-curriculum">
                    Program Overview and Curriculum        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/inside-wireman/application-requirements-and-process">
                    Application Requirements and Process        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/inside-wireman/faq">
                    FAQ        
</Link></li>
                            </ul>
</div>
        </div>    
</div>
<div className="uk-grid-item-match uk-width-1-2@s uk-width-1-4@m">
        <div className="uk-card-overlay uk-card uk-card-small uk-card-body uk-flex uk-flex-column">    
<h2 className="uk-h5 uk-heading-divider uk-text-primary uk-margin-xsmall-bottom" id="menu-item-112#1">
                <Link className="el-link uk-link-heading" href="/applicants/sound-communication">        
                    Sound &amp; Communication        
                </Link>        
</h2><div className="uk-panel uk-text-meta uk-margin-xsmall-top uk-margin-auto-bottom">Train for a fast-growing field focused on low-voltage systems like data networks, fire alarm, security and communications infrastructure.</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/sound-communication/program-overview-and-curriculum">
                    Program Overview and Curriculum        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/sound-communication/application-requirements-and-process">
                    Application Requirements and Process        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/sound-communication/faq">
                    FAQ        
</Link></li>
                            </ul>
</div>
        </div>    
</div>
<div className="uk-grid-item-match uk-width-1-2@s uk-width-1-4@m">
        <div className="uk-card-overlay uk-card uk-card-small uk-card-body uk-flex uk-flex-column">    
<h2 className="uk-h5 uk-heading-divider uk-text-primary uk-margin-xsmall-bottom" id="menu-item-112#2">
                <Link className="el-link uk-link-heading" href="/applicants/intelligent-transportation-systems">        
                    Intelligent Transportation Systems        
                </Link>        
</h2><div className="uk-panel uk-text-meta uk-margin-xsmall-top uk-margin-auto-bottom">Help power the future of transportation by working on traffic signals, roadway technology and smart transportation systems.</div>
<div className="uk-margin-remove-bottom">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/intelligent-transportation-systems/program-overview-and-curriculum">
                    Program Overview and Curriculum        
</Link></li>
                            </ul>
</div>
<div className="uk-margin-remove-bottom">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/intelligent-transportation-systems/application-requirements-and-process">
                    Application Requirements and Process        
</Link></li>
                            </ul>
</div>
<div className="uk-margin-remove-bottom">
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/applicants/intelligent-transportation-systems/faq">
                    FAQ        
</Link></li>
                            </ul>
</div>
        </div>    
</div>
<div className="uk-flex uk-flex-column uk-width-1-2@s uk-width-1-4@m">
<div className="uk-flex-1 uk-card uk-card-primary uk-card-small uk-card-body uk-margin-remove-first-child uk-margin" id="menu-item-112#3">
        <picture><img className="el-image" src="/media/yootheme/cache/ab/VEEP_Logo-ab0be403.png" alt="Veep logo" loading="lazy" width="100" height="85" /></picture>
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">Opportunities for Veterans</h3>        
                <div className="el-content uk-panel uk-margin-top">Our program offers military veterans a direct route into a skilled trade with strong pay, full benefits, and long-term stability.</div>        
                <div className="uk-margin-medium-top"><Link href="/applicants/veep" className="el-link uk-button uk-button-danger">Learn more</Link></div>        
</div>
</div>
</div></div></li>
	<li className={navCls("item-132", "/apprentices")}><Link href="/apprentices">Apprentices</Link></li>
	<li className={navCls("item-128 uk-parent", "/electrician-trainees")}><Link href="/electrician-trainees">Electrician Trainees <span uk-navbar-parent-icon=""></span></Link>
	<div className="uk-drop uk-navbar-dropdown" pos="bottom-left" stretch="x" boundary-x=".tm-header .uk-navbar-container"><style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#menu-item-128\\#0{text-transform: uppercase;}" }} />
<div className="uk-grid-margin uk-grid tm-grid-expand uk-grid-column-medium" uk-grid="">
<div className="uk-flex uk-flex-column uk-width-1-3@m">
<div className="uk-flex-1 uk-card uk-card-primary uk-card-body uk-margin-remove-first-child uk-margin">
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">Entry-Level Electrician Training Path</h3>        
                <div className="el-content uk-panel uk-margin-top">An Electrician Trainee works under the supervision of certified electricians while completing approved training and gaining experience toward California electrician certification.</div>        
</div>
</div>
<div className="uk-grid-item-match uk-width-1-3@m">
        <div className="uk-card-overlay uk-card uk-card-body">    
<h4 className="uk-h5 uk-heading-divider uk-text-primary" id="menu-item-128#0">
                <Link className="el-link uk-link-heading" href="/electrician-trainees">        
                    Electrician Trainees (ET)        
                </Link>        
</h4>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/electrician-trainees/program-overview-and-curriculum">
                    Program Overview and Curriculum        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/electrician-trainees/how-to-become-an-et">
                    How to Become an ET        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/electrician-trainees/maintaining-your-et-card">
                    Maintaining Your ET Card        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/electrician-trainees/faq">
                    FAQ        
</Link></li>
                            </ul>
</div>
        </div>    
</div>
<div className="uk-flex uk-flex-column uk-width-1-3@m">
<div className="uk-flex-1 uk-flex uk-margin">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} src="/images/assets/et-menu.jpg" alt="Electrician student learning for their instructor on the job." loading="lazy" width="566" height="546" /></picture>    
</div>
</div>
</div></div></li>
	<li className={navCls("item-133 uk-parent", "/continuing-education")}><Link href="/continuing-education">Continuing Education <span uk-navbar-parent-icon=""></span></Link>
	<div className="uk-drop uk-navbar-dropdown" pos="bottom-left" stretch="x" boundary-x=".tm-header .uk-navbar-container"><style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#menu-item-133\\#0{text-transform: uppercase;}" }} />
<div className="uk-grid-margin uk-grid tm-grid-expand uk-grid-column-medium" uk-grid="">
<div className="uk-flex uk-flex-column uk-width-1-3@m">
<div className="uk-flex-1 uk-card uk-card-primary uk-card-body uk-margin-remove-first-child uk-margin">
                <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">Advance Your Career</h3>        
                <div className="el-content uk-panel uk-margin-top">Stay certified, sharpen your skills, and keep your career moving forward with trusted IBEW training. From code updates and certification renewal to advanced skills development, continuing education helps you stay competitive, confident and ready for the demands of a changing industry.</div>        
</div>
</div>
<div className="uk-grid-item-match uk-width-1-3@m">
        <div className="uk-card-overlay uk-card uk-card-body">    
<h4 className="uk-h5 uk-heading-divider uk-text-primary" id="menu-item-133#0">
                <Link className="el-link uk-link-heading" href="/continuing-education">        
                    Continuing Education        
                </Link>        
</h4>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/continuing-education/classes">
                    Classes        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/continuing-education/state-certification-renewal">
                    State Certification Renewal        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/continuing-education/3rd-party-online-classes">
                    3rd Party Online Classes        
</Link></li>
                            </ul>
</div>
<div>
        <ul className="uk-margin-remove-bottom uk-nav uk-nav-secondary">                                <li className="el-item ">
<Link className="el-link" href="/continuing-education/faq">
                    FAQ        
</Link></li>
                            </ul>
</div>
        </div>    
</div>
<div className="uk-flex uk-flex-column uk-width-1-3@m">
<div className="uk-flex-1 uk-flex uk-margin">
        <picture><img className="el-image" style={{ aspectRatio: "auto" }} src="/images/assets/jurneymen-menu.jpg" alt="Journeyman using a drill and another worker with a vacume on the job.." loading="lazy" width="600" height="545" /></picture>    
</div>
</div>
</div></div></li></ul>
<ul className="uk-navbar-nav" id="module-113">
	<li className={navCls("item-140", "/resources")}><Link href="/resources">Resources</Link></li>
	<li className={navCls("item-139", "/all-news")}><Link href="/all-news">News</Link></li>
	<li className="item-141 uk-parent"><a role="button">About <span uk-navbar-parent-icon=""></span></a>
	<div className="uk-drop uk-navbar-dropdown" mode="hover" pos="bottom-left"><div><ul className="uk-nav uk-navbar-dropdown-nav">
		<li className={navCls("item-142", "/about/photos")}><Link href="/about/photos">Photos</Link></li>
		<li className={navCls("item-143", "/about/about-eti")}><Link href="/about/about-eti">About ETI</Link></li>
		<li className={navCls("item-144", "/about/committees")}><Link href="/about/committees">Committees</Link></li></ul></div></div></li>
	<li className={navCls("item-145", "/contact")}><Link href="/contact">Contact</Link></li></ul>
    <div uk-modal="" id="search-container-11" className="uk-modal">
        <div className="uk-modal-dialog uk-modal-body">
                        <button type="button" uk-close="" className="uk-modal-close-default uk-close-large uk-modal-close-outside" uk-toggle={"{\"mode\":\"media\",\"media\":\"@s\",\"cls\":\"uk-close-large uk-modal-close-outside\"}"}></button>
                <form action="https://etiedu.org/search-results" method="get" role="search" className="uk-search js-finder-searchform uk-width-1-1 uk-search-medium"><input name="q" className="js-finder-search-query uk-search-input" placeholder="Search" required={true} aria-label="Search" type="search" autoFocus={true} /><button uk-search-icon="" className="uk-search-icon-flip" type="submit"></button></form>
        </div>
    </div>
                    </div>
                </nav>
            </div>
        </div>
</header>
    </>
  );
}
