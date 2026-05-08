import QRCodeStyling, {
  type CornerDotType,
  type CornerSquareType,
  type DotType,
  type Gradient,
} from "qr-code-styling";
import type {
  DesignState,
  GradientStyle,
} from "../CreateQR/implementation/DesignQRView/implementation/useDesignQRViewHandler";
import type { PatternStyleId } from "../CreateQR/implementation/DesignQRView/implementation/PatternSection/implementation/PatternSectionProps";
import type {
  CornerDotStyleId,
  CornerFrameStyleId,
} from "../CreateQR/implementation/DesignQRView/implementation/CornersSection/implementation/CornersSectionProps";

const RENDER_SIZE = 1024;
const PLACEHOLDER_VALUE = "https://online-qr-generator.com";

const DOT_TYPE_BY_PATTERN: Record<PatternStyleId, DotType> = {
  classic: "square",
  rounded: "rounded",
  dots: "dots",
  diagonal: "extra-rounded",
  sparse: "classy",
  fine: "classy-rounded",
};

const CORNER_SQUARE_TYPE_BY_FRAME: Record<CornerFrameStyleId, CornerSquareType> = {
  none: "square",
  ring: "dot",
  square: "square",
  "square-thin": "square",
  "square-rounded": "extra-rounded",
  "square-flat": "square",
};

const CORNER_DOT_TYPE_BY_STYLE: Record<CornerDotStyleId, CornerDotType> = {
  none: "square",
  dot: "dot",
  square: "square",
  "square-bold": "square",
  "square-rounded": "square",
  diamond: "square",
  "square-thin": "square",
  block: "square",
};

function buildGradient(
  enabled: boolean,
  style: GradientStyle,
  color1: string,
  color2: string,
): Gradient | undefined {
  if (!enabled) return undefined;
  return {
    type: style,
    rotation: style === "linear" ? Math.PI / 4 : 0,
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 },
    ],
  };
}

export async function renderQrPng(value: string, design: DesignState): Promise<Blob> {
  const data = value.trim() || PLACEHOLDER_VALUE;

  const dotsGradient = buildGradient(
    design.patternGradient,
    design.patternGradientStyle,
    design.patternColor,
    design.patternColor2,
  );
  const backgroundGradient = buildGradient(
    design.backgroundGradient,
    design.backgroundGradientStyle,
    design.backgroundColor,
    design.backgroundColor2,
  );

  const qr = new QRCodeStyling({
    width: RENDER_SIZE,
    height: RENDER_SIZE,
    type: "canvas",
    data,
    margin: 0,
    qrOptions: { errorCorrectionLevel: "M" },
    dotsOptions: dotsGradient
      ? { type: DOT_TYPE_BY_PATTERN[design.patternStyle], gradient: dotsGradient }
      : {
          type: DOT_TYPE_BY_PATTERN[design.patternStyle],
          color: design.patternColor,
        },
    backgroundOptions: design.backgroundTransparent
      ? { color: "transparent" }
      : backgroundGradient
        ? { gradient: backgroundGradient }
        : { color: design.backgroundColor },
    cornersSquareOptions: {
      type: CORNER_SQUARE_TYPE_BY_FRAME[design.cornerFrameStyle],
      color: design.cornerFrameColor,
    },
    cornersDotOptions: {
      type: CORNER_DOT_TYPE_BY_STYLE[design.cornerDotStyle],
      color: design.cornerDotColor,
    },
    image: design.logoDataUrl ?? undefined,
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
