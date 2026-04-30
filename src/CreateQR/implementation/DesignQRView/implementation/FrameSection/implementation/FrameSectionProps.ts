export type FrameStyleId =
  | "none"
  | "label-bottom-line"
  | "label-bottom-tag"
  | "label-bottom-bar"
  | "label-bottom-arrow"
  | "bordered-thin"
  | "bordered-rounded"
  | "label-top-bar"
  | "label-cursive"
  | "speech-bubble"
  | "gift-box"
  | "bow-ribbon"
  | "shopping-bag"
  | "envelope"
  | "scooter"
  | "hand";

export type FrameSectionProps = {
  value: FrameStyleId;
  onChange: (next: FrameStyleId) => void;
  isOpen: boolean;
  onToggle: () => void;
};
