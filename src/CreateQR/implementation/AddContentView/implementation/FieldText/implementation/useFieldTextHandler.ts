import type { FieldTextProps } from "./FieldTextProps";

export function useFieldTextHandler({
  focused,
  type,
  prefixIcon,
}: Pick<FieldTextProps, "focused" | "type" | "prefixIcon">) {
  const inputClassName = [
    "w-full rounded-lg py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
    prefixIcon ? "pl-10 pr-4" : "px-4",
    focused ? "border-2 border-slate-700" : "border border-slate-200",
  ].join(" ");

  const inputType = type ?? "text";

  return { inputClassName, inputType };
}
