import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SectionHero from "@/components/SectionHero";
import ReadyCta from "@/components/ReadyCta";
import SectionLinkCards from "@/components/SectionLinkCards";
import { definePage, metadataFor } from "@/lib/page";
import { PROGRAMMES, PROGRAMME_SECTIONS, programmeBySlug } from "@/lib/programmes";

// re-rendered on demand when the CMS publishes one of these
export const revalidate = 3600;

/** Keeps every programme prerendered, exactly as the separate files were. */
export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ program: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ program: string }> },
): Promise<Metadata> {
  const { program } = await params;
  const programme = programmeBySlug(program);
  if (!programme) return {};
  return metadataFor(`/applicants/${program}`, programme.metaTitle)();
}

export default async function Page(
  { params }: { params: Promise<{ program: string }> },
) {
  const { program } = await params;
  const programme = programmeBySlug(program);
  if (!programme) notFound();

  const route = `/applicants/${program}`;
  return definePage(route, (c) => (
    <>
<style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0 .el-title{display: flex; align-items: center; justify-content: center; /* optional for horizontal center */ height: 100%;}#page\\#1 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={programme.hero} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }]} current={programme.name} title={programme.name} lead={programme.lead} />
<SectionLinkCards c={c} cards={PROGRAMME_SECTIONS.map((s) => ({ href: `${route}/${s.path}`, title: s.title, }))} />
<ReadyCta c={c} section="s.9" panelId={1} />
    </>
  ))();
}
