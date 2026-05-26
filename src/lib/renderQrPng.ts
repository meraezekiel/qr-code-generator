import QRCodeStyling, {
  type CornerSquareType,
  type DotType,
  type FileExtension,
} from "qr-code-styling";
import { jsPDF } from "jspdf";
import {
  PALETTE_BY_ID,
  type CornerId,
  type QrFormat,
  type ShapeId,
  type StyleState,
} from "../CreateQR/implementation/useCreateQRHandler";

const RENDER_SIZE = 1024;
const EPS_SIZE = 512;
const PDF_POINTS = 360;
const PLACEHOLDER_VALUE = "https://online-qr-generator.com";

export type { QrFormat };

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

const MIME_BY_FORMAT: Record<QrFormat, string> = {
  png: "image/png",
  svg: "image/svg+xml",
  pdf: "application/pdf",
  eps: "application/postscript",
};

function buildOptions(value: string, style: StyleState, size: number, type: "canvas" | "svg") {
  const data = value.trim() || PLACEHOLDER_VALUE;
  const palette = PALETTE_BY_ID[style.palette];
  return {
    width: size,
    height: size,
    type,
    data,
    margin: Math.round(size * 0.023),
    qrOptions: { errorCorrectionLevel: style.logoDataUrl ? ("H" as const) : ("M" as const) },
    dotsOptions: { type: DOT_TYPE_BY_SHAPE[style.shape], color: palette.fg },
    backgroundOptions: { color: palette.bg },
    cornersSquareOptions: {
      type: CORNER_SQUARE_BY_CORNER[style.corner],
      color: palette.fg,
    },
    cornersDotOptions: { color: palette.fg },
    image: style.logoDataUrl ?? undefined,
    imageOptions: {
      crossOrigin: "anonymous" as const,
      margin: 4,
      imageSize: 0.4,
      hideBackgroundDots: true,
    },
  };
}

async function getRaw(value: string, style: StyleState, size: number, type: "canvas" | "svg", ext: FileExtension): Promise<Blob> {
  const qr = new QRCodeStyling(buildOptions(value, style, size, type));
  const raw = await qr.getRawData(ext);
  if (!(raw instanceof Blob)) throw new Error(`Failed to render QR (${ext})`);
  return raw;
}

export async function renderQrPng(value: string, style: StyleState): Promise<Blob> {
  return getRaw(value, style, RENDER_SIZE, "canvas", "png");
}

async function renderQrSvg(value: string, style: StyleState): Promise<Blob> {
  return getRaw(value, style, RENDER_SIZE, "svg", "svg");
}

async function renderQrPdf(value: string, style: StyleState): Promise<Blob> {
  const pngBlob = await renderQrPng(value, style);
  const pngDataUrl = await blobToDataUrl(pngBlob);
  const doc = new jsPDF({ unit: "pt", format: [PDF_POINTS, PDF_POINTS], orientation: "portrait" });
  doc.addImage(pngDataUrl, "PNG", 0, 0, PDF_POINTS, PDF_POINTS, undefined, "FAST");
  return doc.output("blob");
}

async function renderQrEps(value: string, style: StyleState): Promise<Blob> {
  const pngBlob = await getRaw(value, style, EPS_SIZE, "canvas", "png");
  const { width, height, rgb } = await decodePngToRgb(pngBlob);
  const hex = rgbToHex(rgb);
  const eps = buildEps(width, height, hex);
  return new Blob([eps], { type: MIME_BY_FORMAT.eps });
}

export async function renderQr(value: string, style: StyleState, format: QrFormat): Promise<Blob> {
  switch (format) {
    case "png":
      return renderQrPng(value, style);
    case "svg":
      return renderQrSvg(value, style);
    case "pdf":
      return renderQrPdf(value, style);
    case "eps":
      return renderQrEps(value, style);
  }
}

export function fileExtForFormat(format: QrFormat): string {
  return format;
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

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read blob"));
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Unexpected blob reader result"));
    };
    reader.readAsDataURL(blob);
  });
}

async function decodePngToRgb(blob: Blob): Promise<{ width: number; height: number; rgb: Uint8Array }> {
  const bitmap = await createImageBitmap(blob);
  const width = bitmap.width;
  const height = bitmap.height;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D context not available");
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close?.();
  const { data } = ctx.getImageData(0, 0, width, height);
  const rgb = new Uint8Array(width * height * 3);
  for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
    const a = data[i + 3] / 255;
    rgb[j] = Math.round(data[i] * a + 255 * (1 - a));
    rgb[j + 1] = Math.round(data[i + 1] * a + 255 * (1 - a));
    rgb[j + 2] = Math.round(data[i + 2] * a + 255 * (1 - a));
  }
  return { width, height, rgb };
}

const HEX_CHARS = "0123456789abcdef";
function rgbToHex(rgb: Uint8Array): string {
  const out = new Array<string>(rgb.length * 2 + Math.ceil(rgb.length / 32));
  let oi = 0;
  let lineCount = 0;
  for (let i = 0; i < rgb.length; i += 1) {
    const v = rgb[i];
    out[oi++] = HEX_CHARS[(v >> 4) & 0xf];
    out[oi++] = HEX_CHARS[v & 0xf];
    lineCount += 2;
    if (lineCount >= 64) {
      out[oi++] = "\n";
      lineCount = 0;
    }
  }
  return out.join("");
}

function buildEps(width: number, height: number, hex: string): string {
  const bbox = `0 0 ${width} ${height}`;
  return [
    "%!PS-Adobe-3.0 EPSF-3.0",
    `%%BoundingBox: ${bbox}`,
    `%%HiResBoundingBox: ${bbox}`,
    "%%Creator: Online QR Generator",
    "%%Title: QR Code",
    "%%LanguageLevel: 2",
    "%%EndComments",
    "gsave",
    `${width} ${height} scale`,
    `/picstr ${width * 3} string def`,
    `${width} ${height} 8 [${width} 0 0 -${height} 0 ${height}]`,
    "{currentfile picstr readhexstring pop} false 3 colorimage",
    hex,
    "grestore",
    "showpage",
    "%%EOF",
    "",
  ].join("\n");
}
