import type { PatternStyleId } from "./PatternSectionProps";

const PATTERN_IDS: PatternStyleId[] = [
  "classic",
  "rounded",
  "dots",
  "diagonal",
  "sparse",
  "fine",
];

export function usePatternSectionHandler() {
  return { patternIds: PATTERN_IDS };
}
