import type { QrFormat, StepIdx } from "../../useCreateQRHandler";

export type ActionBarProps = {
  step: StepIdx;
  goTo: (i: number) => void;
  canAdvance: boolean;
  selectedFormat: QrFormat;
  onDownload: () => void;
};
