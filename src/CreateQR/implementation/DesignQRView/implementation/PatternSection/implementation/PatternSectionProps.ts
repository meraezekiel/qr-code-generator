import type { GradientStyle } from "../../useDesignQRViewHandler";

export type PatternStyleId =
  | "classic"
  | "rounded"
  | "dots"
  | "diagonal"
  | "sparse"
  | "fine";

export type PatternSectionProps = {
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
  onPatternStyleChange: (id: PatternStyleId) => void;
  onPatternColorChange: (hex: string) => void;
  onPatternColor2Change: (hex: string) => void;
  onPatternGradientChange: (next: boolean) => void;
  onPatternGradientStyleChange: (style: GradientStyle) => void;
  onBackgroundColorChange: (hex: string) => void;
  onBackgroundColor2Change: (hex: string) => void;
  onBackgroundGradientChange: (next: boolean) => void;
  onBackgroundGradientStyleChange: (style: GradientStyle) => void;
  onBackgroundTransparentChange: (next: boolean) => void;
  onSwapColors: () => void;
  isOpen: boolean;
  onToggle: () => void;
};
