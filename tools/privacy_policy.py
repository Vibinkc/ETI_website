"""The Privacy Policy page: its content, its page.tsx, and its CMS slots.

The mirror has no privacy policy, so there is no source markup for the usual
converter to chew on. The text lives here instead, and this module emits the
same two things every other page produces: a `page.tsx` that reads its content
by slot key, and the seed entries that make those slots editable in the CMS.

Editors change the wording in the CMS like any other page. Changing which
sections exist means editing this file and regenerating.
"""

import json
import os

ROUTE = "/privacy-policy"
TITLE = "Privacy Policy - Electrical Training Institute"
DESCRIPTION = (
    "How the Electrical Training Institute collects, uses, shares and protects "
    "personal information submitted through etiedu.org."
)

# Every editable piece, in the order it appears. `body` is rich text, so an
# editor gets the formatting toolbar rather than a box full of tags.
INTRO = (
    "How the Electrical Training Institute collects, uses, shares and protects "
    "the information you give us through this website."
)

UPDATED = "Last updated 28 August 2026"

SECTIONS = [
    (
        "who-we-are",
        "Who we are",
        "<p>This website is operated by the Electrical Training Institute (ETI), the "
        "trade name of the San Diego Electrical Training Trust, which administers the "
        "apprenticeship programs of the San Diego Electrical Joint Apprenticeship and "
        "Training Committees (JATC).</p>"
        "<p>Our office is at 4675 Viewridge Avenue, San Diego, CA 92123. This policy "
        "covers the information collected through <strong>etiedu.org</strong>. It does "
        "not cover the separate systems we link to — TradeSchool, Moodle, the "
        "Learning Management System, the eBooks library or the ETI Store — each of "
        "which has its own operator and its own privacy terms.</p>",
    ),
    (
        "what-we-collect",
        "What we collect",
        "<p>The only form on this website is the <a href=\"/sign-up\">Get Started</a> "
        "form. When you complete it, we receive:</p>"
        "<ul class=\"uk-list uk-list-disc\">"
        "<li><strong>Who you are</strong> — first and last name, and your age range.</li>"
        "<li><strong>How to reach you</strong> — telephone number, email address, and "
        "street address, city, state and ZIP code.</li>"
        "<li><strong>What you are interested in</strong> — the program you are asking "
        "about, and how you heard about us.</li>"
        "<li><strong>Demographic information</strong> — gender and race or ethnicity, "
        "including anything you type into the &ldquo;self describe&rdquo; or &ldquo;other "
        "ethnicity&rdquo; boxes. Answering these is voluntary.</li>"
        "</ul>"
        "<p>We do not record your IP address or browser details alongside your answers, "
        "and we do not buy personal information about you from anyone else.</p>"
        "<p>Later in the application process — which happens off this website — the "
        "JATC also collects school transcripts, aptitude test results, interview notes, a "
        "driver&rsquo;s licence, a DD-214 where you are a veteran, and the result of a drug "
        "screen. Those are described in the "
        "<a href=\"/images/pdf/Rules-regs.pdf\" target=\"_blank\">Rules, Regulations and "
        "Guidelines</a>.</p>",
    ),
    (
        "why",
        "Why we collect it",
        "<ul class=\"uk-list uk-list-disc\">"
        "<li>To answer your enquiry and tell you about the program you asked about.</li>"
        "<li>To process and assess an application to a program.</li>"
        "<li>To meet the record-keeping and equal-opportunity obligations that apply to "
        "registered apprenticeship programs, principally 29 CFR part 30, which requires us "
        "to keep records identifiable by race, ethnicity, sex and disability status.</li>"
        "<li>To improve the programs and services we offer.</li>"
        "</ul>"
        "<p>We do not sell your personal information, and we do not share it with anyone "
        "for their own advertising.</p>",
    ),
    (
        "voluntary",
        "Information you do not have to give",
        "<p>Answering the questions about <strong>gender</strong> and <strong>race or "
        "ethnicity</strong> is voluntary. We ask because federal apprenticeship regulations "
        "require us to invite that information and to report on it in aggregate.</p>"
        "<p>Declining to answer will not affect your application, will not be held against "
        "you, and will not change how your enquiry is handled.</p>",
    ),
    (
        "sharing",
        "Who we share it with",
        "<p>We share personal information only where we need to:</p>"
        "<ul class=\"uk-list uk-list-disc\">"
        "<li><strong>The JATC and its administrators</strong>, who assess applications and "
        "administer the programs.</li>"
        "<li><strong>Government agencies with oversight of apprenticeship</strong> — the "
        "U.S. Department of Labor Office of Apprenticeship, and the applicable state "
        "Registration Agency (in California, the Division of Apprenticeship Standards). They "
        "may request our records, and we are required to provide them.</li>"
        "<li><strong>Service providers</strong> who host or maintain our systems, acting on "
        "our instructions.</li>"
        "<li><strong>Where the law requires it</strong> — for example in response to a "
        "subpoena or a lawful government request.</li>"
        "</ul>"
        "<p>Where you sign a release — for instance permitting Palomar College to send us "
        "your grades — we use that information only for the purpose stated in the "
        "release.</p>",
    ),
    (
        "retention",
        "How long we keep it",
        "<p>Applicant and apprenticeship records are kept for <strong>five years</strong>, as "
        "required of the JATC. Trust fund records are kept indefinitely.</p>"
        "<p>Enquiries sent through this website that do not become applications are kept only "
        "as long as needed to respond to them and to understand demand for our programs, and "
        "are then deleted.</p>",
    ),
    (
        "security",
        "How we protect it",
        "<p>Submissions from this website are stored in an access-controlled database. Only "
        "authorised ETI staff can read them, each with their own account. Paper and electronic "
        "records held by the JATC are kept at our administration office under the same "
        "restrictions.</p>"
        "<p>No method of transmission or storage is completely secure, and we cannot guarantee "
        "absolute security. If a breach affects your personal information we will notify you as "
        "the law requires.</p>",
    ),
    (
        "rights",
        "Your rights",
        "<p>If you live in California, the California Consumer Privacy Act gives you the right "
        "to:</p>"
        "<ul class=\"uk-list uk-list-disc\">"
        "<li>know what personal information we hold about you;</li>"
        "<li>receive a copy of it, or ask us to correct it if it is wrong;</li>"
        "<li>ask us to delete it, except where we are legally required to keep it — "
        "apprenticeship records we must retain are an example;</li>"
        "<li>not be treated differently for exercising any of these rights.</li>"
        "</ul>"
        "<p>We do not sell or share personal information as those terms are defined by the "
        "CCPA, so there is nothing for you to opt out of.</p>"
        "<p>To make a request, contact us using the details below. We will ask for enough "
        "information to confirm who you are before we act, and we will respond within the time "
        "the law allows.</p>",
    ),
    (
        "cookies",
        "Cookies and this website",
        "<p>This website uses only the cookies needed to make pages work. We do not use "
        "advertising cookies and we do not track you across other websites.</p>"
        "<p>Pages here embed video from YouTube and link to social media platforms. When a page "
        "loads an embedded video, or when you follow a link to Facebook, X, Instagram, YouTube, "
        "LinkedIn, Bluesky or Mastodon, that company may set its own cookies and receive data "
        "about your visit under its own privacy policy, which we do not control.</p>",
    ),
    (
        "children",
        "Children",
        "<p>This website is intended for people considering an apprenticeship or training "
        "program. Applicants must be at least 17 at the time of application. We do not knowingly "
        "collect personal information from children under 13. If you believe a child has given us "
        "personal information, contact us and we will delete it.</p>",
    ),
    (
        "changes",
        "Changes to this policy",
        "<p>We may update this policy from time to time. The date at the top of this page shows "
        "when it was last changed. Where a change materially affects how we handle information "
        "already collected, we will take reasonable steps to tell you.</p>",
    ),
    (
        "contact",
        "How to contact us",
        "<p>For any question about this policy, or to exercise the rights described above:</p>"
        "<p>Electrical Training Institute<br>4675 Viewridge Avenue<br>San Diego, CA 92123</p>"
        "<p>Telephone <a href=\"tel:8585696633\">(858) 569-6633</a><br>"
        "Email <a href=\"mailto:info@sdett.org\">info@sdett.org</a></p>"
        "<p>You can also use our <a href=\"/contact\">contact page</a>.</p>",
    ),
]


def _slot(key, kind, label, order, value):
    return {
        "key": key,
        "kind": kind,
        "label": label,
        "group": "Privacy Policy",
        "sort_order": order,
        "default_value": value,
        "alt_text": None,
    }


def slots():
    """Every editable field on the page, in reading order."""
    out = [
        _slot("pp.title.h1", "text", "Page heading", 0, "Privacy Policy"),
        _slot("pp.intro.p", "text", "Introduction", 1, INTRO),
        _slot("pp.updated.p", "text", "Last updated", 2, UPDATED),
    ]
    for i, (anchor, heading, body) in enumerate(SECTIONS):
        out.append(_slot("pp.%s.h2" % anchor, "text",
                         "%s — heading" % heading, 3 + i * 2, heading))
        out.append(_slot("pp.%s.body" % anchor, "richtext",
                         "%s — text" % heading, 4 + i * 2, body))
    return out


def page_tsx():
    """The route component, reading every string through the CMS."""
    sections = "\n".join(
        '''        <section id={%s} className="uk-margin-large-bottom">
          <h2 className="uk-h3">{c.t(%s, %s)}</h2>
          <div data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(%s, %s) }} />
        </section>
''' % (json.dumps(anchor),
       json.dumps("pp.%s.h2" % anchor), json.dumps(heading),
       json.dumps("pp.%s.body" % anchor), json.dumps(body))
        for anchor, heading, body in SECTIONS)

    contents = "\n".join(
        '              <li><a href={%s}>{c.t(%s, %s)}</a></li>'
        % (json.dumps("#" + anchor), json.dumps("pp.%s.h2" % anchor), json.dumps(heading))
        for anchor, heading, _ in SECTIONS)

    return '''import type { Metadata } from "next";
import { getContent, pageMetadata } from "@/lib/content";

// Written by tools/privacy_policy.py — edit the wording in the CMS, or the
// section list in that file.

const ROUTE = %s;

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(ROUTE, %s, %s);
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
            <p className="uk-text-lead">{c.t("pp.intro.p", %s)}</p>
            <p className="uk-text-meta">{c.t("pp.updated.p", %s)}</p>
          </header>

          <nav aria-label="On this page" className="uk-margin-large-bottom">
            <h2 className="uk-h5 uk-text-uppercase">On this page</h2>
            <ul className="uk-list uk-list-disc">
%s
            </ul>
          </nav>

%s        </div>
      </div>
    </main>
  );
}
''' % (json.dumps(ROUTE), json.dumps(TITLE), json.dumps(DESCRIPTION),
       json.dumps(INTRO), json.dumps(UPDATED), contents, sections)


def emit(app_dir, write):
    """Write page.tsx and hand back the seed entry."""
    write(os.path.join(app_dir, "privacy-policy", "page.tsx"), page_tsx())
    return {
        "route": ROUTE,
        "title": TITLE,
        "meta_description": DESCRIPTION,
        "section": "Other pages",
        "sort_order": 900,
        "slots": slots(),
    }
