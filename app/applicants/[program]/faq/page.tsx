import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PROGRAMME_FAQS } from "@/components/applicants/ProgrammeFaqs";
import FaqSection from "@/components/FaqSection";
import ReadyCta from "@/components/ReadyCta";
import SectionHero from "@/components/SectionHero";
import { definePage, metadataFor } from "@/lib/page";
import { PROGRAMMES, programmeBySlug } from "@/lib/programmes";

// re-rendered on demand when the CMS publishes one of these
export const revalidate = 3600;

/** Keeps every programme's FAQ prerendered, as the separate files were. */
export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ program: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ program: string }> },
): Promise<Metadata> {
  const { program } = await params;
  if (!PROGRAMME_FAQS[program]) return {};
  return metadataFor(`/applicants/${program}/faq`, "FAQ - Electrical Training Institute")();
}

export default async function Page(
  { params }: { params: Promise<{ program: string }> },
) {
  const { program } = await params;
  const programme = programmeBySlug(program);
  const faq = PROGRAMME_FAQS[program];
  if (!programme || !faq) notFound();

  const route = `/applicants/${program}/faq`;
  return definePage(route, (c) => (
    <>
<style className="uk-margin-remove-adjacent" dangerouslySetInnerHTML={{ __html: "#page\\#0{margin-top:7%;}#page\\#1{margin-bottom:40px;}#page\\#1 .el-item{border-bottom: 1.5px dotted #7b7a7a; padding-bottom: 7px}#page\\#1 .el-content{margin-bottom:20px;}#page\\#1 .el-content ul{list-style-type: none;padding-left: 10px;}#page\\#2{background-color:#EBECE9;}#page\\#3{background-image:url(\"/images/assets/diagram.png\");background-repeat:repeat;}@media (max-width:900px){#page\\#3{background-image:none;}}#page\\#4 .el-content{font-weight:bold;font-size:105%;}" }} />
<SectionHero c={c} hero={faq.hero} crumbs={[{ href: "/", html: "<span property=\"name\">Home</span>" }, { href: "/applicants", html: "<span property=\"name\">Applicants</span>" }, { href: `/applicants/${program}`, html: `<span property="name">${programme.name}</span>` }]} current="FAQ" title="Frequently Asked Questions" leadHtml={faq.leadHtml} />
<FaqSection c={c} headingKey={faq.headingKey} headingTag={faq.headingTag}>
{faq.items(c)}
</FaqSection>
<ReadyCta c={c} section="s.9" panelId={4} />
    </>
  ))();
}
