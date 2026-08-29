import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { definePage, metadataFor } from "@/lib/page";
import { PROGRAMMES } from "@/lib/programmes";

type Accessor = {
  t: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
  m: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

export type ProgrammeBodies = Record<string, (c: Accessor) => ReactNode>;

/**
 * Builds the exports for a page every apprenticeship has a version of.
 *
 * Program Overview and Application Requirements are the same route three
 * times over: look up the programme, render its body, prerender all three.
 * Only the URL segment, the title and the bodies differ, so a route file is
 * those three things and nothing else.
 */
export function programmePage(
  segment: string,
  metaTitle: string,
  bodies: ProgrammeBodies,
) {
  const routeFor = (program: string) => `/applicants/${program}/${segment}`;

  return {
    /** Keeps every programme prerendered, as the separate files were. */
    generateStaticParams: () => PROGRAMMES.map((p) => ({ program: p.slug })),

    generateMetadata: async (
      { params }: { params: Promise<{ program: string }> },
    ): Promise<Metadata> => {
      const { program } = await params;
      if (!bodies[program]) return {};
      return metadataFor(routeFor(program), metaTitle)();
    },

    Page: async ({ params }: { params: Promise<{ program: string }> }) => {
      const { program } = await params;
      const body = bodies[program];
      if (!body) notFound();
      return definePage(routeFor(program), (c) => <>{body(c)}</>)();
    },
  };
}
