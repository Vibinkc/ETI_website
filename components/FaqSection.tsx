import type { ReactNode } from "react";

type Accessor = { t: (k: string, d: string) => string };

/**
 * The band that holds a page's FAQ accordion.
 *
 * All five FAQ pages wrap their questions in the same nest of containers under
 * the same "General Information" heading -- right down to the UIkit element
 * ids, which the pages' own CSS selects on. Only the questions differ, so they
 * come in as children.
 *
 * One page heads the band with an h2 rather than an h1; that is `headingTag`,
 * and it is part of the CMS key too.
 */
export default function FaqSection({
  c,
  children,
  headingTag = "h1",
  heading = "General Information",
  headingKey,
  sectionId = "page#3",
  containerId = "page#2",
  headingId = "page#0",
  accordionId = "page#1",
}: {
  c: Accessor;
  children: ReactNode;
  headingTag?: "h1" | "h2";
  heading?: string;
  /** CMS key for the band's heading */
  headingKey: string;
  /** the original UIkit ids, kept because page CSS targets them */
  sectionId?: string;
  containerId?: string;
  headingId?: string;
  accordionId?: string;
}) {
  const Heading = headingTag;
  return (
<div id={sectionId} className="uk-section-default uk-section">

                                <div className="uk-container">

<div className="uk-grid-margin uk-container uk-container-small" id={containerId}>
        <div className="uk-grid tm-grid-expand uk-child-width-1-1">

<div className="uk-width-1-1">

                    <div className="uk-panel uk-text-lead uk-margin-bottom" id={headingId}><div>
<Heading className="elHead">{c.t(headingKey, heading)}</Heading>
</div></div>
<div className="uk-accordion-default uk-margin-remove-top uk-width-2xlarge uk-margin-auto" uk-accordion="collapsible: true;" id={accordionId}>
{children}
</div>

</div>
        </div>
</div>
                                </div>

</div>
  );
}
