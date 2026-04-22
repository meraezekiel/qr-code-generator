import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 pt-10 pb-16">
      <div className="rounded-2xl bg-slate-800 text-white px-8 md:px-12 py-10 md:py-14 flex items-center justify-between gap-8">
        <div className="max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Sign up today to build your customizable and fully trackable QR
            codes. Unlock advanced insights, implement your branding and make
            updates to your QR codes at any time.
          </p>
        </div>

        <button
          type="button"
          aria-label="Get started"
          className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center hover:bg-brand hover:text-white text-brand transition-colors"
        >
          <ArrowRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
