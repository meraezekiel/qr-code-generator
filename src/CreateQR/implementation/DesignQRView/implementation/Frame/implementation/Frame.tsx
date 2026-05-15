import type { ReactNode } from "react";
import type { FrameStyleId } from "../../FrameSection/implementation/FrameSectionProps";
import { FrameProps } from "./FrameProps";
import { useFrameHandler } from "./useFrameHandler";

type Slot = { x: number; y: number; w: number; h: number };

type TextStyle =
  | "plain"
  | "cursive"
  | "tag-dark"
  | "bar-dark"
  | "bubble"
  | "arrow"
  | "line";

type TextSlot = Slot & { style: TextStyle };

type Border = {
  x: number;
  y: number;
  w: number;
  h: number;
  width: number;
  rx?: number;
  fill?: string;
};

export type FrameConfig = {
  viewBox: { w: number; h: number };
  qrSlot: Slot;
  textSlot?: TextSlot;
  border?: Border;
  decorations?: ReactNode;
};

const STROKE = "#0f172a";
const FILL_DARK = "#0f172a";
const FILL_BUBBLE = "#f1f5f9";
const STROKE_BUBBLE = "#cbd5e1";

export function Frame({ frameId, children, text = "Scan Me!" }: FrameProps) {
  const config = useFrameHandler(frameId);
  const { viewBox, qrSlot, textSlot, border, decorations } = config;

  return (
    <div
      className="relative max-w-full max-h-full"
      style={{ aspectRatio: viewBox.w / viewBox.h, width: "100%" }}
    >
      <svg
        viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden
      >
        {border ? (
          <rect
            x={border.x}
            y={border.y}
            width={border.w}
            height={border.h}
            rx={border.rx}
            fill={border.fill ?? "none"}
            stroke={STROKE}
            strokeWidth={border.width}
          />
        ) : null}
        {decorations}
        {textSlot ? renderText(text, textSlot, viewBox) : null}
      </svg>
      <div
        className="absolute"
        style={{
          left: `${(qrSlot.x / viewBox.w) * 100}%`,
          top: `${(qrSlot.y / viewBox.h) * 100}%`,
          width: `${(qrSlot.w / viewBox.w) * 100}%`,
          height: `${(qrSlot.h / viewBox.h) * 100}%`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function renderText(
  text: string,
  slot: TextSlot,
  vb: { w: number; h: number },
): ReactNode {
  const cx = slot.x + slot.w / 2;
  const cy = slot.y + slot.h / 2;
  const baseSize = slot.h * 0.7;

  switch (slot.style) {
    case "plain":
      return (
        <text
          x={cx}
          y={cy}
          fontSize={baseSize}
          fontWeight={700}
          textAnchor="middle"
          dominantBaseline="central"
          fill={STROKE}
        >
          {text}
        </text>
      );
    case "cursive":
      return (
        <text
          x={cx}
          y={cy}
          fontSize={baseSize}
          fontWeight={600}
          fontStyle="italic"
          textAnchor="middle"
          dominantBaseline="central"
          fill={STROKE}
        >
          {text}
        </text>
      );
    case "tag-dark":
      return (
        <>
          <rect
            x={slot.x}
            y={slot.y}
            width={slot.w}
            height={slot.h}
            rx={slot.h * 0.25}
            fill={FILL_DARK}
          />
          <text
            x={cx}
            y={cy}
            fontSize={baseSize * 0.75}
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
          >
            {text}
          </text>
        </>
      );
    case "bar-dark":
      return (
        <>
          <rect x={0} y={slot.y} width={vb.w} height={slot.h} fill={FILL_DARK} />
          <text
            x={cx}
            y={cy}
            fontSize={baseSize * 0.75}
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
          >
            {text}
          </text>
        </>
      );
    case "bubble":
      return (
        <>
          <rect
            x={slot.x}
            y={slot.y}
            width={slot.w}
            height={slot.h}
            rx={slot.h * 0.5}
            fill={FILL_BUBBLE}
            stroke={STROKE_BUBBLE}
            strokeWidth={0.4}
          />
          <text
            x={cx}
            y={cy}
            fontSize={baseSize * 0.7}
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#1e293b"
          >
            {text}
          </text>
        </>
      );
    case "arrow": {
      const arrowH = slot.h * 0.4;
      const arrowTop = slot.y;
      const arrowMid = arrowTop + arrowH / 2;
      const arrowBot = arrowTop + arrowH;
      const halfW = arrowH * 0.6;
      return (
        <>
          <path
            d={`M ${cx - halfW} ${arrowBot} L ${cx} ${arrowMid - arrowH * 0.3} L ${cx + halfW} ${arrowBot}`}
            stroke={STROKE}
            strokeWidth={0.9}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x={cx}
            y={slot.y + slot.h * 0.78}
            fontSize={baseSize * 0.75}
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="central"
            fill={STROKE}
          >
            {text}
          </text>
        </>
      );
    }
    case "line":
      return (
        <>
          <line
            x1={slot.x + slot.w * 0.05}
            y1={slot.y}
            x2={slot.x + slot.w * 0.95}
            y2={slot.y}
            stroke={STROKE}
            strokeWidth={0.5}
          />
          <text
            x={cx}
            y={slot.y + slot.h * 0.65}
            fontSize={baseSize * 0.75}
            fontWeight={700}
            textAnchor="middle"
            dominantBaseline="central"
            fill={STROKE}
          >
            {text}
          </text>
        </>
      );
  }
}

const decoBow = (
  <g transform="translate(50 8)">
    <path
      d="M0 0 C -10 -7, -22 -7, -24 0 C -22 7, -10 7, 0 0 Z"
      fill={STROKE}
    />
    <path
      d="M0 0 C 10 -7, 22 -7, 24 0 C 22 7, 10 7, 0 0 Z"
      fill={STROKE}
    />
    <rect x={-3} y={-3} width={6} height={7} rx={1} fill={STROKE} />
  </g>
);

const decoBagHandles = (
  <g
    fill="none"
    stroke={STROKE}
    strokeWidth={2}
    strokeLinecap="round"
  >
    <path d="M22 18 C 22 4, 34 4, 38 4 C 42 4, 42 18, 42 18" />
    <path d="M58 18 C 58 4, 66 4, 70 4 C 74 4, 74 18, 74 18" />
  </g>
);

const decoEnvelopeFlap = (
  <path
    d="M0 0 L100 0 L50 16 Z"
    fill="white"
    stroke={STROKE}
    strokeWidth={1.2}
    strokeLinejoin="round"
  />
);

const decoScooter = (
  <g
    fill="none"
    stroke={STROKE}
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    transform="translate(0 1)"
  >
    <circle cx={20} cy={14} r={4.5} fill="white" />
    <circle cx={20} cy={14} r={1.2} fill={STROKE} />
    <circle cx={80} cy={14} r={4.5} fill="white" />
    <circle cx={80} cy={14} r={1.2} fill={STROKE} />
    <path
      d="M25 14 Q 32 2, 52 4 L 66 14 Z"
      fill={STROKE}
      stroke={STROKE}
    />
    <path d="M66 5 L 76 -8" />
    <path d="M72 -8 L 86 -6" />
    <rect x={6} y={-4} width={18} height={14} rx={1.5} fill="white" />
    <line x1={11} y1={1} x2={19} y2={1} />
    <line x1={11} y1={5} x2={19} y2={5} />
  </g>
);

const decoHand = (
  <g
    fill="white"
    stroke={STROKE}
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    transform="translate(28 100)"
  >
    <path
      d="M22 4 L 22 13 M 18 9 L 18 14 M 14 11 L 14 16 M 10 14 L 10 19
         Q 6 21, 6 24 L 36 24 Q 40 24, 40 21 L 40 14 Q 40 11, 36 11 L 26 11"
    />
  </g>
);

const decoGiftRibbons = (
  <g stroke={STROKE} strokeWidth={2.5}>
    <line x1={50} y1={15} x2={50} y2={110} />
    <line x1={5} y1={62} x2={95} y2={62} />
  </g>
);

const FRAME_CONFIGS: Record<FrameStyleId, FrameConfig> = {
  none: {
    viewBox: { w: 100, h: 100 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
  },
  "label-bottom-line": {
    viewBox: { w: 100, h: 118 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 0, y: 104, w: 100, h: 14, style: "line" },
  },
  "label-bottom-tag": {
    viewBox: { w: 100, h: 118 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 28, y: 104, w: 44, h: 12, style: "tag-dark" },
  },
  "label-bottom-bar": {
    viewBox: { w: 100, h: 115 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 0, y: 102, w: 100, h: 13, style: "bar-dark" },
  },
  "label-bottom-arrow": {
    viewBox: { w: 100, h: 120 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 0, y: 102, w: 100, h: 18, style: "arrow" },
  },
  "bordered-thin": {
    viewBox: { w: 100, h: 120 },
    qrSlot: { x: 4, y: 4, w: 92, h: 92 },
    textSlot: { x: 0, y: 105, w: 100, h: 12, style: "plain" },
    border: { x: 0, y: 0, w: 100, h: 120, width: 0.8 },
  },
  "bordered-rounded": {
    viewBox: { w: 100, h: 120 },
    qrSlot: { x: 5, y: 5, w: 90, h: 90 },
    textSlot: { x: 0, y: 105, w: 100, h: 12, style: "plain" },
    border: { x: 0, y: 0, w: 100, h: 120, width: 1.5, rx: 5 },
  },
  "label-top-bar": {
    viewBox: { w: 100, h: 115 },
    qrSlot: { x: 0, y: 15, w: 100, h: 100 },
    textSlot: { x: 0, y: 0, w: 100, h: 13, style: "bar-dark" },
  },
  "label-cursive": {
    viewBox: { w: 100, h: 118 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 0, y: 104, w: 100, h: 13, style: "cursive" },
  },
  "speech-bubble": {
    viewBox: { w: 100, h: 118 },
    qrSlot: { x: 0, y: 0, w: 100, h: 100 },
    textSlot: { x: 22, y: 104, w: 56, h: 12, style: "bubble" },
  },
  "gift-box": {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 7, y: 17, w: 86, h: 90 },
    textSlot: { x: 0, y: 117, w: 100, h: 12, style: "plain" },
    border: { x: 4, y: 14, w: 92, h: 96, width: 1.5, rx: 2 },
    decorations: (
      <>
        {decoBow}
        {decoGiftRibbons}
      </>
    ),
  },
  "bow-ribbon": {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 0, y: 18, w: 100, h: 100 },
    textSlot: { x: 0, y: 119, w: 100, h: 11, style: "plain" },
    decorations: decoBow,
  },
  "shopping-bag": {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 4, y: 22, w: 92, h: 92 },
    textSlot: { x: 0, y: 119, w: 100, h: 11, style: "plain" },
    border: { x: 2, y: 20, w: 96, h: 96, width: 1.5 },
    decorations: decoBagHandles,
  },
  envelope: {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 4, y: 22, w: 92, h: 92 },
    textSlot: { x: 0, y: 119, w: 100, h: 11, style: "plain" },
    border: { x: 2, y: 20, w: 96, h: 96, width: 1.5 },
    decorations: decoEnvelopeFlap,
  },
  scooter: {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 0, y: 22, w: 100, h: 95 },
    textSlot: { x: 0, y: 119, w: 100, h: 11, style: "plain" },
    decorations: decoScooter,
  },
  hand: {
    viewBox: { w: 100, h: 130 },
    qrSlot: { x: 5, y: 0, w: 90, h: 95 },
    textSlot: { x: 0, y: 119, w: 100, h: 11, style: "plain" },
    decorations: decoHand,
  },
};

export function getFrameConfig(id: FrameStyleId): FrameConfig {
  return FRAME_CONFIGS[id];
}

export const FRAME_IDS: FrameStyleId[] = Object.keys(
  FRAME_CONFIGS,
) as FrameStyleId[];
