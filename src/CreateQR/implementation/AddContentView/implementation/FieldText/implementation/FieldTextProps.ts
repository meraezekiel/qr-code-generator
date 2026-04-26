import type { LucideIcon } from "lucide-react";

export type FieldTextProps = {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  focused?: boolean;
  type?: "text" | "url";
  prefixIcon?: LucideIcon;
};
