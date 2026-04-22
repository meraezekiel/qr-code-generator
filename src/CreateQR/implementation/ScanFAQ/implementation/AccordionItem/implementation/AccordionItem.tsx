import { ChevronDown } from "lucide-react";
import { AccordionItemProps } from "./AccordionItemProps";

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
          {question}
        </span>
        <ChevronDown
          className={[
            "w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
          strokeWidth={2.5}
        />
      </button>
      {isOpen && (
        <div className="px-8 pb-6 -mt-2">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
