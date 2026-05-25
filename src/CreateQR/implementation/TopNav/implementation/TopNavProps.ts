import type { StepIdx } from "../../useCreateQRHandler";

export type TopNavProps = {
  step: StepIdx;
  goTo: (i: number) => void;
};
