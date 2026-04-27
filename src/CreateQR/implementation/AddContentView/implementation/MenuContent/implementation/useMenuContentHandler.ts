import { useState } from "react";

export type MenuSectionId =
  | "design"
  | "info"
  | "menu"
  | "hours"
  | "contact"
  | "socials"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type MenuPalette = {
  id: string;
  swatch: string;
  hex: string;
};

export const MENU_PALETTES: MenuPalette[] = [
  { id: "blue", swatch: "bg-blue-600", hex: "#527AC9" },
  { id: "white", swatch: "bg-slate-100", hex: "#F4F4F5" },
  { id: "sky", swatch: "bg-sky-200", hex: "#BAE0FB" },
  { id: "violet", swatch: "bg-violet-300", hex: "#C4B5FD" },
  { id: "emerald", swatch: "bg-emerald-300", hex: "#6EE7B7" },
  { id: "amber", swatch: "bg-amber-300", hex: "#FCD34D" },
];

export function useMenuContentHandler() {
  const [openSections, setOpenSections] = useState<Set<MenuSectionId>>(
    () =>
      new Set<MenuSectionId>([
        "design",
        "info",
        "menu",
        "hours",
        "contact",
        "socials",
      ]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    MENU_PALETTES[0].id,
  );

  const toggleSection = (id: MenuSectionId) => {
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

  const isOpen = (id: MenuSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const selectedPalette =
    MENU_PALETTES.find((p) => p.id === selectedPaletteId) ?? MENU_PALETTES[0];

  return {
    isOpen,
    toggleSection,
    palettes: MENU_PALETTES,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  };
}
