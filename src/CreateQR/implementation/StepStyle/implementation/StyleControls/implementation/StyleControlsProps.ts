import type { StyleState } from "../../../../useCreateQRHandler";

export type StyleControlsProps = {
  style: StyleState;
  onStyleChange: (patch: Partial<StyleState>) => void;
};
