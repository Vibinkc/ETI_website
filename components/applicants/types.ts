import type { ReactNode } from "react";

export type Accessor = {
  t: (k: string, d: string) => string;
  a: (k: string, d: string) => string;
  m: (k: string, d: string) => string;
  r: (k: string, d: string) => string;
};

export type ProgrammeBody = (c: Accessor) => ReactNode;
