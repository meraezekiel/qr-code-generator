import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";
import type { MenuSubType } from "../../MenuTypeModal";

export type AddContentViewProps = {
  selectedType: QRType | null;
  menuSubType: MenuSubType | null;
  onBack: () => void;
  onNext: () => void;
};
