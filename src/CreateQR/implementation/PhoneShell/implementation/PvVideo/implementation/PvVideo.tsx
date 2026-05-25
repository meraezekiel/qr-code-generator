import { Play } from "lucide-react";
import type { PvVideoProps } from "./PvVideoProps";

export function PvVideo({ content }: PvVideoProps) {
  return (
    <div className="atl-pv-website" style={{ background: "#0d0a08", color: "var(--cream)" }}>
      <div
        style={{
          flex: 1,
          background: "linear-gradient(180deg, #2a2723, #0d0a08)",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.95)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Play
            size={20}
            strokeWidth={0}
            style={{ color: "var(--ink)", marginLeft: 2, fill: "currentColor" }}
          />
        </div>
        <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
          <div
            style={{
              height: 3,
              background: "rgba(255,255,255,0.25)",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div style={{ width: "38%", height: "100%", background: "var(--lime)" }} />
          </div>
        </div>
      </div>
      <div style={{ padding: 12, background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ fontSize: 12, fontWeight: 700 }}>
          {content.url ? "Now playing" : "Your video"}
        </div>
        <div style={{ fontSize: 10, color: "var(--muted-deep)", marginTop: 2 }}>
          HD · 2:15
        </div>
      </div>
    </div>
  );
}
