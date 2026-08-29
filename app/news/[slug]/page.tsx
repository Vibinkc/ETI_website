import type { Metadata } from "next";
import { notFound } from "next/navigation";

import NewsArticle from "@/components/NewsArticle";
import { definePage, metadataFor } from "@/lib/page";
import { NEWS_ARTICLES, newsArticleBySlug } from "@/lib/news";

// re-rendered on demand when the CMS publishes one of these
export const revalidate = 3600;

/** Keeps every article prerendered, exactly as the separate files were. */
export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticleBySlug(slug);
  if (!article) return {};
  return metadataFor(`/news/${slug}`, article.metaTitle)();
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const article = newsArticleBySlug(slug);
  if (!article) notFound();

  const route = `/news/${slug}`;
  return definePage(route, (c) => (
    <NewsArticle
      c={c}
      route={route}
      image={article.image}
      title={article.title}
      metaHtml={article.metaHtml}
      paragraphs={article.paragraphs}
      pagination={article.pagination}
      pagerMargin={article.pagerMargin}
    />
  ))();
}
