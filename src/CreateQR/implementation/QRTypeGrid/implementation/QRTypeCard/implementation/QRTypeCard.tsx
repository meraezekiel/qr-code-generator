import { QRTypeCardProps } from "./QRTypeCardProps";
import { useQRTypeCardHandler } from "./useQRTypeCardHandler";

export function QRTypeCard({
  type,
  isSelected,
  onSelect,
  onHover,
  onLeave,
}: QRTypeCardProps) {
  const { onClick, onMouseEnter, onMouseLeave, onFocus, onBlur } =
    useQRTypeCardHandler({ type, onSelect, onHover, onLeave });
  const Icon = type.icon;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className={[
        "group relative flex flex-col items-center justify-center gap-2 px-3 py-5 rounded-xl border bg-white text-center transition-all",
        "hover:border-brand hover:shadow-md hover:-translate-y-0.5",
        isSelected
          ? "border-brand ring-2 ring-brand/30 shadow-md"
          : "border-slate-200 shadow-sm",
      ].join(" ")}
    >
      <span
        className={[
          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
          isSelected ? "bg-brand/10" : "bg-brand-subtle group-hover:bg-brand/10",
        ].join(" ")}
      >
        <Icon className="w-6 h-6 text-brand" strokeWidth={2} />
      </span>
      <span className="text-sm font-bold text-slate-900">{type.label}</span>
      <span className="text-[11px] leading-tight text-slate-500 px-1">
        {type.subtitle}
      </span>
    </button>
  );
}
