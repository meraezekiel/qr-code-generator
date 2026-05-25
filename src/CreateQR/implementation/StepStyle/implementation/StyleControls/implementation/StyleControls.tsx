import { Upload } from "lucide-react";
import {
  PRESET_PALETTES,
  type CornerId,
  type ShapeId,
} from "../../../../useCreateQRHandler";
import type { StyleControlsProps } from "./StyleControlsProps";

const SHAPES: Array<{ id: ShapeId; sym: JSX.Element }> = [
  {
    id: "square",
    sym: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" fill="currentColor" />
        <rect x="3" y="14" width="7" height="7" fill="currentColor" />
        <rect x="14" y="14" width="7" height="7" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "dot",
    sym: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3.5" fill="currentColor" />
        <circle cx="18" cy="6" r="3.5" fill="currentColor" />
        <circle cx="6" cy="18" r="3.5" fill="currentColor" />
        <circle cx="18" cy="18" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "soft",
    sym: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "lines",
    sym: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="2" fill="currentColor" />
        <rect x="3" y="8" width="18" height="2" fill="currentColor" />
        <rect x="3" y="13" width="18" height="2" fill="currentColor" />
        <rect x="3" y="18" width="18" height="2" fill="currentColor" />
      </svg>
    ),
  },
];

const CORNERS: Array<{ id: CornerId; label: string; outer: number; inner: number }> = [
  { id: "square", label: "Square", outer: 0, inner: 0 },
  { id: "rounded", label: "Rounded", outer: 4, inner: 0 },
  { id: "circle", label: "Circle", outer: 13, inner: 5 },
];

export function StyleControls({ style, onStyleChange }: StyleControlsProps) {
  return (
    <div className="atl-style-controls">
      <div className="atl-style-block">
        <div className="atl-style-block__title">
          <span>
            Color <em>palette</em>
          </span>
          <span className="tag">Pattern · BG</span>
        </div>
        <div className="atl-swatch-row">
          {PRESET_PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              className="atl-swatch"
              data-selected={style.palette === p.id}
              onClick={() => onStyleChange({ palette: p.id })}
              style={{
                background: `linear-gradient(135deg, ${p.fg} 0 50%, ${p.bg} 50% 100%)`,
              }}
              title={p.id}
              aria-label={`Palette ${p.id}`}
            />
          ))}
        </div>
      </div>

      <div className="atl-style-block">
        <div className="atl-style-block__title">
          <span>
            Pattern <em>shape</em>
          </span>
          <span className="tag">Dot · Square · Soft</span>
        </div>
        <div className="atl-shape-row">
          {SHAPES.map((s) => (
            <button
              key={s.id}
              type="button"
              className="atl-shape-tile"
              data-selected={style.shape === s.id}
              onClick={() => onStyleChange({ shape: s.id })}
              aria-label={`Shape ${s.id}`}
            >
              {s.sym}
            </button>
          ))}
        </div>
      </div>

      <div className="atl-style-block">
        <div className="atl-style-block__title">
          <span>
            Finder <em>corners</em>
          </span>
          <span className="tag">3 markers</span>
        </div>
        <div className="atl-frame-row">
          {CORNERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="atl-frame-tile"
              data-selected={style.corner === f.id}
              onClick={() => onStyleChange({ corner: f.id })}
            >
              <svg width="32" height="32" viewBox="0 0 32 32">
                <rect
                  x="3"
                  y="3"
                  width="26"
                  height="26"
                  rx={f.outer}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <rect
                  x="11"
                  y="11"
                  width="10"
                  height="10"
                  rx={f.inner}
                  fill="currentColor"
                />
              </svg>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="atl-style-block">
        <div className="atl-style-block__title">
          <span>
            Brand <em>logo</em>
          </span>
          <span className="tag">Optional</span>
        </div>
        <button
          type="button"
          className="atl-input"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "flex-start",
            color: "var(--muted-deep)",
            cursor: "pointer",
          }}
        >
          <Upload size={16} strokeWidth={1.5} />
          <span>Drop a PNG or SVG to centre on the code</span>
        </button>
      </div>

      <div className="atl-style-block">
        <div className="atl-style-block__title">
          <span>
            Frame <em>caption</em>
          </span>
          <span className="tag">Below QR</span>
        </div>
        <input
          className="atl-input"
          placeholder="e.g. Scan to order, Tap to connect"
          value={style.caption}
          onChange={(e) => onStyleChange({ caption: e.target.value })}
        />
      </div>
    </div>
  );
}
