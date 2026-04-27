import { useState } from "react";

export type SocialMediaSectionId =
  | "design"
  | "basic"
  | "image"
  | "socials"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type SocialMediaPalette = {
  id: string;
  swatch: string;
  hex: string;
};

export const SOCIAL_MEDIA_PALETTES: SocialMediaPalette[] = [
  { id: "blue", swatch: "bg-blue-600", hex: "#527AC9" },
  { id: "white", swatch: "bg-slate-100", hex: "#F4F4F5" },
  { id: "sky", swatch: "bg-sky-200", hex: "#BAE0FB" },
  { id: "violet", swatch: "bg-violet-300", hex: "#C4B5FD" },
  { id: "emerald", swatch: "bg-emerald-300", hex: "#6EE7B7" },
  { id: "amber", swatch: "bg-amber-300", hex: "#FCD34D" },
];

export function useSocialMediaContentHandler() {
  const [openSections, setOpenSections] = useState<Set<SocialMediaSectionId>>(
    () =>
      new Set<SocialMediaSectionId>(["design", "basic", "image", "socials"]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    SOCIAL_MEDIA_PALETTES[0].id,
  );

  const toggleSection = (id: SocialMediaSectionId) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isOpen = (id: SocialMediaSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const selectedPalette =
    SOCIAL_MEDIA_PALETTES.find((p) => p.id === selectedPaletteId) ??
    SOCIAL_MEDIA_PALETTES[0];

  return {
    isOpen,
    toggleSection,
    palettes: SOCIAL_MEDIA_PALETTES,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  };
}
