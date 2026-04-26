import { useState } from "react";

export type LinksSectionId =
  | "design"
  | "basic"
  | "links"
  | "socials"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type LinksPalette = {
  id: string;
  background: string;
  linkBg: string;
  linkText: string;
  hexBackground: string;
  hexLinkBg: string;
  hexLinkText: string;
};

export const LINKS_PALETTES: LinksPalette[] = [
  {
    id: "blue-emerald",
    background: "bg-blue-600",
    linkBg: "bg-slate-50",
    linkText: "bg-emerald-400",
    hexBackground: "#527AC9",
    hexLinkBg: "#F7F7F7",
    hexLinkText: "#7EC09F",
  },
  {
    id: "white-black",
    background: "bg-slate-100",
    linkBg: "bg-white",
    linkText: "bg-slate-900",
    hexBackground: "#F4F4F5",
    hexLinkBg: "#FFFFFF",
    hexLinkText: "#0F172A",
  },
  {
    id: "sky-blue",
    background: "bg-sky-200",
    linkBg: "bg-white",
    linkText: "bg-blue-600",
    hexBackground: "#BAE0FB",
    hexLinkBg: "#FFFFFF",
    hexLinkText: "#2563EB",
  },
  {
    id: "violet",
    background: "bg-violet-300",
    linkBg: "bg-white",
    linkText: "bg-slate-900",
    hexBackground: "#C4B5FD",
    hexLinkBg: "#FFFFFF",
    hexLinkText: "#0F172A",
  },
  {
    id: "emerald",
    background: "bg-emerald-300",
    linkBg: "bg-white",
    linkText: "bg-slate-700",
    hexBackground: "#6EE7B7",
    hexLinkBg: "#FFFFFF",
    hexLinkText: "#334155",
  },
  {
    id: "amber",
    background: "bg-amber-300",
    linkBg: "bg-white",
    linkText: "bg-slate-900",
    hexBackground: "#FCD34D",
    hexLinkBg: "#FFFFFF",
    hexLinkText: "#0F172A",
  },
];

export function useListOfLinksContentHandler() {
  const [openSections, setOpenSections] = useState<Set<LinksSectionId>>(
    () => new Set<LinksSectionId>(["design", "basic", "links", "socials"]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    LINKS_PALETTES[0].id,
  );

  const toggleSection = (id: LinksSectionId) => {
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

  const isOpen = (id: LinksSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const selectedPalette =
    LINKS_PALETTES.find((p) => p.id === selectedPaletteId) ?? LINKS_PALETTES[0];

  return {
    isOpen,
    toggleSection,
    palettes: LINKS_PALETTES,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  };
}
