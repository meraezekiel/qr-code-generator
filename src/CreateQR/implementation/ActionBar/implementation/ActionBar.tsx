import { Fragment } from "react";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";
import type { ActionBarProps } from "./ActionBarProps";

const STEPS = ["Compose", "Style", "Get"] as const;

export function ActionBar({ step, goTo, canAdvance, onDownload }: ActionBarProps) {
  return (
    <div className="atl-actionbar">
      <div className="atl-actionbar__left">
        {step > 0 && (
          <button
            type="button"
            className="atl-btn atl-btn-ghost"
            onClick={() => goTo(step - 1)}
          >
            <ArrowLeft size={14} strokeWidth={2} /> Back
          </button>
        )}
        <span className="atl-action-meta">
          {`${(step + 1).toString().padStart(2, "0")} / 03 · ${STEPS[step]}`}
        </span>
      </div>

      <div className="atl-actionbar__center">
        {STEPS.map((label, i) => (
          <Fragment key={label}>
            {i > 0 && <span className="atl-sep" />}
            <span className="atl-crumb" data-active={i === step}>
              {i < step ? (
                <Check size={11} strokeWidth={2.5} />
              ) : (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 9999,
                    background: i === step ? "var(--ink)" : "var(--hairline)",
                    display: "inline-block",
                  }}
                />
              )}
              {label}
            </span>
          </Fragment>
        ))}
      </div>

      <div>
        {step < 2 ? (
          <button
            type="button"
            className="atl-btn atl-btn-primary"
            disabled={!canAdvance}
            onClick={() => goTo(step + 1)}
          >
            Continue
            <ArrowRight size={14} strokeWidth={2} />
          </button>
        ) : (
          <button
            type="button"
            className="atl-btn atl-btn-primary"
            onClick={onDownload}
          >
            <Download size={14} strokeWidth={2} />
            Download PNG
          </button>
        )}
      </div>
    </div>
  );
}
