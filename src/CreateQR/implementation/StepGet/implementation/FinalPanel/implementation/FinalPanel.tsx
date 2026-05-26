import type { QrFormat } from "../../../../useCreateQRHandler";
import type { FinalPanelProps } from "./FinalPanelProps";

const FORMATS: Array<{ ext: QrFormat; label: string; size: string }> = [
  { ext: "png", label: "PNG", size: "2048px" },
  { ext: "svg", label: "SVG", size: "vector" },
  { ext: "pdf", label: "PDF", size: "print" },
  { ext: "eps", label: "EPS", size: "vector" },
];

export function FinalPanel({
  style,
  selectedFormat,
  onSelectFormat,
  renderStage,
}: FinalPanelProps) {
  return (
    <div className="atl-get-final">
      <div className="atl-hero__kicker" style={{ margin: 0 }}>
        <span>Step 03</span> · Ship it
      </div>
      <h2 className="atl-get-final__head">
        Your QR is <em>ready.</em>
      </h2>
      <p className="atl-get-final__sub">
        Download in the format that fits your medium. Dynamic — so the destination
        stays editable.
      </p>

      {renderStage()}

      {style.caption && (
        <div
          className="atl-caption-pill"
          style={{ padding: "8px 22px", fontSize: 11, letterSpacing: "0.18em" }}
        >
          {style.caption}
        </div>
      )}

      <div className="atl-format-row" role="radiogroup" aria-label="Download format">
        {FORMATS.map((f) => {
          const selected = f.ext === selectedFormat;
          return (
            <button
              key={f.ext}
              type="button"
              role="radio"
              aria-checked={selected}
              className="atl-format-tile"
              data-selected={selected || undefined}
              onClick={() => onSelectFormat(f.ext)}
            >
              <div className="ext">{f.label}</div>
              <div className="size">{f.size}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
