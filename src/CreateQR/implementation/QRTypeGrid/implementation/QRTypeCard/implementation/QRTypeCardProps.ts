import type { QRType } from "../../QRTypeGridProps";

export type QRTypeCardProps = {
  type: QRType;
  isSelected: boolean;
  onSelect: (type: QRType) => void;
  onHover: (type: QRType) => void;
  onLeave: () => void;
};
