import type { ReactNode } from "react";
import { ScanLine, Slash } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { ColorField } from "../../ColorField";
import { StylePicker } from "../../StylePicker";
import {
  CornerDotStyleId,
  CornerFrameStyleId,
  CornersSectionProps,
} from "./CornersSectionProps";
import { useCornersSectionHandler } from "./useCornersSectionHandler";

export function CornersSection({
  cornerFrameStyle,
  cornerDotStyle,
  cornerFrameColor,
  cornerDotColor,
  onCornerFrameStyleChange,
  onCornerDotStyleChange,
  onCornerFrameColorChange,
  onCornerDotColorChange,
  isOpen,
  onToggle,
}: CornersSectionProps) {
  const { frameIds, dotIds } = useCornersSectionHandler();

  const frameItems = frameIds.map((id) => ({
    id,
    render: () => renderCornerFrame(id),
  }));
  const dotItems = dotIds.map((id) => ({ id, render: () => renderCornerDot(id) }));

  return (
    <ContentSection
      icon={ScanLine}
      title="QR Code Corners"
      subtitle="Select your QR code's corner style"
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-col gap-5 pt-3">
        <span className="text-sm font-bold text-slate-900">Corners</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-700">
              Frame around corner dots style
            </span>
            <StylePicker
              items={frameItems}
              value={cornerFrameStyle}
              onChange={(id) => onCornerFrameStyleChange(id as CornerFrameStyleId)}
              columns={4}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-700">
              Corner dots type
            </span>
            <StylePicker
              items={dotItems}
              value={cornerDotStyle}
              onChange={(id) => onCornerDotStyleChange(id as CornerDotStyleId)}
              columns={4}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorField
            label="Frame around corner dots color"
            value={cornerFrameColor}
            onChange={onCornerFrameColorChange}
          />
          <ColorField
            label="Corner dots color"
            value={cornerDotColor}
            onChange={onCornerDotColorChange}
          />
        </div>
      </div>
    </ContentSection>
  );
}

function NoneSwatch() {
  return (
    <span className="w-7 h-7 rounded-full border-2 border-slate-300 flex items-center justify-center">
      <Slash className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
    </span>
  );
}

function renderCornerFrame(id: CornerFrameStyleId): ReactNode {
  switch (id) {
    case "none":
      return <NoneSwatch />;
    case "ring":
      return <span className="w-7 h-7 rounded-full border-[3px] border-slate-900" />;
    case "square":
      return <span className="w-7 h-7 rounded-md border-[3px] border-slate-900" />;
    case "square-thin":
      return <span className="w-7 h-7 rounded-md border border-slate-900" />;
    case "square-rounded":
      return <span className="w-7 h-7 rounded-lg border-[3px] border-slate-900" />;
    case "square-flat":
      return <span className="w-7 h-7 border-[3px] border-slate-900" />;
  }
}

function renderCornerDot(id: CornerDotStyleId): ReactNode {
  switch (id) {
    case "none":
      return <NoneSwatch />;
    case "dot":
      return <span className="w-5 h-5 rounded-full bg-slate-900" />;
    case "square":
      return <span className="w-5 h-5 rounded-sm bg-slate-900" />;
    case "square-bold":
      return <span className="w-6 h-6 rounded-sm bg-slate-900" />;
    case "square-rounded":
      return <span className="w-5 h-5 rounded-md bg-slate-900" />;
    case "diamond":
      return <span className="w-5 h-5 bg-slate-900 rotate-45 rounded-sm" />;
    case "square-thin":
      return <span className="w-4 h-4 bg-slate-900" />;
    case "block":
      return <span className="w-6 h-6 bg-slate-900" />;
  }
}
