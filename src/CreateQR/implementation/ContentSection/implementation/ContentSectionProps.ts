import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type ContentSectionProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onToggle: () => void;
  required?: boolean;
  helpHint?: boolean;
  children?: ReactNode;
};
