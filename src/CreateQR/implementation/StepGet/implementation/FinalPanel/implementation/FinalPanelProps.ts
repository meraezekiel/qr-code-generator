import type { ReactNode } from "react";
import type { StyleState } from "../../../../useCreateQRHandler";

export type FinalPanelProps = {
  style: StyleState;
  qrValue: string;
  onDownload: (format: "png" | "svg" | "pdf" | "eps") => void;
  renderStage: () => ReactNode;
};
