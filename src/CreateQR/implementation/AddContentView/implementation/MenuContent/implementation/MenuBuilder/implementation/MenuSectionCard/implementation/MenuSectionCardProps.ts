import type { MenuSection } from "../../useMenuBuilderHandler";

export type MenuSectionCardProps = {
  section: MenuSection;
  index: number;
  onToggle: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  onUpdateName: (value: string) => void;
  onUpdateDescription: (value: string) => void;
  onAddProduct: () => void;
  onRemoveProduct: (productId: string) => void;
  onMoveProductUp: (productId: string) => void;
  onMoveProductDown: (productId: string) => void;
  onToggleProduct: (productId: string) => void;
};
