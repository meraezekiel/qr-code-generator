import { useMemo } from "react";
import type { FrameStyleId } from "../../FrameSection/implementation/FrameSectionProps";
import { getFrameConfig, type FrameConfig } from "./Frame";

export function useFrameHandler(frameId: FrameStyleId): FrameConfig {
  return useMemo(() => getFrameConfig(frameId), [frameId]);
}
