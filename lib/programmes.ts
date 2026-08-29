export type Programme = {
  /** the last part of the URL */
  slug: string;
  /** the <title>, verbatim as the old site had it */
  metaTitle: string;
  /** the programme's name -- the heading and the last breadcrumb */
  name: string;
  hero: { src: string; alt: string };
  /** the standfirst under the heading */
  lead: string;
};

/**
 * The apprenticeship programmes.
 *
 * Their landing pages were three files holding the same thirty-two lines with
 * a different name, photo and standfirst in each. One route serves them now
 * (app/applicants/[program]), so the differences live here as data.
 *
 * Every programme offers the same three sub-pages, so those links are built
 * from the slug rather than repeated per programme.
 */
export const PROGRAMMES: Programme[] = [
  {
    slug: "inside-wireman",
    metaTitle: "Inside Wireman - Electrical Training Institute",
    name: "Inside Wireman",
    hero: { src: "/images/assets/heros/hero-bm02.jpg", alt: "Electrician opening an electric panel." },
    lead: "The Inside Wireman Apprenticeship is a five-year training program that prepares individuals for careers as Journeyman electricians. Apprentices receive paid on-the-job training combined with classroom instruction, gaining the skills needed to install, maintain, and troubleshoot electrical systems in commercial and industrial settings.",
  },
  {
    slug: "sound-communication",
    metaTitle: "Sound & Communication - Electrical Training Institute",
    name: "Sound & Communication",
    hero: { src: "/images/assets/heros/hero-em01.jpg", alt: "Electrician working in an underground junction box." },
    lead: "The Sound & Communications Apprenticeship is a four-year program that prepares individuals for careers in the low-voltage and telecommunications industry. Apprentices gain hands-on experience installing and maintaining voice, data, and video systems while completing classroom training that builds the technical knowledge needed for long-term success in the field.",
  },
  {
    slug: "intelligent-transportation-systems",
    metaTitle: "Intelligent Transportation Systems - Electrical Training Institute",
    name: "Intelligent Transportation Systems",
    hero: { src: "/images/assets/heros/hero-bm03.jpg", alt: "Electrician Trainee working a backhoe" },
    lead: "Build the systems that keep cities moving. The ITS Apprenticeship combines paid, hands-on training with classroom instruction, preparing you to work on traffic signals, fiber optics, and critical transportation infrastructure that supports safe and efficient travel.",
  },
];

export const programmeBySlug = (slug: string) =>
  PROGRAMMES.find((p) => p.slug === slug);

/** The sub-pages every programme has, in the order the tiles show them. */
export const PROGRAMME_SECTIONS = [
  { path: "program-overview-and-curriculum", title: "Program Overview and Curriculum" },
  { path: "application-requirements-and-process", title: "Application Requirements and Process" },
  { path: "faq", title: "FAQ" },
];
