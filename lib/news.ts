import type { NewsParagraph } from "@/components/NewsArticle";

export type NewsArticleData = {
  /** the last part of the URL */
  slug: string;
  /** the <title>, verbatim as the old site had it */
  metaTitle: string;
  image: { src: string; alt: string };
  title: string;
  /** the dateline, which carries its own markup */
  metaHtml: string;
  paragraphs: NewsParagraph[];
  /** Prev/Next links, as the markup the original emitted */
  pagination: string[];
  /** one article's pager carries UIkit's uk-margin attribute */
  pagerMargin?: boolean;
};

/**
 * Every news article.
 *
 * The three articles were three route folders holding the same twenty-six
 * lines with different words in them -- which is duplication however you
 * count it. They are one route now (app/news/[slug]) reading from here, so
 * adding an article means adding an entry, not copying a file.
 */
export const NEWS_ARTICLES: NewsArticleData[] = [
  {
    slug: "castle-park-high-school-visits-eti",
    metaTitle: "Castle Park High School Visits ETI  - Electrical Training Institute",
    image: { src: "/images/news/news250312.jpg", alt: "High school girl gives the thumb's up at ETI" },
    title: "Castle Park High School Visits ETI",
    metaHtml: "<time datetime=\"2025-03-12T11:44:50-07:00\">March 12, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>",
    paragraphs: [
      { text: "Thank you Castle Park High School for visiting ETI and learning about the amazing benefits an IBEW and NECA apprenticeship has to offer!" },
      { text: "Hope to see you all again!" },
    ],
    pagination: [
      "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\"><span uk-pagination-previous></span> Prev</a>",
    ],
  },
  {
    slug: "congratulations-veep-sd05-graduates",
    metaTitle: "Congratulations VEEP SD05 Graduates - Electrical Training Institute",
    image: { src: "/images/news/news251120.jpg", alt: "Group of VEEP graduates standing together for a photo." },
    title: "Congratulations VEEP SD05 Graduates",
    metaHtml: "<time datetime=\"2025-11-20T11:49:52-08:00\">November 20, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>",
    paragraphs: [
      { text: "11 Graduates from the Veteran's Electrical Entry Program (VEEP) will begin their careers as Inside Wireman Apprentices at JATC's around the United States! A couple chose to stay here in San Diego to finish their apprenticeship and others were placed around the country!" },
      { text: "Congratulations finishing your training here in sunny San Diego! You chose an amazing career! This is just the beginning!" },
    ],
    pagination: [
      "<a href=\"/news/welcome-san-diego-building-trades-high-school-girls-boot-camp\">Next <span uk-pagination-next></span></a>",
    ],
  },
  {
    slug: "welcome-san-diego-building-trades-high-school-girls-boot-camp",
    metaTitle: "Welcome San Diego Building Trades High School Girls Boot Camp - Electrical Training Institute",
    image: { src: "/images/news/news250625.jpg", alt: "Group of high school girls at Boot Camp posing for photo" },
    title: "Welcome San Diego Building Trades High School Girls Boot Camp",
    metaHtml: "<time datetime=\"2025-06-25T12:49:52-07:00\">June 25, 2025</time> &nbsp; | &nbsp; <a href=\"/news\">News</a>",
    paragraphs: [
      { text: "Huge thanks to IBEW Local 569 and the Electrical Training Institute staff for welcoming the San Diego Building Trades High School Girls Boot Camp with open arms! \ud83d\udca1\ud83d\udd27", after: " \u00a0" },
      { text: "Our students had an unforgettable day exploring the electrical trade \u2014 from wiring an outlet, light, and a switch to bending conduit and even building solar-powered cars from scratch! \u26a1\ud83d\ude97\u2600\ufe0f", after: " \u00a0" },
      { text: "We\u2019re so proud of our girls for stepping up with confidence and curiosity. Thank you for helping us spark inspiration and hands-on learning in the next generation! \ud83d\udcaa\ud83d\udc99", after: "\u00a0" },
    ],
    pagination: [
      "<a href=\"/news/congratulations-veep-sd05-graduates\"><span uk-pagination-previous></span> Prev</a>",
      "<a href=\"/news/castle-park-high-school-visits-eti\">Next <span uk-pagination-next></span></a>",
    ],
    pagerMargin: true,
  },
];

export const newsArticleBySlug = (slug: string) =>
  NEWS_ARTICLES.find((a) => a.slug === slug);
