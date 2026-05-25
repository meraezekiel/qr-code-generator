import type {
  QRTypeInfo,
  StyleState,
} from "../../useCreateQRHandler";

export type StepStyleProps = {
  style: StyleState;
  qrValue: string;
  currentType: QRTypeInfo | null;
  onStyleChange: (patch: Partial<StyleState>) => void;
};
