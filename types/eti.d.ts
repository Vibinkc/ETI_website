import "react";

/**
 * Type surface for the markup the original Joomla/YOOtheme site emits.
 *
 * React renders unknown attributes to the DOM verbatim, so these all work at
 * runtime; the declarations below just teach TypeScript about them. React 19
 * keeps the JSX namespace under `react`, so both augmentations live there.
 */
declare module "react" {
  // T is unused here but the arity has to match React's own declaration.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    /** UIkit shorthand options (`uk-drop`, `uk-offcanvas`, `uk-dropdown`, …) */
    mode?: string;
    pos?: string;
    stretch?: string;
    flip?: string;
    offset?: string;
    animation?: string;
    boundary?: string;
    container?: string;
  }

  namespace JSX {
    interface IntrinsicElements {
      /**
       * Joomla's obfuscated-email custom element. Defined at runtime by
       * /media/system/js/joomla-hidden-mail.min4f8c.js, which decodes the
       * base64 `first`/`last` parts back into a mailto link.
       */
      "joomla-hidden-mail": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "is-link"?: string;
        "is-email"?: string;
        first?: string;
        last?: string;
        text?: string;
        base?: string;
      };
    }
  }
}
