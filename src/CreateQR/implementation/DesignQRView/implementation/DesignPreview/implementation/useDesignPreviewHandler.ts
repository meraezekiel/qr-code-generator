import { useEffect, useState } from "react";
import type { DesignState } from "../../useDesignQRViewHandler";

export type DesignPreviewMode = "preview" | "qrcode";

const QR_LOADER_DURATION_MS = 1500;
const LOTTIE_PATH = "/qr-scanner.json";

let cachedLottie: object | null = null;
let cachedLottieFailed = false;

export function useDesignPreviewHandler(qrValue: string, design: DesignState) {
  const [mode, setMode] = useState<DesignPreviewMode>("qrcode");
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
    if (mode !== "qrcode") {
      setIsGeneratingQr(false);
      return;
    }
    setIsGeneratingQr(true);
    const timer = window.setTimeout(() => {
      setIsGeneratingQr(false);
    }, QR_LOADER_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [mode, qrValue, design]);

  const showPreview = () => setMode("preview");
  const showQrCode = () => setMode("qrcode");

  return { mode, showPreview, showQrCode, isGeneratingQr, lottieData };
}
