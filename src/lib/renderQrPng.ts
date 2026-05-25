import QRCodeStyling, {
  type CornerSquareType,
  type DotType,
} from "qr-code-styling";
import {
  PALETTE_BY_ID,
  type CornerId,
  type ShapeId,
  type StyleState,
} from "../CreateQR/implementation/useCreateQRHandler";

const RENDER_SIZE = 1024;
const PLACEHOLDER_VALUE = "https://online-qr-generator.com";

const DOT_TYPE_BY_SHAPE: Record<ShapeId, DotType> = {
  square: "square",
  dot: "dots",
  soft: "extra-rounded",
  lines: "classy-rounded",
};

const CORNER_SQUARE_BY_CORNER: Record<CornerId, CornerSquareType> = {
  square: "square",
  rounded: "extra-rounded",
  circle: "dot",
};

export async function renderQrPng(value: string, style: StyleState): Promise<Blob> {
  const data = value.trim() || PLACEHOLDER_VALUE;
  const palette = PALETTE_BY_ID[style.palette];

  const qr = new QRCodeStyling({
    width: RENDER_SIZE,
    height: RENDER_SIZE,
    type: "canvas",
    data,
    margin: 24,
    qrOptions: { errorCorrectionLevel: "M" },
    dotsOptions: { type: DOT_TYPE_BY_SHAPE[style.shape], color: palette.fg },
    backgroundOptions: { color: palette.bg },
    cornersSquareOptions: {
      type: CORNER_SQUARE_BY_CORNER[style.corner],
      color: palette.fg,
    },
    cornersDotOptions: { color: palette.fg },
    image: style.logoDataUrl ?? undefined,
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 4,
      imageSize: 0.4,
      hideBackgroundDots: true,
    },
  });

  const raw = await qr.getRawData("png");
  if (!(raw instanceof Blob)) throw new Error("Failed to render QR PNG");
  return raw;
}

export async function blobToBase64(blob: Blob): Promise<string> {
  const buffer = await blob.arrayBuffer();
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
