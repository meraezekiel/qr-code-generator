import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";
import type { useDesignQRViewHandler } from "./useDesignQRViewHandler";

export type DesignHandler = ReturnType<typeof useDesignQRViewHandler>;

export type DesignQRViewProps = {
  selectedType: QRType | null;
  qrValue: string;
  designHandler: DesignHandler;
  onBack: () => void;
  onCreate: () => void;
};
