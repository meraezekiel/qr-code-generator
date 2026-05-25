import { Ticket } from "lucide-react";
import type { PvCouponProps } from "./PvCouponProps";

export function PvCoupon({ content }: PvCouponProps) {
  return (
    <div
      className="atl-pv-wifi"
      style={{ background: "linear-gradient(180deg, #fff1ec, var(--white))" }}
    >
      <div className="top">
        <div
          className="ic-ring"
          style={{ background: "#fde2d3", color: "var(--clay)" }}
        >
          <Ticket size={26} strokeWidth={1.75} />
        </div>
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--clay)",
            fontWeight: 600,
          }}
        >
          Special offer
        </p>
        <h5 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1, marginTop: 4 }}>
          {content.discount || "25% OFF"}
        </h5>
        <p>Your next purchase</p>
      </div>
      <div
        className="card"
        style={{ alignItems: "center", textAlign: "center", padding: 14 }}
      >
        <span className="v" style={{ fontSize: 14, letterSpacing: 4 }}>
          {content.code || "SAVE25"}
        </span>
        <div className="k" style={{ marginTop: 4, fontSize: 10 }}>
          Tap to copy
        </div>
      </div>
      <div
        className="connect"
        style={{ background: "var(--clay)", color: "var(--white)" }}
      >
        Redeem now
      </div>
    </div>
  );
}
