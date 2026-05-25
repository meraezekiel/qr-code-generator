import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import type { PvWebsiteProps } from "./PvWebsiteProps";

export function PvWebsite({ content }: PvWebsiteProps) {
  const url = (content.url || "yourbrand.com").replace(/^https?:\/\//, "");
  return (
    <div className="atl-pv-website">
      <div className="browser-bar">
        <ChevronLeft size={12} strokeWidth={2} />
        <ChevronRight size={12} strokeWidth={2} />
        <div className="url">{url}</div>
        <MoreHorizontal size={12} strokeWidth={2} />
      </div>
      <div className="body">
        <div className="hbar" />
        <div className="pbar" style={{ width: "90%" }} />
        <div className="pbar" style={{ width: "75%" }} />
        <div className="img-block" />
        <div className="pbar" />
        <div className="pbar" style={{ width: "85%" }} />
        <div className="pbar" style={{ width: "60%" }} />
      </div>
    </div>
  );
}
