import { QrStage } from "./QrStage";
import { StyleControls } from "./StyleControls";
import type { StepStyleProps } from "./StepStyleProps";

export function StepStyle({ style, qrValue, currentType, onStyleChange }: StepStyleProps) {
  return (
    <section className="atl-style-canvas">
      <StyleControls style={style} onStyleChange={onStyleChange} />
      <div className="atl-style-stage">
        <div className="atl-preview-meta">
          <div className="atl-live-dot" /> Preview · {currentType?.label || "Untitled"}
        </div>
        <QrStage style={style} qrValue={qrValue} size={260} qrSize={228} padding={16} />
        {style.caption && (
          <div className="atl-caption-pill">{style.caption}</div>
        )}
      </div>
    </section>
  );
}
