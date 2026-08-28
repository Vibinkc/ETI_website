type Accessor = { t: (k: string, d: string) => string };

/**
 * The entry requirements every apprenticeship shares.
 *
 * All three application pages list the same eight, in the same order -- age,
 * schooling, the algebra requirement, a licence, transcripts. Each page keeps
 * its own CMS keys, so the wording can still be edited per programme; only the
 * fallback text lives here, once.
 */
export default function EntryRequirements({
  c,
  base,
}: {
  c: Accessor;
  /** CMS key prefix for the list on this page, e.g. "s.7.1.1.1.1.2.2" */
  base: string;
}) {
  return (
<ul>
<li>{c.t(`${base}.1.li`, "17 1/2 years old")}</li>
<li>{c.t(`${base}.3.li`, "High school diploma, GED, or CHSPE certificate")}</li>
<li>{c.t(`${base}.5.li`, "Official transcripts required as proof of completion")}</li>
<li>{c.t(`${base}.7.li`, "One year of high school algebra (two semesters), or")}</li>
<li>{c.t(`${base}.9.li`, "One semester of college algebra, or")}</li>
<li>{c.t(`${base}.11.li`, "Valid driver\u2019s license required")}</li>
<li>{c.t(`${base}.13.li`, "Official high school or GED transcripts")}</li>
<li>{c.t(`${base}.15.li`, "Official transcripts or a certificate verifying completion of the algebra requirement")}</li>
</ul>
  );
}
