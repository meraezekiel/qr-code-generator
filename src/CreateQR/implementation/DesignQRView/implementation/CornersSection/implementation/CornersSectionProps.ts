export type CornerFrameStyleId =
  | "none"
  | "ring"
  | "square"
  | "square-thin"
  | "square-rounded"
  | "square-flat";

export type CornerDotStyleId =
  | "none"
  | "dot"
  | "square"
  | "square-bold"
  | "square-rounded"
  | "diamond"
  | "square-thin"
  | "block";

export type CornersSectionProps = {
  cornerFrameStyle: CornerFrameStyleId;
  cornerDotStyle: CornerDotStyleId;
  cornerFrameColor: string;
  cornerDotColor: string;
  onCornerFrameStyleChange: (id: CornerFrameStyleId) => void;
  onCornerDotStyleChange: (id: CornerDotStyleId) => void;
  onCornerFrameColorChange: (hex: string) => void;
  onCornerDotColorChange: (hex: string) => void;
  isOpen: boolean;
  onToggle: () => void;
};
