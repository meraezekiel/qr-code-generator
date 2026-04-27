import type { MenuSectionCardProps } from "./MenuSectionCardProps";

export function useMenuSectionCardHandler({
  index,
}: Pick<MenuSectionCardProps, "index">) {
  return {
    label: `Section ${index + 1}`,
  };
}
