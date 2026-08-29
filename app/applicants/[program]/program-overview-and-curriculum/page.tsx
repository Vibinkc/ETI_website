import { PROGRAMME_OVERVIEWS } from "@/components/applicants/bodies";
import { programmePage } from "@/lib/programme-page";

const page = programmePage(
  "program-overview-and-curriculum",
  "Program Overview and Curriculum - Electrical Training Institute",
  PROGRAMME_OVERVIEWS,
);

// re-rendered on demand when the CMS publishes one of these
export const revalidate = 3600;

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
