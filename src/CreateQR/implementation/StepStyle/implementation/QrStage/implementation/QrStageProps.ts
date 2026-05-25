import type { StyleState } from "../../../../useCreateQRHandler";

export type QrStageProps = {
  style: StyleState;
  qrValue: string;
  size: number;
  qrSize: number;
  padding: number;
  stagePadding?: number;
};
