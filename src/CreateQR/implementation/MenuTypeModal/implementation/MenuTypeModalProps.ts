export type MenuSubType = "digital" | "pdf" | "link";

export type MenuTypeModalProps = {
  onSelect: (subType: MenuSubType) => void;
  onClose: () => void;
};
