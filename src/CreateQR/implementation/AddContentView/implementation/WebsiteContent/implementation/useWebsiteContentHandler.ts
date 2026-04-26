import { useState } from "react";

export type WebsiteSectionId = "website" | "name" | "password";

export function useWebsiteContentHandler() {
  const [openSection, setOpenSection] = useState<WebsiteSectionId | null>(
    "website",
  );

  const toggleSection = (id: WebsiteSectionId) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  const isOpen = (id: WebsiteSectionId) => openSection === id;

  return {
    isOpen,
    toggleSection,
  };
}
