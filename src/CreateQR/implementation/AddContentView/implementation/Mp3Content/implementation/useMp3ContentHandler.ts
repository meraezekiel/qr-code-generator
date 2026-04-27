import { useState } from "react";

export type Mp3SectionId =
  | "mp3"
  | "design"
  | "basic"
  | "socials"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type Mp3Palette = {
  id: string;
  primary: string;
  secondary: string;
  hexPrimary: string;
  hexSecondary: string;
};

export const MP3_PALETTES: Mp3Palette[] = [
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

export function useMp3ContentHandler() {
  const [openSections, setOpenSections] = useState<Set<Mp3SectionId>>(
    () =>
      new Set<Mp3SectionId>(["mp3", "design", "basic", "socials"]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    MP3_PALETTES[0].id,
  );
  const [swapped, setSwapped] = useState(false);

  const toggleSection = (id: Mp3SectionId) => {
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

  const isOpen = (id: Mp3SectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const swapColors = () => setSwapped((s) => !s);

  const basePalette =
    MP3_PALETTES.find((p) => p.id === selectedPaletteId) ?? MP3_PALETTES[0];

  const displayedPalette: Mp3Palette = swapped
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
    palettes: MP3_PALETTES,
    selectedPaletteId,
    displayedPalette,
    selectPalette,
    swapColors,
  };
}
