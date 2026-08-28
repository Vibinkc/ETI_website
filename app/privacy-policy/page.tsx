import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

// Written by tools/privacy_policy.py — edit the wording in the CMS, or the
// section list in that file.

const ROUTE = "/privacy-policy";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, "Privacy Policy - Electrical Training Institute", "How the Electrical Training Institute collects, uses, shares and protects personal information submitted through etiedu.org.");
}

export default async function Page() {
  const c = await getContent(ROUTE);
  return (
    <main id="tm-main">
      <div id="system-message-container" aria-live="polite"></div>

      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <header className="uk-margin-large-bottom">
            <h1 className="uk-heading-medium">{c.t("pp.title.h1", "Privacy Policy")}</h1>
            <p className="uk-text-lead">{c.t("pp.intro.p", "How the Electrical Training Institute collects, uses, shares and protects the information you give us through this website.")}</p>
            <p className="uk-text-meta">{c.t("pp.updated.p", "Last updated 28 August 2026")}</p>
          </header>

          <nav aria-label="On this page" className="uk-margin-large-bottom">
            <h2 className="uk-h5 uk-text-uppercase">On this page</h2>
            <ul className="uk-list uk-list-disc">
              <li><a href={"#who-we-are"}>{c.t("pp.who-we-are.h2", "Who we are")}</a></li>
              <li><a href={"#what-we-collect"}>{c.t("pp.what-we-collect.h2", "What we collect")}</a></li>
              <li><a href={"#why"}>{c.t("pp.why.h2", "Why we collect it")}</a></li>
              <li><a href={"#voluntary"}>{c.t("pp.voluntary.h2", "Information you do not have to give")}</a></li>
              <li><a href={"#sharing"}>{c.t("pp.sharing.h2", "Who we share it with")}</a></li>
              <li><a href={"#retention"}>{c.t("pp.retention.h2", "How long we keep it")}</a></li>
              <li><a href={"#security"}>{c.t("pp.security.h2", "How we protect it")}</a></li>
              <li><a href={"#rights"}>{c.t("pp.rights.h2", "Your rights")}</a></li>
              <li><a href={"#cookies"}>{c.t("pp.cookies.h2", "Cookies and this website")}</a></li>
              <li><a href={"#children"}>{c.t("pp.children.h2", "Children")}</a></li>
              <li><a href={"#changes"}>{c.t("pp.changes.h2", "Changes to this policy")}</a></li>
              <li><a href={"#contact"}>{c.t("pp.contact.h2", "How to contact us")}</a></li>
            </ul>
          </nav>

        <section id={"who-we-are"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.who-we-are.h2", "Who we are")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.who-we-are.body", "<p>This website is operated by the Electrical Training Institute (ETI), the trade name of the San Diego Electrical Training Trust, which administers the apprenticeship programs of the San Diego Electrical Joint Apprenticeship and Training Committees (JATC).</p><p>Our office is at 4675 Viewridge Avenue, San Diego, CA 92123. This policy covers the information collected through <strong>etiedu.org</strong>. It does not cover the separate systems we link to \u2014 TradeSchool, Moodle, the Learning Management System, the eBooks library or the ETI Store \u2014 each of which has its own operator and its own privacy terms.</p>") }} />
        </section>

        <section id={"what-we-collect"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.what-we-collect.h2", "What we collect")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.what-we-collect.body", "<p>The only form on this website is the <a href=\"/sign-up\">Get Started</a> form. When you complete it, we receive:</p><ul class=\"uk-list uk-list-disc\"><li><strong>Who you are</strong> \u2014 first and last name, and your age range.</li><li><strong>How to reach you</strong> \u2014 telephone number, email address, and street address, city, state and ZIP code.</li><li><strong>What you are interested in</strong> \u2014 the program you are asking about, and how you heard about us.</li><li><strong>Demographic information</strong> \u2014 gender and race or ethnicity, including anything you type into the &ldquo;self describe&rdquo; or &ldquo;other ethnicity&rdquo; boxes. Answering these is voluntary.</li></ul><p>We do not record your IP address or browser details alongside your answers, and we do not buy personal information about you from anyone else.</p><p>Later in the application process \u2014 which happens off this website \u2014 the JATC also collects school transcripts, aptitude test results, interview notes, a driver&rsquo;s licence, a DD-214 where you are a veteran, and the result of a drug screen. Those are described in the <a href=\"/images/pdf/Rules-regs.pdf\" target=\"_blank\">Rules, Regulations and Guidelines</a>.</p>") }} />
        </section>

        <section id={"why"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.why.h2", "Why we collect it")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.why.body", "<ul class=\"uk-list uk-list-disc\"><li>To answer your enquiry and tell you about the program you asked about.</li><li>To process and assess an application to a program.</li><li>To meet the record-keeping and equal-opportunity obligations that apply to registered apprenticeship programs, principally 29 CFR part 30, which requires us to keep records identifiable by race, ethnicity, sex and disability status.</li><li>To improve the programs and services we offer.</li></ul><p>We do not sell your personal information, and we do not share it with anyone for their own advertising.</p>") }} />
        </section>

        <section id={"voluntary"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.voluntary.h2", "Information you do not have to give")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.voluntary.body", "<p>Answering the questions about <strong>gender</strong> and <strong>race or ethnicity</strong> is voluntary. We ask because federal apprenticeship regulations require us to invite that information and to report on it in aggregate.</p><p>Declining to answer will not affect your application, will not be held against you, and will not change how your enquiry is handled.</p>") }} />
        </section>

        <section id={"sharing"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.sharing.h2", "Who we share it with")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.sharing.body", "<p>We share personal information only where we need to:</p><ul class=\"uk-list uk-list-disc\"><li><strong>The JATC and its administrators</strong>, who assess applications and administer the programs.</li><li><strong>Government agencies with oversight of apprenticeship</strong> \u2014 the U.S. Department of Labor Office of Apprenticeship, and the applicable state Registration Agency (in California, the Division of Apprenticeship Standards). They may request our records, and we are required to provide them.</li><li><strong>Service providers</strong> who host or maintain our systems, acting on our instructions.</li><li><strong>Where the law requires it</strong> \u2014 for example in response to a subpoena or a lawful government request.</li></ul><p>Where you sign a release \u2014 for instance permitting Palomar College to send us your grades \u2014 we use that information only for the purpose stated in the release.</p>") }} />
        </section>

        <section id={"retention"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.retention.h2", "How long we keep it")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.retention.body", "<p>Applicant and apprenticeship records are kept for <strong>five years</strong>, as required of the JATC. Trust fund records are kept indefinitely.</p><p>Enquiries sent through this website that do not become applications are kept only as long as needed to respond to them and to understand demand for our programs, and are then deleted.</p>") }} />
        </section>

        <section id={"security"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.security.h2", "How we protect it")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.security.body", "<p>Submissions from this website are stored in an access-controlled database. Only authorised ETI staff can read them, each with their own account. Paper and electronic records held by the JATC are kept at our administration office under the same restrictions.</p><p>No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If a breach affects your personal information we will notify you as the law requires.</p>") }} />
        </section>

        <section id={"rights"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.rights.h2", "Your rights")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.rights.body", "<p>If you live in California, the California Consumer Privacy Act gives you the right to:</p><ul class=\"uk-list uk-list-disc\"><li>know what personal information we hold about you;</li><li>receive a copy of it, or ask us to correct it if it is wrong;</li><li>ask us to delete it, except where we are legally required to keep it \u2014 apprenticeship records we must retain are an example;</li><li>not be treated differently for exercising any of these rights.</li></ul><p>We do not sell or share personal information as those terms are defined by the CCPA, so there is nothing for you to opt out of.</p><p>To make a request, contact us using the details below. We will ask for enough information to confirm who you are before we act, and we will respond within the time the law allows.</p>") }} />
        </section>

        <section id={"cookies"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.cookies.h2", "Cookies and this website")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.cookies.body", "<p>This website uses only the cookies needed to make pages work. We do not use advertising cookies and we do not track you across other websites.</p><p>Pages here embed video from YouTube and link to social media platforms. When a page loads an embedded video, or when you follow a link to Facebook, X, Instagram, YouTube, LinkedIn, Bluesky or Mastodon, that company may set its own cookies and receive data about your visit under its own privacy policy, which we do not control.</p>") }} />
        </section>

        <section id={"children"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.children.h2", "Children")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.children.body", "<p>This website is intended for people considering an apprenticeship or training program. Applicants must be at least 17 at the time of application. We do not knowingly collect personal information from children under 13. If you believe a child has given us personal information, contact us and we will delete it.</p>") }} />
        </section>

        <section id={"changes"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.changes.h2", "Changes to this policy")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.changes.body", "<p>We may update this policy from time to time. The date at the top of this page shows when it was last changed. Where a change materially affects how we handle information already collected, we will take reasonable steps to tell you.</p>") }} />
        </section>

        <section id={"contact"} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t("pp.contact.h2", "How to contact us")}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r("pp.contact.body", "<p>For any question about this policy, or to exercise the rights described above:</p><p>Electrical Training Institute<br>4675 Viewridge Avenue<br>San Diego, CA 92123</p><p>Telephone <a href=\"tel:8585696633\">(858) 569-6633</a><br>Email <a href=\"mailto:info@sdett.org\">info@sdett.org</a></p><p>You can also use our <a href=\"/contact\">contact page</a>.</p>") }} />
        </section>
        </div>
      </div>
    </main>
  );
}
