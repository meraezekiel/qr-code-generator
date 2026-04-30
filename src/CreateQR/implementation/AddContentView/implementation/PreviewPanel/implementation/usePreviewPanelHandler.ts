import { useEffect, useState } from "react";

export type PreviewMode = "preview" | "qrcode";

const QR_LOADER_DURATION_MS = 1500;
const LOTTIE_PATH = "/qr-scanner.json";

let cachedLottie: object | null = null;
let cachedLottieFailed = false;

export function usePreviewPanelHandler(qrEnabled: boolean, qrValue?: string) {
  const [mode, setMode] = useState<PreviewMode>("preview");
  const [isGeneratingQr, setIsGeneratingQr] = useState(false);
  const [lottieData, setLottieData] = useState<object | null>(cachedLottie);

  useEffect(() => {
    if (cachedLottie || cachedLottieFailed) return;
    let cancelled = false;
    fetch(LOTTIE_PATH)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json) => {
        if (cancelled) return;
        cachedLottie = json;
        setLottieData(json);
      })
      .catch(() => {
        cachedLottieFailed = true;
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!qrEnabled && mode === "qrcode") {
      setMode("preview");
    }
  }, [qrEnabled, mode]);

  useEffect(() => {
    if (mode !== "qrcode" || !qrEnabled || !qrValue) {
      setIsGeneratingQr(false);
      return;
    }
    setIsGeneratingQr(true);
    const timer = window.setTimeout(() => {
      setIsGeneratingQr(false);
    }, QR_LOADER_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [mode, qrEnabled, qrValue]);

  const showPreview = () => setMode("preview");
  const showQrCode = () => {
    if (qrEnabled) setMode("qrcode");
  };

  return {
    mode,
    showPreview,
    showQrCode,
    isGeneratingQr,
    lottieData,
  };
}
