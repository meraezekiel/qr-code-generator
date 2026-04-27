import { useState } from "react";

export type InstagramSectionId = "basic" | "name";

export function useInstagramContentHandler() {
  const [openSections, setOpenSections] = useState<Set<InstagramSectionId>>(
    () => new Set<InstagramSectionId>(["basic"]),
  );

  const toggleSection = (id: InstagramSectionId) => {
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

  const isOpen = (id: InstagramSectionId) => openSections.has(id);

  return { isOpen, toggleSection };
}
