import type { LucideIcon } from "lucide-react";

export type PreviewForProps = {
  typeId: string | null;
  content: Record<string, string>;
  label?: string;
  sub?: string;
  Icon?: LucideIcon;
};
