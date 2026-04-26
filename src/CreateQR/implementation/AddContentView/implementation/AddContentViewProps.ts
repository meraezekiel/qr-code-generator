import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";

export type AddContentViewProps = {
  selectedType: QRType | null;
  onBack: () => void;
  onNext: () => void;
};
