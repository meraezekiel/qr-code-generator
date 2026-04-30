import { useState } from "react";
import type {
  CornerDotStyleId,
  CornerFrameStyleId,
} from "./CornersSection/implementation/CornersSectionProps";
import type { FrameStyleId } from "./FrameSection/implementation/FrameSectionProps";
import type { PatternStyleId } from "./PatternSection/implementation/PatternSectionProps";

export type GradientStyle = "linear" | "radial";

export type DesignState = {
  frameStyle: FrameStyleId;
  patternStyle: PatternStyleId;
  patternColor: string;
  patternColor2: string;
  patternGradient: boolean;
  patternGradientStyle: GradientStyle;
  backgroundColor: string;
  backgroundColor2: string;
  backgroundGradient: boolean;
  backgroundGradientStyle: GradientStyle;
  backgroundTransparent: boolean;
  cornerFrameStyle: CornerFrameStyleId;
  cornerDotStyle: CornerDotStyleId;
  cornerFrameColor: string;
  cornerDotColor: string;
  logoDataUrl: string | null;
};

type SectionId = "frame" | "pattern" | "corners" | "logo";

const INITIAL: DesignState = {
  frameStyle: "none",
  patternStyle: "classic",
  patternColor: "#000000",
  patternColor2: "#3B6BDB",
  patternGradient: false,
  patternGradientStyle: "linear",
  backgroundColor: "#FFFFFF",
  backgroundColor2: "#E2E8F0",
  backgroundGradient: false,
  backgroundGradientStyle: "linear",
  backgroundTransparent: false,
  cornerFrameStyle: "none",
  cornerDotStyle: "none",
  cornerFrameColor: "#000000",
  cornerDotColor: "#000000",
  logoDataUrl: null,
};

export function useDesignQRViewHandler() {
  const [design, setDesign] = useState<DesignState>(INITIAL);
  const [openSections, setOpenSections] = useState<Set<SectionId>>(
    () => new Set<SectionId>(["frame", "pattern", "corners", "logo"]),
  );

  const update = <K extends keyof DesignState>(key: K, value: DesignState[K]) =>
    setDesign((prev) => ({ ...prev, [key]: value }));

  const isOpen = (id: SectionId) => openSections.has(id);
  const toggle = (id: SectionId) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const swapColors = () =>
    setDesign((prev) => ({
      ...prev,
      patternColor: prev.backgroundColor,
      patternColor2: prev.backgroundColor2,
      backgroundColor: prev.patternColor,
      backgroundColor2: prev.patternColor2,
    }));

  return {
    design,
    isOpen,
    toggle,
    swapColors,
    setFrameStyle: (next: FrameStyleId) => update("frameStyle", next),
    setPatternStyle: (next: PatternStyleId) => update("patternStyle", next),
    setPatternColor: (next: string) => update("patternColor", next),
    setPatternColor2: (next: string) => update("patternColor2", next),
    setPatternGradient: (next: boolean) => update("patternGradient", next),
    setPatternGradientStyle: (next: GradientStyle) =>
      update("patternGradientStyle", next),
    setBackgroundColor: (next: string) => update("backgroundColor", next),
    setBackgroundColor2: (next: string) => update("backgroundColor2", next),
    setBackgroundGradient: (next: boolean) => update("backgroundGradient", next),
    setBackgroundGradientStyle: (next: GradientStyle) =>
      update("backgroundGradientStyle", next),
    setBackgroundTransparent: (next: boolean) =>
      update("backgroundTransparent", next),
    setCornerFrameStyle: (next: CornerFrameStyleId) =>
      update("cornerFrameStyle", next),
    setCornerDotStyle: (next: CornerDotStyleId) => update("cornerDotStyle", next),
    setCornerFrameColor: (next: string) => update("cornerFrameColor", next),
    setCornerDotColor: (next: string) => update("cornerDotColor", next),
    setLogoDataUrl: (next: string | null) => update("logoDataUrl", next),
  };
}
