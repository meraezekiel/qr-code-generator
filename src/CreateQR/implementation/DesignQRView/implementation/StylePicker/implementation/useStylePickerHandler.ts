import type { StylePickerProps } from "./StylePickerProps";

export function useStylePickerHandler({
  value,
  onChange,
}: Pick<StylePickerProps, "value" | "onChange">) {
  const isSelected = (id: string) => id === value;
  const select = (id: string) => onChange(id);
  return { isSelected, select };
}
