import type { Metadata } from "next";
import CloseOverlaysOnRouteChange from "@/components/CloseOverlaysOnRouteChange";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageShell from "@/components/PageShell";
import Preloader from "@/components/Preloader";
import { PRELOADER_CSS } from "@/components/preloaderCss";
import RichTextLinks from "@/components/RichTextLinks";
import SignUpForm from "@/components/SignUpForm";
import SiteScripts from "@/components/SiteScripts";
import { GLOBAL_ROUTE, getContentData } from "@/lib/content";
import "./globals.css";
import "./eti-3d-hero.css";

export const metadata: Metadata = {
  title: "Electrical Training Institute",
  description: "Electrical Training Institute of San Diego & Imperial Counties",
  icons: { icon: "/images/assets/eti-only-logo.svg" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // footer copy and contact details are CMS-managed global content
  const global = await getContentData(GLOBAL_ROUTE);

  return (
    <html lang="en-gb" dir="ltr">
      <body>
        {/* Inlined, not imported: a stylesheet is a request later than the HTML,
            and until it lands the cover is an unstyled div while the page behind
            it is already painted. See components/preloaderCss.ts. */}
        <style>{PRELOADER_CSS}</style>
        <link rel="stylesheet" href="/media/vendor/awesomplete/css/awesompletea714.css?1.1.7" precedence="default" />
        <link rel="stylesheet" href="/media/vendor/joomla-custom-elements/css/joomla-alert.mineeda.css?0.4.1" precedence="default" />
        <link rel="stylesheet" href="/media/system/css/joomla-fontawesome.min9de8.css?5.0.40" precedence="default" />
        <link rel="stylesheet" href="/templates/yootheme/css/theme.135933.css?1786724478" precedence="default" />
        <link rel="stylesheet" href="/templates/yootheme/css/theme.update9de8.css?5.0.40" precedence="default" />
        <link rel="stylesheet" href="/custom/eti-3d-hero.css" precedence="default" />

        {/* Covers the page from the first frame; removes itself once webfonts
            settle. Without script there is nothing to remove it, so it is
            hidden outright in that case. */}
        <noscript>
          <style>{".eti-preloader{display:none}"}</style>
        </noscript>
        <Preloader />

        <div className="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
          <div className="uk-notification-message">
            <a href="#tm-main" className="uk-link-reset">
              Skip to main content
            </a>
          </div>
        </div>

        <PageShell>
          <Header />
          {children}
          <Footer content={global} />
        </PageShell>

        {/* Joomla reads these option blocks out of the DOM. */}
        <script type="application/json"
          dangerouslySetInnerHTML={{ __html: "{\"joomla.jtext\":{\"JLIB_JS_AJAX_ERROR_OTHER\":\"An error has occurred while fetching the JSON data: HTTP %s status code.\",\"JLIB_JS_AJAX_ERROR_PARSE\":\"A parse error has occurred while processing the following JSON data:<br><code style=\\\"color:inherit;white-space:pre-wrap;padding:0;margin:0;border:0;background:inherit;\\\">%s<\\/code>\",\"ERROR\":\"Error\",\"MESSAGE\":\"Message\",\"NOTICE\":\"Notice\",\"WARNING\":\"Warning\",\"SUCCESS\":\"Success\",\"JCLOSE\":\"Close\",\"JOK\":\"OK\",\"JOPEN\":\"Open\"},\"finder-search\":{\"url\":\"\\/component\\/finder?task=suggestions.suggest&amp;format=json&amp;tmpl=component\"},\"system.paths\":{\"root\":\"\",\"rootFull\":\"https:\\/\\/etiedu.org\\/\",\"base\":\"\",\"baseFull\":\"https:\\/\\/etiedu.org\\/\"},\"csrf.token\":\"1e25f69cb010f8cef84cfeacc5b30734\"}" }}
        />
        <SiteScripts />
        <CloseOverlaysOnRouteChange />
        <RichTextLinks />
        <SignUpForm />
      </body>
    </html>
  );
}
