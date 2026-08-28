import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored UIkit / YOOtheme / Joomla runtime, served verbatim.
    "public/**",
  ]),
  {
    // Generated pages only. A CMS rich-text field is injected as HTML, so the
    // links inside it are plain <a> elements that next/link cannot wrap —
    // breadcrumbs are the common case. components/RichTextLinks.tsx delegates
    // their clicks to the router, so these navigate client-side; the rule
    // cannot see that and reports every one of them.
    files: ["app/**/page.tsx"],
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
]);

export default eslintConfig;
