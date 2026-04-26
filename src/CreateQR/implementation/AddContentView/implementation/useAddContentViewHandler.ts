import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";

export type ContentViewType = "pdf" | "links" | "vcard" | "website";

export function useAddContentViewHandler(selectedType: QRType | null) {
  const viewType: ContentViewType =
    selectedType?.id === "pdf"
      ? "pdf"
      : selectedType?.id === "list-of-links"
        ? "links"
        : selectedType?.id === "vcard"
          ? "vcard"
          : "website";

  return { viewType };
}
