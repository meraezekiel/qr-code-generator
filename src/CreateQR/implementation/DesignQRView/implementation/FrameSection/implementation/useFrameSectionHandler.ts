import { useMemo } from "react";
import QRCode from "qrcode";
import type { FrameStyleId } from "./FrameSectionProps";

const FRAME_IDS: FrameStyleId[] = [
  "none",
  "label-bottom-line",
  "label-bottom-tag",
  "label-bottom-bar",
  "label-bottom-arrow",
  "bordered-thin",
  "bordered-rounded",
  "label-top-bar",
  "label-cursive",
  "speech-bubble",
  "gift-box",
  "bow-ribbon",
  "shopping-bag",
  "envelope",
  "scooter",
  "hand",
];

const SAMPLE_QR = QRCode.create("Scan Me", { errorCorrectionLevel: "L" });
const SAMPLE_SIZE = SAMPLE_QR.modules.size;
const SAMPLE_DATA = SAMPLE_QR.modules.data as unknown as ArrayLike<number>;

const SAMPLE_BIT_GRID: boolean[][] = Array.from({ length: SAMPLE_SIZE }, (_, r) =>
  Array.from({ length: SAMPLE_SIZE }, (_, c) =>
    Boolean(SAMPLE_DATA[r * SAMPLE_SIZE + c]),
  ),
);

export function useFrameSectionHandler() {
  return useMemo(
    () => ({
      frameIds: FRAME_IDS,
      sampleSize: SAMPLE_SIZE,
      sampleBitGrid: SAMPLE_BIT_GRID,
    }),
    [],
  );
}
