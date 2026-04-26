import { useState } from "react";

export type PreviewMode = "preview" | "qrcode";

export function usePreviewPanelHandler() {
  const [mode, setMode] = useState<PreviewMode>("preview");

  const showPreview = () => setMode("preview");
  const showQrCode = () => setMode("qrcode");

  return {
    mode,
    showPreview,
    showQrCode,
  };
}
