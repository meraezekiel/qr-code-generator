import type { QRType } from "../../../../QRTypeGrid/implementation/QRTypeGridProps";
import type { DesignState } from "../../useDesignQRViewHandler";

export type DesignPreviewProps = {
  design: DesignState;
  selectedType: QRType | null;
  qrValue: string;
};
