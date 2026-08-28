import { definePage, metadataFor } from "@/lib/page";
import NewsArticle from "@/components/NewsArticle";

const ROUTE = "/news/congratulations-veep-sd05-graduates";

// re-rendered on demand when the CMS publishes this page
export const revalidate = 3600;

export const generateMetadata = metadataFor(ROUTE, "Congratulations VEEP SD05 Graduates - Electrical Training Institute", undefined);

export default definePage(ROUTE, (c) => (
  <NewsArticle
    c={c}
    route={ROUTE}
    image={{ src: "/images/news/news251120.jpg", alt: "Group of VEEP graduates standing together for a photo." }}
    title={"Congratulations VEEP SD05 Graduates"}
    metaHtml={"<time datetime=\"2025-11-20T11:49:52-08:00\">November 20, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>"}
    paragraphs={[
      { text: "11 Graduates from the Veteran's Electrical Entry Program (VEEP) will begin their careers as Inside Wireman Apprentices at JATC's around the United States! A couple chose to stay here in San Diego to finish their apprenticeship and others were placed around the country!" },
      { text: "Congratulations finishing your training here in sunny San Diego! You chose an amazing career! This is just the beginning!" },
    ]}
    pagination={[
      "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Next <span uk-pagination-next></span></a>",
    ]}
  />
));
