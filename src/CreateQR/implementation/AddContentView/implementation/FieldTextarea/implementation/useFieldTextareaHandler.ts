import type { FieldTextareaProps } from "./FieldTextareaProps";

export function useFieldTextareaHandler({
  rows,
}: Pick<FieldTextareaProps, "rows">) {
  return { resolvedRows: rows ?? 3 };
}
