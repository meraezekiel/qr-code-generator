import type { StepIdx } from "../../useCreateQRHandler";

export type ActionBarProps = {
  step: StepIdx;
  goTo: (i: number) => void;
  canAdvance: boolean;
  onDownload: () => void;
};
