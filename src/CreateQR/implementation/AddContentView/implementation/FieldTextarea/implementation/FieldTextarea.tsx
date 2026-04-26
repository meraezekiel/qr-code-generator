import { FieldTextareaProps } from "./FieldTextareaProps";
import { useFieldTextareaHandler } from "./useFieldTextareaHandler";

export function FieldTextarea({
  id,
  label,
  placeholder,
  counter,
  rows,
}: FieldTextareaProps) {
  const { resolvedRows } = useFieldTextareaHandler({ rows });

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          placeholder={placeholder}
          rows={resolvedRows}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 resize-none focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
        {counter && (
          <span className="absolute bottom-2 right-3 text-[11px] text-slate-400">
            {counter}
          </span>
        )}
      </div>
    </div>
  );
}
