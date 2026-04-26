import { ChevronRight, HelpCircle } from "lucide-react";
import { ContentSectionProps } from "./ContentSectionProps";
import { useContentSectionHandler } from "./useContentSectionHandler";

export function ContentSection({
  icon: Icon,
  title,
  subtitle,
  isOpen,
  onToggle,
  required,
  helpHint,
  children,
}: ContentSectionProps) {
  const { ariaLabel } = useContentSectionHandler({ isOpen, onToggle });

  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="shrink-0 w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
          <Icon className="w-5 h-5" strokeWidth={2} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="text-base font-bold text-slate-900">{title}</h2>
            {required && (
              <span className="text-rose-500 text-base leading-none">*</span>
            )}
            {helpHint && (
              <HelpCircle
                className="w-4 h-4 text-slate-400"
                strokeWidth={2}
                aria-hidden
              />
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        <ChevronRight
          className={[
            "w-5 h-5 text-slate-400 transition-transform shrink-0",
            isOpen ? "rotate-90" : "",
          ].join(" ")}
          strokeWidth={2.5}
          aria-hidden
        />
      </button>

      {isOpen && children && (
        <div className="px-5 pt-2 pb-6 border-t border-slate-100">
          {children}
        </div>
      )}
    </section>
  );
}
