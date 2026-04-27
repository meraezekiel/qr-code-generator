export type MenuProductCardProps = {
  index: number;
  collapsed: boolean;
  onToggle: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
};
