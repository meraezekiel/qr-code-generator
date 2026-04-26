import { Plus } from "lucide-react";
import { ContactAddRowProps } from "./ContactAddRowProps";
import { useContactAddRowHandler } from "./useContactAddRowHandler";

export function ContactAddRow({ title }: ContactAddRowProps) {
  const { ariaLabel } = useContactAddRowHandler({ title });

  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
      <span className="text-sm font-bold text-slate-900">{title}</span>
      <button
        type="button"
        aria-label={ariaLabel}
        className="w-8 h-8 rounded-md bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-colors shadow-sm"
      >
        <Plus className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
