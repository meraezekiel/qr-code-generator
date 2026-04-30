import type { ContentSectionProps } from "./ContentSectionProps";

export function useContentSectionHandler({
  isOpen,
  onToggle,
}: Pick<ContentSectionProps, "isOpen" | "onToggle">) {
  const ariaLabel = isOpen ? "Collapse section" : "Expand section";
  return {
    ariaLabel,
    onToggle,
  };
}
