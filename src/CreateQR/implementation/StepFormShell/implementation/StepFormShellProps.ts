import type { ReactNode } from "react";

export type StepFormShellPrimaryAction = {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
};

export type StepFormShellProps = {
  title: string;
  children: ReactNode;
  onBack?: () => void;
  backLabel?: string;
  primaryAction?: StepFormShellPrimaryAction;
};
