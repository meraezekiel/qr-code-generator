import { Globe, Mail, Phone } from "lucide-react";
import type { PvVcardProps } from "./PvVcardProps";

export function PvVcard({ content }: PvVcardProps) {
  const name = content.name || "Your Name";
  const title = content.title || "Your title";
  const init =
    name
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "A";
  const empty = !content.email && !content.phone && !content.website;
  return (
    <div className="atl-pv-vcard">
      <div className="cover">
        <div className="avatar">{init}</div>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
      <div className="rows">
        {content.email && (
          <div className="row">
            <Mail size={12} strokeWidth={2} />
            <span>{content.email}</span>
          </div>
        )}
        {content.phone && (
          <div className="row">
            <Phone size={12} strokeWidth={2} />
            <span>{content.phone}</span>
          </div>
        )}
        {content.website && (
          <div className="row">
            <Globe size={12} strokeWidth={2} />
            <span>{content.website}</span>
          </div>
        )}
        {empty && (
          <>
            <div className="row" style={{ opacity: 0.5 }}>
              <Mail size={12} strokeWidth={2} />
              <span>—</span>
            </div>
            <div className="row" style={{ opacity: 0.5 }}>
              <Phone size={12} strokeWidth={2} />
              <span>—</span>
            </div>
          </>
        )}
      </div>
      <div className="cta">
        <button type="button">Save to contacts</button>
      </div>
    </div>
  );
}
