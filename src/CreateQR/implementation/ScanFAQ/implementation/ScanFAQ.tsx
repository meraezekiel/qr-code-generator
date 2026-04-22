import { AccordionItem } from "./AccordionItem";
import { useScanFAQHandler } from "./useScanFAQHandler";

export function ScanFAQ() {
  const { faqs, openId, onToggle } = useScanFAQHandler();

  return (
    <section className="relative w-full overflow-hidden py-20">
      <div
        className="pointer-events-none absolute -left-40 top-32 w-[520px] h-[520px] rounded-full border border-slate-200/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-56 w-[320px] h-[320px] rounded-full border border-slate-200/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-16 top-80 w-[140px] h-[140px] rounded-full border border-slate-200/70"
        aria-hidden
      />

      <div className="relative w-full max-w-[1000px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12">
          <span className="text-slate-900">Scanning and printing of</span>{" "}
          <span className="text-brand">QR codes</span>
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => onToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
