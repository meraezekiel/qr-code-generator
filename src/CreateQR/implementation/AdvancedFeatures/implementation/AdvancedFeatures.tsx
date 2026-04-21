import { FeatureCard } from "./FeatureCard";
import { useAdvancedFeaturesHandler } from "./useAdvancedFeaturesHandler";

export function AdvancedFeatures() {
  const { features, toneClasses } = useAdvancedFeaturesHandler();

  return (
    <section className="relative w-full overflow-hidden py-20">
      <div
        className="pointer-events-none absolute -left-40 top-24 w-[520px] h-[520px] rounded-full border border-slate-200/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-48 w-[320px] h-[320px] rounded-full border border-slate-200/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-16 top-72 w-[140px] h-[140px] rounded-full border border-slate-200/70"
        aria-hidden
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Experience the most
          <br />
          <span className="text-brand">advanced QR code</span>{" "}
          <span className="text-slate-900">generator</span>
        </h2>

        <p className="text-center text-base md:text-lg text-slate-500 max-w-[760px] mx-auto mb-16 leading-relaxed">
          Our QR code software is highly functional and customizable, yet easy
          to use for all. It&apos;s the only tool you&apos;ll need to build
          powerful, high-performing QR codes that can boost engagement and drive
          conversions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              toneClass={toneClasses[feature.tone]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
