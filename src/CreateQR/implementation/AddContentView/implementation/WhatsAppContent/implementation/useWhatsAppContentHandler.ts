import { useState } from "react";

export type WhatsAppSectionId = "info" | "name";

export function useWhatsAppContentHandler() {
  const [openSections, setOpenSections] = useState<Set<WhatsAppSectionId>>(
    () => new Set<WhatsAppSectionId>(["info"]),
  );

  const toggleSection = (id: WhatsAppSectionId) => {
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

  const isOpen = (id: WhatsAppSectionId) => openSections.has(id);

  return { isOpen, toggleSection };
}
