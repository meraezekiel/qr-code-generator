import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuestionCard } from "./QuestionCard";
import { useDesignFAQHandler } from "./useDesignFAQHandler";

export function DesignFAQ() {
  const {
    visibleFaqs,
    selectedFaq,
    selectedId,
    canPrev,
    canNext,
    onSelect,
    onPrev,
    onNext,
  } = useDesignFAQHandler();

  const arrowBase =
    "w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-colors";

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">
        <span className="text-brand">Design</span>{" "}
        <span className="text-slate-900">and creation of QR codes</span>
      </h2>

      <div className="flex justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous questions"
          className={[
            arrowBase,
            canPrev
              ? "text-slate-600 hover:bg-slate-50"
              : "text-slate-300 cursor-not-allowed",
          ].join(" ")}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next questions"
          className={[
            arrowBase,
            canNext
              ? "text-slate-600 hover:bg-slate-50"
              : "text-slate-300 cursor-not-allowed",
          ].join(" ")}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {visibleFaqs.map((faq) => (
          <QuestionCard
            key={faq.id}
            question={faq.question}
            isActive={faq.id === selectedId}
            onClick={() => onSelect(faq.id)}
          />
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/60 px-8 py-8">
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
          {selectedFaq.question}
        </h3>
        <p className="text-slate-600 leading-relaxed">{selectedFaq.answer}</p>
      </div>
    </section>
  );
}
