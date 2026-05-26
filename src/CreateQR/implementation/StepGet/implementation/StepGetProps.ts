import type { QrFormat, StyleState } from "../../useCreateQRHandler";

export type StepGetProps = {
  style: StyleState;
  qrValue: string;
  selectedFormat: QrFormat;
  onSelectFormat: (format: QrFormat) => void;
};
