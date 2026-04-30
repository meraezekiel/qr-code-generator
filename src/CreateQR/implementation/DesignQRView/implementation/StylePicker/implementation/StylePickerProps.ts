import type { ReactNode } from "react";

export type StylePickerItem = {
  id: string;
  render: () => ReactNode;
  label?: string;
};

export type StylePickerProps = {
  items: StylePickerItem[];
  value: string;
  onChange: (id: string) => void;
  columns: number;
};
