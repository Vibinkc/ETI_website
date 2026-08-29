import { PROGRAMME_APPLICATIONS } from "@/components/applicants/ProgrammeApplications";
import { programmePage } from "@/lib/programme-page";

const page = programmePage(
  "application-requirements-and-process",
  "Application Requirements and Process - Electrical Training Institute",
  PROGRAMME_APPLICATIONS,
);

// re-rendered on demand when the CMS publishes one of these
export const revalidate = 3600;

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
