import { QuestionCardProps } from "./QuestionCardProps";

export function QuestionCard({ question, isActive, onClick }: QuestionCardProps) {
  const base =
    "w-full h-full min-h-[120px] rounded-xl px-6 py-6 text-center text-slate-700 font-medium bg-white transition-colors flex items-center justify-center";
  const border = isActive
    ? "border-2 border-brand shadow-sm"
    : "border border-slate-200 hover:border-slate-300";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[base, border].join(" ")}
    >
      <span className="leading-snug">{question}</span>
    </button>
  );
}
