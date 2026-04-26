import type { ContactAddRowProps } from "./ContactAddRowProps";

export function useContactAddRowHandler({
  title,
}: Pick<ContactAddRowProps, "title">) {
  return { ariaLabel: title };
}
