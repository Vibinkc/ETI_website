import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits .next/standalone: a self-contained server with only the packages it
  // actually imports, so the runtime image needs no node_modules copy.
  output: "standalone",

  // The dev server serves /_next/* only to origins it trusts, and out of the
  // box that means "localhost" alone. The CMS links to the site by IP, so
  // opening it from there was refused every script the page needed: nothing
  // hydrated and the preloader sat there with no client code to dismiss it.
  // Development only -- a built site serves its assets to anyone.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
