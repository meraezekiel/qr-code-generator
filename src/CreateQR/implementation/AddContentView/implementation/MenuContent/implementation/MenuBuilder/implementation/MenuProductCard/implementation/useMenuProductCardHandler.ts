import type { MenuProductCardProps } from "./MenuProductCardProps";

export function useMenuProductCardHandler({
  index,
}: Pick<MenuProductCardProps, "index">) {
  return {
    label: `Product ${index + 1}`,
  };
}
