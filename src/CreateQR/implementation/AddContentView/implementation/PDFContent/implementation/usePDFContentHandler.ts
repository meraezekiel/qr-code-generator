import { useState } from "react";

export type PDFSectionId =
  | "file"
  | "design"
  | "info"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type ColorPalette = {
  id: string;
  primary: string;
  accent: string;
};

export const PDF_PALETTES: ColorPalette[] = [
  { id: "blue-green", primary: "bg-blue-500", accent: "bg-emerald-500" },
  { id: "white-black", primary: "bg-slate-100", accent: "bg-slate-900" },
  { id: "sky-blue", primary: "bg-sky-200", accent: "bg-blue-600" },
  { id: "violet", primary: "bg-violet-300", accent: "bg-slate-900" },
  { id: "emerald", primary: "bg-emerald-300", accent: "bg-slate-700" },
  { id: "amber", primary: "bg-amber-300", accent: "bg-slate-900" },
];

export function usePDFContentHandler() {
  const [openSections, setOpenSections] = useState<Set<PDFSectionId>>(
    () => new Set<PDFSectionId>(["file", "design", "info"]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    PDF_PALETTES[0].id,
  );

  const toggleSection = (id: PDFSectionId) => {
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

  const isOpen = (id: PDFSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  return {
    isOpen,
    toggleSection,
    palettes: PDF_PALETTES,
    selectedPaletteId,
    selectPalette,
  };
}
