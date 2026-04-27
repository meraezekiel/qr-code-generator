import type { QRType } from "../../QRTypeGrid/implementation/QRTypeGridProps";
import type { MenuSubType } from "../../MenuTypeModal";

export type ContentViewType =
  | "pdf"
  | "links"
  | "vcard"
  | "business"
  | "video"
  | "images"
  | "facebook"
  | "instagram"
  | "social-media"
  | "whatsapp"
  | "mp3"
  | "menu"
  | "website";

export function useAddContentViewHandler(
  selectedType: QRType | null,
  menuSubType: MenuSubType | null,
) {
  if (selectedType?.id === "menu") {
    const viewType: ContentViewType =
      menuSubType === "pdf"
        ? "pdf"
        : menuSubType === "link"
          ? "website"
          : "menu";
    return { viewType };
  }

  const viewType: ContentViewType =
    selectedType?.id === "pdf"
      ? "pdf"
      : selectedType?.id === "list-of-links"
        ? "links"
        : selectedType?.id === "vcard"
          ? "vcard"
          : selectedType?.id === "business"
            ? "business"
            : selectedType?.id === "video"
              ? "video"
              : selectedType?.id === "images"
                ? "images"
                : selectedType?.id === "facebook"
                  ? "facebook"
                  : selectedType?.id === "instagram"
                    ? "instagram"
                    : selectedType?.id === "social-media"
                      ? "social-media"
                      : selectedType?.id === "whatsapp"
                        ? "whatsapp"
                        : selectedType?.id === "mp3"
                          ? "mp3"
                          : "website";

  return { viewType };
}
