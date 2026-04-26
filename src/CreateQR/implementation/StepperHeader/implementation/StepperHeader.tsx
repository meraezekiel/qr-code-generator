import { ArrowRight, Check, HelpCircle, QrCode } from "lucide-react";
import { StepperHeaderProps } from "./StepperHeaderProps";
import { useStepperHeaderHandler } from "./useStepperHeaderHandler";

export function StepperHeader({ activeStep }: StepperHeaderProps) {
  const { steps, isActive, isCompleted } = useStepperHeaderHandler(activeStep);

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="w-full max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-md bg-brand-subtle flex items-center justify-center">
            <QrCode className="w-5 h-5 text-brand" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] text-slate-500">Online</div>
            <div className="text-sm font-bold text-slate-900">QR Generator</div>
          </div>
        </div>

        <ol className="hidden md:flex items-center gap-3 overflow-x-auto">
          {steps.map((step, idx) => {
            const active = isActive(step.id);
            const done = isCompleted(step.id);
            return (
              <li key={step.id} className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <span
                    className={[
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                      active
                        ? "bg-brand text-white"
                        : done
                          ? "bg-brand text-white"
                          : "bg-slate-200 text-slate-500",
                    ].join(" ")}
                  >
                    {done ? (
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    ) : (
                      step.id
                    )}
                  </span>
                  <span
                    className={[
                      "text-sm font-medium whitespace-nowrap",
                      active
                        ? "text-slate-900"
                        : done
                          ? "text-slate-700"
                          : "text-slate-400",
                    ].join(" ")}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                )}
              </li>
            );
          })}
        </ol>

        <button
          type="button"
          aria-label="Help"
          className="shrink-0 w-9 h-9 rounded-md border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
