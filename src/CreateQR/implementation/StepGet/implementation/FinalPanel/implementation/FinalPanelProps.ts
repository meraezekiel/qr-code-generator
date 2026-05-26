import type { ReactNode } from "react";
import type { QrFormat, StyleState } from "../../../../useCreateQRHandler";

export type FinalPanelProps = {
  style: StyleState;
  qrValue: string;
  selectedFormat: QrFormat;
  onSelectFormat: (format: QrFormat) => void;
  renderStage: () => ReactNode;
};
