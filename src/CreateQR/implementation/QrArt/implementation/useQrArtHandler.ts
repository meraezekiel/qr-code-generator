import { useEffect, useMemo, useRef } from "react";
import QRCodeStyling, {
  type CornerSquareType,
  type DotType,
} from "qr-code-styling";
import {
  PALETTE_BY_ID,
  type CornerId,
  type ShapeId,
  type StyleState,
} from "../../useCreateQRHandler";

const RENDER_SIZE = 480;

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

export function useQrArtHandler(value: string, style: StyleState) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  const data = value.trim() || "https://online-qr-generator.com";

  const options = useMemo(() => {
    const palette = PALETTE_BY_ID[style.palette];
    return {
      width: RENDER_SIZE,
      height: RENDER_SIZE,
      type: "svg" as const,
      data,
      margin: 0,
      qrOptions: { errorCorrectionLevel: "M" as const },
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
  }, [data, style]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling(options);
      qrRef.current.append(containerRef.current);
    } else {
      qrRef.current.update(options);
    }
  }, [options]);

  return { containerRef };
}
