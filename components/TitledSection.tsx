import type { ReactNode } from "react";

type Accessor = { t: (k: string, d: string) => string };

/**
 * A band of the page introduced by an `elHead` heading.
 *
 * Ten of these are scattered through the site -- Application Requirements,
 * How to Apply, Program Overview, the resources index and so on. Each one was
 * six nested UIkit wrappers, the heading, then the content, then five closing
 * tags; only the section's own spacing classes and the heading ever changed.
 *
 * The content is the children. Everything else is here, with the classes that
 * vary as props defaulting to the values most pages use.
 */
export default function TitledSection({
  c,
  headingKey,
  heading,
  children,
  section = "uk-section-default uk-section",
  container = "uk-container uk-container-small",
  panel = "uk-panel uk-margin-bottom",
  width = "uk-width-1-1",
  card,
  headingTag = "h2",
  sectionId,
  panelId,
}: {
  c: Accessor;
  /** CMS key for the heading */
  headingKey: string;
  heading: string;
  children: ReactNode;
  /** the band's own spacing classes */
  section?: string;
  container?: string;
  /** spacing on the panel that holds the heading */
  panel?: string;
  width?: string;
  /** a few bands wrap their content in a card as well */
  card?: string;
  headingTag?: "h1" | "h2";
  /** original UIkit ids, kept because page CSS selects on them */
  sectionId?: string;
  panelId?: string;
}) {
  const Heading = headingTag;
  const inner = (
    <>
      <div className={panel} id={panelId}><div>
        <Heading className="elHead">{c.t(headingKey, heading)}</Heading>
      </div></div>{children}
    </>
  );
  return (
    <div className={section} id={sectionId}>
      <div className={container}>
        <div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1">
          <div className={width}>
            {card ? <div className={card}>{inner}</div> : inner}
          </div>
        </div>
      </div>
    </div>
  );
}
