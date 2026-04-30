import type { ReactNode } from "react";
import {
  Bike,
  ChevronUp,
  Gift,
  Hand,
  Heart,
  Mail,
  MessageCircle,
  ShoppingBag,
  Slash,
  Square,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { StylePicker } from "../../StylePicker";
import { FrameSectionProps, FrameStyleId } from "./FrameSectionProps";
import { useFrameSectionHandler } from "./useFrameSectionHandler";

export function FrameSection({ value, onChange, isOpen, onToggle }: FrameSectionProps) {
  const { frameIds, sampleSize, sampleBitGrid } = useFrameSectionHandler();

  const items = frameIds.map((id) => ({
    id,
    render: () => renderFrame(id, sampleSize, sampleBitGrid),
  }));

  return (
    <ContentSection
      icon={Square}
      title="Frame"
      subtitle="Frames make your QR Code stand out from the crowd, inspiring more scans."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-col gap-3 pt-3">
        <span className="text-xs font-semibold text-slate-700">Frame style</span>
        <StylePicker
          items={items}
          value={value}
          onChange={(id) => onChange(id as FrameStyleId)}
          columns={8}
        />
      </div>
    </ContentSection>
  );
}

function MiniQR({ size, bitGrid }: { size: number; bitGrid: boolean[][] }) {
  const cells = bitGrid.flatMap((row, r) =>
    row.map((on, c) =>
      on ? (
        <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="currentColor" />
      ) : null,
    ),
  );

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-full text-slate-900"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {cells}
    </svg>
  );
}

function ScanLabel({ className = "" }: { className?: string }) {
  return (
    <span
      className={[
        "text-[7px] font-bold tracking-wide text-slate-900 leading-none",
        className,
      ].join(" ")}
    >
      Scan Me!
    </span>
  );
}

function renderFrame(
  id: FrameStyleId,
  sampleSize: number,
  sampleBitGrid: boolean[][],
): ReactNode {
  const qr = <MiniQR size={sampleSize} bitGrid={sampleBitGrid} />;

  switch (id) {
    case "none":
      return (
        <span className="w-7 h-7 rounded-full border-2 border-slate-300 flex items-center justify-center">
          <Slash className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
        </span>
      );
    case "label-bottom-line":
      return (
        <div className="w-full h-full flex flex-col px-0.5 py-0.5">
          <div className="flex-1 min-h-0">{qr}</div>
          <div className="border-t border-slate-900 mt-0.5 pt-0.5 flex justify-center">
            <ScanLabel />
          </div>
        </div>
      );
    case "label-bottom-tag":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 py-0.5">
          <div className="flex-1 min-h-0 w-full">{qr}</div>
          <span className="mt-0.5 rounded-sm bg-slate-900 text-white px-1 py-px text-[6px] font-bold leading-none">
            Scan Me!
          </span>
        </div>
      );
    case "label-bottom-bar":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 min-h-0 px-0.5 pt-0.5">{qr}</div>
          <div className="bg-slate-900 text-white text-[6px] font-bold leading-none py-0.5 mt-0.5 flex justify-center">
            Scan Me!
          </div>
        </div>
      );
    case "label-bottom-arrow":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 py-0.5">
          <div className="flex-1 min-h-0 w-full">{qr}</div>
          <ChevronUp
            className="w-2 h-2 text-slate-900 -mb-px"
            strokeWidth={3}
            aria-hidden
          />
          <ScanLabel />
        </div>
      );
    case "bordered-thin":
      return (
        <div className="w-full h-full p-0.5 border border-slate-900 flex flex-col">
          <div className="flex-1 min-h-0">{qr}</div>
          <div className="flex justify-center pt-0.5">
            <ScanLabel />
          </div>
        </div>
      );
    case "bordered-rounded":
      return (
        <div className="w-full h-full p-0.5 border-2 border-slate-900 rounded-md flex flex-col">
          <div className="flex-1 min-h-0">{qr}</div>
          <div className="flex justify-center pt-0.5">
            <ScanLabel />
          </div>
        </div>
      );
    case "label-top-bar":
      return (
        <div className="w-full h-full flex flex-col">
          <div className="bg-slate-900 text-white text-[6px] font-bold leading-none py-0.5 flex justify-center">
            Scan Me!
          </div>
          <div className="flex-1 min-h-0 px-0.5 pb-0.5 pt-0.5">{qr}</div>
        </div>
      );
    case "label-cursive":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 py-0.5">
          <div className="flex-1 min-h-0 w-full">{qr}</div>
          <span className="italic text-slate-900 text-[7px] font-semibold leading-none pt-0.5">
            Scan me!
          </span>
        </div>
      );
    case "speech-bubble":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 py-0.5">
          <div className="flex-1 min-h-0 w-full">{qr}</div>
          <span className="mt-0.5 rounded-full bg-slate-100 border border-slate-300 px-1 py-px text-[6px] font-bold text-slate-800 leading-none flex items-center gap-0.5">
            <MessageCircle className="w-2 h-2" strokeWidth={2.5} aria-hidden />
            Scan
          </span>
        </div>
      );
    case "gift-box":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <Gift
            className="w-2.5 h-2.5 text-slate-700 -mb-px"
            strokeWidth={2}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
    case "bow-ribbon":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <Heart
            className="w-2.5 h-2.5 text-rose-500 -mb-px fill-current"
            strokeWidth={0}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
    case "shopping-bag":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <ShoppingBag
            className="w-2.5 h-2.5 text-slate-700 -mb-px"
            strokeWidth={2}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
    case "envelope":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <Mail
            className="w-2.5 h-2.5 text-slate-700 -mb-px"
            strokeWidth={2}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
    case "scooter":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <Bike
            className="w-2.5 h-2.5 text-slate-700 -mb-px"
            strokeWidth={2}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
    case "hand":
      return (
        <div className="w-full h-full flex flex-col items-center px-0.5 pt-0.5">
          <Hand
            className="w-2.5 h-2.5 text-slate-700 -mb-px"
            strokeWidth={2}
            aria-hidden
          />
          <div className="flex-1 min-h-0 w-full">{qr}</div>
        </div>
      );
  }
}
