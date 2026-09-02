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

  // Next advertises itself in X-Powered-By by default. It tells an attacker
  // what stack to look up known issues for and does nothing for a visitor.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Without this a browser may sniff a response as a type other than
          // the one declared, which is how a stray upload becomes script.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrers stay useful within the site but reveal only the origin
          // once they leave it.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Nothing here uses a camera, a microphone or a location.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
