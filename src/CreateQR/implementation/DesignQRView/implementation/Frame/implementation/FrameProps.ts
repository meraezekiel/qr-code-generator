import type { ReactNode } from "react";
import type { FrameStyleId } from "../../FrameSection/implementation/FrameSectionProps";

export type FrameProps = {
  frameId: FrameStyleId;
  children: ReactNode;
  text?: string;
};
