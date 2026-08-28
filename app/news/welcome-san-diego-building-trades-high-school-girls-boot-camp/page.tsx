import { definePage, metadataFor } from "@/lib/page";
import NewsArticle from "@/components/NewsArticle";

const ROUTE = "/news/welcome-san-diego-building-trades-high-school-girls-boot-camp";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Welcome San Diego Building Trades High School Girls Boot Camp - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <NewsArticle
    c={c}
    route={ROUTE}
    image={{ src: "/images/news/news250625.jpg", alt: "Group of high school girls at Boot Camp posing for photo" }}
    title={"Welcome San Diego Building Trades High School Girls Boot Camp"}
    metaHtml={"<time datetime=\"2025-06-25T12:49:52-07:00\">June 25, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>"}
    paragraphs={[
      { text: "Huge thanks to IBEW Local 569 and the Electrical Training Institute staff for welcoming the San Diego Building Trades High School Girls Boot Camp with open arms! \ud83d\udca1\ud83d\udd27", after: " \u00a0" },
      { text: "Our students had an unforgettable day exploring the electrical trade \u2014 from wiring an outlet, light, and a switch to bending conduit and even building solar-powered cars from scratch! \u26a1\ud83d\ude97\u2600\ufe0f", after: " \u00a0" },
      { text: "We\u2019re so proud of our girls for stepping up with confidence and curiosity. Thank you for helping us spark inspiration and hands-on learning in the next generation! \ud83d\udcaa\ud83d\udc99", after: "\u00a0" },
    ]}
    pagination={[
      "<a href=\"/news/congratulations-veep-sd05-graduates\"><span uk-pagination-previous></span> Prev</a>",
      "<a href=\"/news/castle-park-high-school-visits-eti\">Next <span uk-pagination-next></span></a>",
    ]}
    pagerMargin
  />
));
