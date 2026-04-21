import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";

export function usePhonePreviewHandler(activeType: QRType | null) {
  const animationKey = activeType?.id ?? "empty";
  const statusLabel = activeType?.label ?? "Home";

  return { animationKey, statusLabel };
}
