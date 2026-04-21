import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";

export type QRTypesSectionProps = {
  selectedType: QRType | null;
  activeType: QRType | null;
  onSelectType: (type: QRType) => void;
  onHoverType: (type: QRType) => void;
  onLeaveType: () => void;
};
