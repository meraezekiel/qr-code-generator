import type { DesignState } from "../../DesignQRView/implementation/useDesignQRViewHandler";
import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";

export type DownloadQRViewProps = {
  selectedType: QRType | null;
  qrValue: string;
  design: DesignState;
  onBack: () => void;
};
