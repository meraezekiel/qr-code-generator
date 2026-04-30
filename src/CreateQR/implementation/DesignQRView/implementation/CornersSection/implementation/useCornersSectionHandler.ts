import type { CornerDotStyleId, CornerFrameStyleId } from "./CornersSectionProps";

const FRAME_IDS: CornerFrameStyleId[] = [
  "none",
  "ring",
  "square",
  "square-thin",
  "square-rounded",
  "square-flat",
];

const DOT_IDS: CornerDotStyleId[] = [
  "none",
  "dot",
  "square",
  "square-bold",
  "square-rounded",
  "diamond",
  "square-thin",
  "block",
];

export function useCornersSectionHandler() {
  return { frameIds: FRAME_IDS, dotIds: DOT_IDS };
}
