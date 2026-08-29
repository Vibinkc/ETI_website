import Breadcrumb, { type Crumb } from "@/components/Breadcrumb";
import HeroHeading from "@/components/HeroHeading";
import PageHero from "@/components/PageHero";

type Accessor = {
  t: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
  m: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

/**
 * The banner nineteen pages open with: photo, breadcrumb, heading, standfirst.
 *
 * Those four elements were written out on every one of those pages, always in
 * the same order and always addressing the CMS by the same four keys -- which
 * all hang off the section number the banner sits at. So the section number is
 * the prop, and the keys follow from it.
 *
 * The handful of pages that size the photo differently or restyle the card
 * pass those through to PageHero.
 */
export default function SectionHero({
  c,
  hero,
  crumbs,
  current,
  title,
  lead,
  leadHtml,
  section = "s.5",
  width = "1200",
  height = "1200",
  aspectAuto = true,
  lazy,
  leftWidth,
  leftCardClass,
  rightWidth,
  rightCardClass,
  imageWrapClass,
}: {
  c: Accessor;
  hero: { src: string; alt: string };
  /** every step before this page, outermost first */
  crumbs: Crumb[];
  /** this page's own label, for the trail */
  current: string;
  title: string;
  /** plain-text standfirst */
  lead?: string;
  /** standfirst that carries its own markup */
  leadHtml?: string;
  /** which CMS section the banner sits at, e.g. "s.5" */
  section?: string;
  width?: string;
  height?: string;
  aspectAuto?: boolean;
  lazy?: boolean;
  leftWidth?: string;
  leftCardClass?: string;
  rightWidth?: string;
  rightCardClass?: string;
  imageWrapClass?: string;
}) {
  return (
<PageHero
  c={c}
  image={{ imgKey: `${section}.1.3.1.1.1.0.img`, src: hero.src, alt: hero.alt,
           width, height, aspectAuto, lazy }}
  leftWidth={leftWidth}
  leftCardClass={leftCardClass}
  rightWidth={rightWidth}
  rightCardClass={rightCardClass}
  imageWrapClass={imageWrapClass}
>
<Breadcrumb c={c} keyBase={`${section}.1.1.1.1.1`} links={crumbs} current={current} />
<HeroHeading
  c={c}
  titleKey={`${section}.1.1.1.3.h1`}
  title={title}
  leadKey={`${section}.1.1.1.4.div`}
  lead={lead}
  leadHtml={leadHtml}
/>
</PageHero>
  );
}
