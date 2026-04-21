import { StepCard } from "./StepCard";
import { useSimpleStepsHandler } from "./useSimpleStepsHandler";

export function SimpleSteps() {
  const { steps } = useSimpleStepsHandler();

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
        Create your
        <br />
        QR code in three{" "}
        <span className="text-brand">simple steps</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-center gap-8 md:gap-0">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="flex-1 flex items-start md:items-center"
          >
            <div className="flex-1 min-w-0">
              <StepCard
                icon={step.icon}
                iconBg={step.iconBg}
                iconGlow={step.iconGlow}
                title={step.title}
                description={step.description}
              />
            </div>
            {idx < steps.length - 1 && (
              <div
                className="hidden md:flex items-center gap-2 shrink-0 -mt-28 px-2"
                aria-hidden
              >
                <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`} />
                <span className="w-10 border-t-2 border-dashed border-slate-300" />
                <span
                  className={`w-1.5 h-1.5 rounded-full ${steps[idx + 1].dotColor}`}
                />
                <span className="w-10 border-t-2 border-dashed border-slate-300" />
                <span
                  className={`w-1.5 h-1.5 rounded-full ${steps[idx + 1].dotColor}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
