/**
 * The red "Are you Ready?" call to action.
 *
 * This band closes sixteen pages -- every applicant, trainee and about page.
 * It was copied into each of them; the only thing that ever differed was the
 * panel's id, so that is the one prop besides the section number the CMS
 * addresses this block by.
 *
 * The markup is the original UIkit output, unchanged.
 */
export default function ReadyCta({
  c,
  section,
  panelId,
}: {
  /** the page's content accessor, from getContent() */
  c: { t: (k: string, d: string) => string; r: (k: string, d: string) => string };
  /** which CMS section this band is on the page, e.g. "s.9" */
  section: string;
  /** the original UIkit panel id suffix */
  panelId: number;
}) {
  return (
<div className="uk-section-primary uk-section">
<div className="uk-grid-margin uk-container uk-container-small">
        <div className="uk-grid tm-grid-expand" {...{ "uk-grid": "" }}>    
<div className="uk-width-3-5@m">
<h1 className="uk-text-left@m uk-text-center">
                    {c.t(`${section}.1.1.1.1.h1`, "Are you Ready?")}        
</h1><div className="uk-panel uk-text-lead uk-position-relative uk-margin uk-text-left@m uk-text-center" style={{ left: "3px", top: "-6px" }} data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${section}.1.1.1.2.div`, "Take the next step to the <br class=\"uk-hidden@s\">rest of your life.") }} />
</div>
<div className="uk-grid-item-match uk-flex-middle uk-width-2-5@m">
                        <div className="uk-panel uk-width-1-1">            
<div id={`page#${panelId}`} className="uk-margin uk-text-right@m uk-text-center" data-cms-rich="" dangerouslySetInnerHTML={{ __html: c.r(`${section}.1.1.3.1.1.div`, "<a class=\"el-content uk-button uk-button-danger uk-button-large\" title=\"Tap here to get started.\" href=\"/applicants\">\n    \n        <span class=\"uk-visible@s\">Flip the Switch:</span> Get Started    \n    \n</a>") }} />
                        </div>            
</div>
        </div>    
</div>
</div>
  );
}
