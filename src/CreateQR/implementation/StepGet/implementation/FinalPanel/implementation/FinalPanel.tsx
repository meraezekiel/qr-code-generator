import type { FinalPanelProps } from "./FinalPanelProps";

type Format = "png" | "svg" | "pdf" | "eps";
const FORMATS: Array<{ ext: Format; label: string; size: string; rec?: boolean }> = [
  { ext: "png", label: "PNG", size: "2048px", rec: true },
  { ext: "svg", label: "SVG", size: "vector" },
  { ext: "pdf", label: "PDF", size: "print" },
  { ext: "eps", label: "EPS", size: "vector" },
];

export function FinalPanel({ style, onDownload, renderStage }: FinalPanelProps) {
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

      <div className="atl-format-row">
        {FORMATS.map((f) => (
          <button
            key={f.ext}
            type="button"
            className="atl-format-tile"
            data-recommended={f.rec || undefined}
            onClick={() => onDownload(f.ext)}
          >
            <div className="ext">{f.label}</div>
            <div className="size">{f.size}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
