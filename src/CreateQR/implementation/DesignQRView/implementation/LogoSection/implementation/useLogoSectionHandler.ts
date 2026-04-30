import { useId, useRef } from "react";
import { toast } from "sonner";
import type { LogoSectionProps } from "./LogoSectionProps";

const MAX_BYTES = 1024 * 1024;

export function useLogoSectionHandler({
  onLogoChange,
}: Pick<LogoSectionProps, "onLogoChange">) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = useId();

  const triggerPicker = () => inputRef.current?.click();

  const onFileSelected = (file: File | null) => {
    if (!file) return;
    if (file.size > MAX_BYTES) {
      toast.error("Logo too large", {
        description: "Maximum file size is 1 MB.",
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        onLogoChange(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clear = () => {
    if (inputRef.current) inputRef.current.value = "";
    onLogoChange(null);
  };

  return { inputRef, inputId, triggerPicker, onFileSelected, clear };
}
