import type { StyleState } from "../../useCreateQRHandler";

export type StepGetProps = {
  style: StyleState;
  qrValue: string;
  onDownload: (format: "png" | "svg" | "pdf" | "eps") => void;
};
