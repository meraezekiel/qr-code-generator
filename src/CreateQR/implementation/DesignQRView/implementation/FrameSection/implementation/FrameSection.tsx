import { Slash, Square } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { Frame } from "../../Frame";
import { StylePicker } from "../../StylePicker";
import { FrameSectionProps, FrameStyleId } from "./FrameSectionProps";
import { MiniQR } from "./MiniQR";
import { useFrameSectionHandler } from "./useFrameSectionHandler";

export function FrameSection({ value, onChange, isOpen, onToggle }: FrameSectionProps) {
  const { frameIds, sampleSize, sampleBitGrid } = useFrameSectionHandler();

  const items = frameIds.map((id) => ({
    id,
    render: () =>
      id === "none" ? (
        <span className="w-7 h-7 rounded-full border-2 border-slate-300 flex items-center justify-center">
          <Slash className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
        </span>
      ) : (
        <Frame frameId={id} text="Scan Me!">
          <MiniQR size={sampleSize} bitGrid={sampleBitGrid} />
        </Frame>
      ),
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
