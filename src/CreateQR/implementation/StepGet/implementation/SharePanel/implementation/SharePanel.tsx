import { Check, Link, Mail, MessageSquare, Printer } from "lucide-react";

const SHARES = [
  { Icon: Mail, label: "Email it" },
  { Icon: MessageSquare, label: "Text it" },
  { Icon: Link, label: "Copy link" },
  { Icon: Printer, label: "Print it" },
];

const BULLETS = [
  "Edit destination any time — no reprint",
  "Track scans, locations, devices",
  "Unlimited codes on the free plan",
  "High-res for print and digital",
];

export function SharePanel() {
  return (
    <div className="atl-get-side">
      <div className="atl-get-side__title">
        Or, <em>send</em> it elsewhere.
      </div>
      <div className="atl-get-side__sub">We'll attach it where you need.</div>
      <div className="atl-share-grid">
        {SHARES.map((s) => (
          <button key={s.label} type="button" className="atl-share-tile">
            <s.Icon size={16} strokeWidth={1.5} /> {s.label}
          </button>
        ))}
      </div>
      <ul className="atl-feat-bul">
        {BULLETS.map((t) => (
          <li key={t}>
            <Check size={14} strokeWidth={2.25} /> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
