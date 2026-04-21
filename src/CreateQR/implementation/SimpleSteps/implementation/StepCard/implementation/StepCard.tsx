import { StepCardProps } from "./StepCardProps";

export function StepCard({
  icon: Icon,
  iconBg,
  iconGlow,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-[280px] mx-auto">
      <div
        className={[
          "w-20 h-20 rounded-2xl flex items-center justify-center mb-6",
          iconBg,
          iconGlow,
        ].join(" ")}
      >
        <Icon className="w-9 h-9 text-white" strokeWidth={2.25} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 whitespace-pre-line leading-snug mb-3">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
