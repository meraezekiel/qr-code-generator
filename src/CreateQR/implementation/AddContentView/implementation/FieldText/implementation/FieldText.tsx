import { FieldTextProps } from "./FieldTextProps";
import { useFieldTextHandler } from "./useFieldTextHandler";

export function FieldText({
  id,
  label,
  placeholder,
  required,
  focused,
  type,
  prefixIcon: PrefixIcon,
}: FieldTextProps) {
  const { inputClassName, inputType } = useFieldTextHandler({
    focused,
    type,
    prefixIcon: PrefixIcon,
  });

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-700">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      <div className="relative">
        {PrefixIcon && (
          <PrefixIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            strokeWidth={2}
            aria-hidden
          />
        )}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={inputClassName}
        />
      </div>
    </div>
  );
}
