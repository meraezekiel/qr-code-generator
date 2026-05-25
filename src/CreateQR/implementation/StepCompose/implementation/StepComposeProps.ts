import type {
  CategoryId,
  CreateQRState,
  QRTypeInfo,
} from "../../useCreateQRHandler";

export type StepComposeProps = {
  state: CreateQRState;
  currentType: QRTypeInfo | null;
  onSelectType: (id: string) => void;
  onContentChange: (key: string, value: string) => void;
  onQueryChange: (q: string) => void;
  onCategoryChange: (c: CategoryId) => void;
};
