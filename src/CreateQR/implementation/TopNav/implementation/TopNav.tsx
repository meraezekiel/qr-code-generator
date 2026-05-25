import { Check, HelpCircle, User } from "lucide-react";
import type { TopNavProps } from "./TopNavProps";

const STEP_LABELS = ["Compose", "Style", "Get"] as const;

export function TopNav({ step, goTo }: TopNavProps) {
  return (
    <nav className="atl-nav">
      <div className="atl-nav__brand">
        <div className="atl-nav__mark">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3h-3z M20 14h1 M14 20h3 M20 20h1" />
          </svg>
        </div>
        <div className="atl-nav__wm">
          Online <em>QR</em>
        </div>
      </div>

      <div className="atl-nav__steps" role="tablist" aria-label="Steps">
        {STEP_LABELS.map((lbl, i) => {
          const state = i === step ? "active" : i < step ? "done" : "idle";
          return (
            <button
              key={lbl}
              type="button"
              role="tab"
              aria-selected={i === step}
              className="atl-chip"
              data-state={state}
              onClick={() => goTo(i)}
            >
              <span className="atl-chip__num">
                {i < step ? <Check size={11} strokeWidth={2.5} /> : `0${i + 1}`}
              </span>
              <span>{lbl}</span>
            </button>
          );
        })}
      </div>

      <div className="atl-nav__right">
        <button type="button" className="atl-nav__btn">
          <HelpCircle size={14} strokeWidth={1.75} /> Help
        </button>
        <button type="button" className="atl-nav__btn">
          <User size={14} strokeWidth={1.75} /> Sign in
        </button>
      </div>
    </nav>
  );
}
