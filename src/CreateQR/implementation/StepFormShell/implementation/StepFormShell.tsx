import { ArrowLeft, ArrowRight } from "lucide-react";
import { StepFormShellProps } from "./StepFormShellProps";

export function StepFormShell({
  title,
  children,
  onBack,
  backLabel = "Back",
  primaryAction,
}: StepFormShellProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-[1400px] mx-auto px-6 pt-8 pb-10 flex flex-col gap-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            {title}
          </h1>
          {children}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-sm font-bold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              {backLabel}
            </button>
          ) : (
            <span />
          )}
          {primaryAction && (
            <button
              type="button"
              onClick={primaryAction.onClick}
              disabled={primaryAction.disabled}
              aria-disabled={primaryAction.disabled}
              className="inline-flex items-center gap-2 px-10 py-3 rounded-lg bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
            >
              {primaryAction.label}
              {primaryAction.icon ?? (
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
