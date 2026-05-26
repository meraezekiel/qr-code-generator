import { QrStage } from "../../StepStyle/implementation/QrStage";
import { FinalPanel } from "./FinalPanel";
import { SharePanel } from "./SharePanel";
import type { StepGetProps } from "./StepGetProps";

export function StepGet({ style, qrValue, selectedFormat, onSelectFormat }: StepGetProps) {
  return (
    <section className="atl-get-canvas">
      <FinalPanel
        style={style}
        qrValue={qrValue}
        selectedFormat={selectedFormat}
        onSelectFormat={onSelectFormat}
        renderStage={() => (
          <QrStage style={style} qrValue={qrValue} size={240} qrSize={208} padding={14} stagePadding={20} />
        )}
      />
      <SharePanel />
    </section>
  );
}
