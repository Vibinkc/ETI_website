import type { ProgrammeBody } from "@/components/applicants/types";

import InsideWireman from "@/components/applicants/faq/inside-wireman";
import SoundCommunication from "@/components/applicants/faq/sound-communication";
import IntelligentTransportationSystems from "@/components/applicants/faq/intelligent-transportation-systems";

export type ProgrammeFaq = {
  hero: { src: string; alt: string };
  /** the standfirst, which carries its own markup */
  leadHtml: string;
  /** CMS key for the accordion band's heading */
  headingKey: string;
  /** one programme heads its band with an h2 */
  headingTag?: "h1" | "h2";
  /** the questions themselves */
  items: ProgrammeBody;
};

/** Each apprenticeship's FAQ. */
export const PROGRAMME_FAQS: Record<string, ProgrammeFaq> = {
  "inside-wireman": {
    hero: { src: "/images/assets/heros/et-Program-Overview.jpg", alt: "Electrician Trainee on a jobsite carring a cable." },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h2",
    headingTag: "h2",
    items: InsideWireman,
  },
  "sound-communication": {
    hero: { src: "/images/assets/heros/hero-g08.jpg", alt: "An Electrician and Trainee working on the jobsite." },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h1",
    items: SoundCommunication,
  },
  "intelligent-transportation-systems": {
    hero: { src: "/images/assets/heros/hero-g06.jpg", alt: "Instructor explaining cable connections to a femail Electrician Trainee in class" },
    leadHtml: "This is where you will find most answers. If there should still be any questions left, don't hesitate to <a href=\"/contact\" title=\"Click here to contact us.\">contact us</a>.",
    headingKey: "s.7.1.1.1.1.1.0.1.h1",
    items: IntelligentTransportationSystems,
  },
};
