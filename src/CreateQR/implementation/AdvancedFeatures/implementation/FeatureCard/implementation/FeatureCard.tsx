import { FeatureCardProps } from "./FeatureCardProps";

export function FeatureCard({
  icon: Icon,
  toneClass,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <div
        className={[
          "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
          toneClass,
        ].join(" ")}
      >
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
