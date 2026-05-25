import { Heart, MessageCircle, Send } from "lucide-react";
import type { PvInstagramProps } from "./PvInstagramProps";

export function PvInstagram({ content }: PvInstagramProps) {
  const handle = (content.handle || "@yourbrand").replace(/^@/, "");
  return (
    <div className="atl-pv-ig">
      <div className="top">
        <div className="logo">Instagram</div>
        <Send size={16} strokeWidth={1.75} />
      </div>
      <div className="stories">
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="story" key={i}>
            <div className="avi" />
          </div>
        ))}
      </div>
      <div className="post">
        <div className="img" />
        <div className="actions">
          <Heart size={16} strokeWidth={1.75} />
          <MessageCircle size={16} strokeWidth={1.75} />
          <Send size={16} strokeWidth={1.75} />
        </div>
        <div style={{ padding: "0 14px 12px", fontSize: 11, color: "var(--ink)" }}>
          <strong>@{handle}</strong> · Tap to follow
        </div>
      </div>
    </div>
  );
}
