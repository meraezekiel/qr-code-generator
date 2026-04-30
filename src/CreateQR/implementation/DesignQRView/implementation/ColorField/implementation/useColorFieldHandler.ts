import { useId } from "react";
import type { ColorFieldProps } from "./ColorFieldProps";

const HEX_PATTERN = /^#?[0-9a-fA-F]{0,6}$/;

export function useColorFieldHandler({
  value,
  onChange,
}: Pick<ColorFieldProps, "value" | "onChange">) {
  const inputId = useId();

  const onTextChange = (next: string) => {
    if (!HEX_PATTERN.test(next)) return;
    const normalized = next.startsWith("#") ? next : `#${next}`;
    onChange(normalized.toUpperCase());
  };

  const onPickerChange = (next: string) => {
    onChange(next.toUpperCase());
  };

  return { inputId, onTextChange, onPickerChange, swatch: value };
}
