import { useState } from "react";

export type BusinessSectionId =
  | "design"
  | "info"
  | "hours"
  | "location"
  | "contact"
  | "socials"
  | "about"
  | "facilities"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type BusinessPalette = {
  id: string;
  primary: string;
  secondary: string;
  hexPrimary: string;
  hexSecondary: string;
};

export const BUSINESS_PALETTES: BusinessPalette[] = [
  {
    id: "blue-emerald",
    primary: "bg-blue-600",
    secondary: "bg-emerald-400",
    hexPrimary: "#527AC9",
    hexSecondary: "#7EC09F",
  },
  {
    id: "white-black",
    primary: "bg-slate-100",
    secondary: "bg-slate-900",
    hexPrimary: "#F4F4F5",
    hexSecondary: "#0F172A",
  },
  {
    id: "sky-blue",
    primary: "bg-sky-200",
    secondary: "bg-blue-600",
    hexPrimary: "#BAE0FB",
    hexSecondary: "#2563EB",
  },
  {
    id: "violet",
    primary: "bg-violet-300",
    secondary: "bg-slate-900",
    hexPrimary: "#C4B5FD",
    hexSecondary: "#0F172A",
  },
  {
    id: "emerald",
    primary: "bg-emerald-300",
    secondary: "bg-slate-700",
    hexPrimary: "#6EE7B7",
    hexSecondary: "#334155",
  },
  {
    id: "amber",
    primary: "bg-amber-300",
    secondary: "bg-slate-900",
    hexPrimary: "#FCD34D",
    hexSecondary: "#0F172A",
  },
];

export function useBusinessContentHandler() {
  const [openSections, setOpenSections] = useState<Set<BusinessSectionId>>(
    () =>
      new Set<BusinessSectionId>([
        "design",
        "info",
        "hours",
        "location",
        "contact",
        "socials",
      ]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    BUSINESS_PALETTES[0].id,
  );
  const [swapped, setSwapped] = useState(false);

  const toggleSection = (id: BusinessSectionId) => {
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

  const isOpen = (id: BusinessSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const swapColors = () => setSwapped((s) => !s);

  const basePalette =
    BUSINESS_PALETTES.find((p) => p.id === selectedPaletteId) ??
    BUSINESS_PALETTES[0];

  const displayedPalette: BusinessPalette = swapped
    ? {
        ...basePalette,
        primary: basePalette.secondary,
        secondary: basePalette.primary,
        hexPrimary: basePalette.hexSecondary,
        hexSecondary: basePalette.hexPrimary,
      }
    : basePalette;

  return {
    isOpen,
    toggleSection,
    palettes: BUSINESS_PALETTES,
    selectedPaletteId,
    displayedPalette,
    selectPalette,
    swapColors,
  };
}
