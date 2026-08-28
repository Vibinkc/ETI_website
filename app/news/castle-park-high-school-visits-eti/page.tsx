import { definePage, metadataFor } from "@/lib/page";
import NewsArticle from "@/components/NewsArticle";

const ROUTE = "/news/castle-park-high-school-visits-eti";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Castle Park High School Visits ETI  - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <NewsArticle
    c={c}
    route={ROUTE}
    image={{ src: "/images/news/news250312.jpg", alt: "High school girl gives the thumb's up at ETI" }}
    title={"Castle Park High School Visits ETI"}
    metaHtml={"<time datetime=\"2025-03-12T11:44:50-07:00\">March 12, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>"}
    paragraphs={[
      { text: "Thank you Castle Park High School for visiting ETI and learning about the amazing benefits an IBEW and NECA apprenticeship has to offer!" },
      { text: "Hope to see you all again!" },
    ]}
    pagination={[
      "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\"><span uk-pagination-previous></span> Prev</a>",
    ]}
  />
));
