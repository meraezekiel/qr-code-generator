import { useState } from "react";

export type VideoSectionId =
  | "video"
  | "info"
  | "socials"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export function useVideoContentHandler() {
  const [openSections, setOpenSections] = useState<Set<VideoSectionId>>(
    () => new Set<VideoSectionId>(["video", "info", "socials"]),
  );

  const toggleSection = (id: VideoSectionId) => {
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

  const isOpen = (id: VideoSectionId) => openSections.has(id);

  return { isOpen, toggleSection };
}
