type Accessor = {
  t: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

/**
 * The heading and standfirst inside a page hero.
 *
 * Twenty-one pages open with exactly this pair. Most set the standfirst as
 * plain text; the FAQ pages hold markup in theirs and so render it as rich
 * content instead. Pass `lead` for the first, `leadHtml` for the second.
 */
export default function HeroHeading({
  c,
  titleKey,
  title,
  leadKey,
  lead,
  leadHtml,
  className = "uk-heading-medium uk-margin-large-bottom",
}: {
  c: Accessor;
  titleKey: string;
  title: string;
  leadKey: string;
  /** plain-text standfirst */
  lead?: string;
  /** standfirst that carries its own markup */
  leadHtml?: string;
  className?: string;
}) {
  return (
    <>
<h1 className={className}>
                    {c.t(titleKey, title)}
</h1>{leadHtml === undefined ? (
<div className="uk-panel uk-text-lead uk-margin uk-width-xlarge">{c.t(leadKey, lead as string)}</div>
) : (
<div className="uk-panel uk-text-lead uk-margin uk-width-xlarge" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(leadKey, leadHtml) }} />
)}
    </>
  );
}
