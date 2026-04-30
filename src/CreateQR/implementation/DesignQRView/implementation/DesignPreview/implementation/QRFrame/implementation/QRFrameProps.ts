import type { ReactNode } from "react";
import type { FrameStyleId } from "../../../../FrameSection/implementation/FrameSectionProps";

export type QRFrameProps = {
  frameStyle: FrameStyleId;
  text?: string;
  children: ReactNode;
};
