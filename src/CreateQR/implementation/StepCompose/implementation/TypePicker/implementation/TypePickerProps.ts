import type { CategoryId } from "../../../../useCreateQRHandler";

export type TypePickerProps = {
  query: string;
  category: CategoryId;
  selectedId: string | null;
  onQueryChange: (q: string) => void;
  onCategoryChange: (c: CategoryId) => void;
  onSelectType: (id: string) => void;
};
