import type { ProgrammeBody } from "@/components/applicants/types";

import applicationInsideWireman from "@/components/applicants/application/inside-wireman";
import applicationIts from "@/components/applicants/application/intelligent-transportation-systems";
import applicationSoundCommunication from "@/components/applicants/application/sound-communication";
import overviewInsideWireman from "@/components/applicants/overview/inside-wireman";
import overviewIts from "@/components/applicants/overview/intelligent-transportation-systems";
import overviewSoundCommunication from "@/components/applicants/overview/sound-communication";

/**
 * Which body belongs to which apprenticeship, for the two pages whose route
 * is nothing but a lookup. Keeping both maps in one file stops the two index
 * files being copies of each other.
 */
export const PROGRAMME_OVERVIEWS: Record<string, ProgrammeBody> = {
  "inside-wireman": overviewInsideWireman,
  "sound-communication": overviewSoundCommunication,
  "intelligent-transportation-systems": overviewIts,
};

export const PROGRAMME_APPLICATIONS: Record<string, ProgrammeBody> = {
  "inside-wireman": applicationInsideWireman,
  "sound-communication": applicationSoundCommunication,
  "intelligent-transportation-systems": applicationIts,
};
