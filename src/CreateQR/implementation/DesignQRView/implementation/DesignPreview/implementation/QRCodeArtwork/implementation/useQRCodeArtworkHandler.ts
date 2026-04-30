import { useEffect, useMemo, useRef } from "react";
import QRCodeStyling, {
  type DotType,
  type CornerSquareType,
  type CornerDotType,
  type Gradient,
} from "qr-code-styling";
import type { DesignState, GradientStyle } from "../../../../useDesignQRViewHandler";
import type { PatternStyleId } from "../../../../PatternSection/implementation/PatternSectionProps";
import type {
  CornerDotStyleId,
  CornerFrameStyleId,
} from "../../../../CornersSection/implementation/CornersSectionProps";

const PLACEHOLDER_VALUE = "https://online-qr-generator.com";
const RENDER_SIZE = 480;

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

export function useQRCodeArtworkHandler(value: string, design: DesignState) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  const data = value.trim() || PLACEHOLDER_VALUE;

  const options = useMemo(() => {
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

    return {
      width: RENDER_SIZE,
      height: RENDER_SIZE,
      type: "svg" as const,
      data,
      margin: 0,
      qrOptions: { errorCorrectionLevel: "M" as const },
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
        crossOrigin: "anonymous" as const,
        margin: 4,
        imageSize: 0.4,
        hideBackgroundDots: true,
      },
    };
  }, [data, design]);

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
