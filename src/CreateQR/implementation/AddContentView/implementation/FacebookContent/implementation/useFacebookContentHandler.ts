import { useState } from "react";

export type FacebookSectionId =
  | "design"
  | "profile"
  | "basic"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type BackgroundImage = {
  id: string;
  swatch: string;
};

export type BackgroundColor = {
  id: string;
  swatch: string;
  hex: string;
};

export type ProfileImageId = "facebook" | "upload";

export const BACKGROUND_IMAGES: BackgroundImage[] = [
  {
    id: "image-1",
    swatch: "bg-gradient-to-br from-fuchsia-300 via-pink-300 to-purple-400",
  },
  {
    id: "image-2",
    swatch: "bg-gradient-to-br from-violet-300 via-pink-300 to-rose-300",
  },
  {
    id: "image-3",
    swatch: "bg-gradient-to-br from-emerald-300 via-cyan-300 to-emerald-500",
  },
];

export const BACKGROUND_COLORS: BackgroundColor[] = [
  { id: "blue", swatch: "bg-blue-600", hex: "#1D4ED8" },
  { id: "emerald", swatch: "bg-emerald-500", hex: "#10B981" },
  { id: "mint", swatch: "bg-cyan-100", hex: "#CFFAFE" },
];

export function useFacebookContentHandler() {
  const [openSections, setOpenSections] = useState<Set<FacebookSectionId>>(
    () => new Set<FacebookSectionId>(["design", "profile", "basic"]),
  );
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState<
    string | null
  >(null);
  const [backgroundColorHex, setBackgroundColorHex] =
    useState<string>("#FFFFFF");
  const [selectedProfileImage, setSelectedProfileImage] =
    useState<ProfileImageId>("facebook");

  const toggleSection = (id: FacebookSectionId) => {
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

  const isOpen = (id: FacebookSectionId) => openSections.has(id);

  const selectBackgroundImage = (id: string) => {
    setSelectedBackgroundImage(id);
  };

  const selectBackgroundColor = (hex: string) => {
    setBackgroundColorHex(hex);
    setSelectedBackgroundImage(null);
  };

  const selectProfileImage = (id: ProfileImageId) =>
    setSelectedProfileImage(id);

  return {
    isOpen,
    toggleSection,
    backgroundImages: BACKGROUND_IMAGES,
    selectedBackgroundImage,
    selectBackgroundImage,
    backgroundColors: BACKGROUND_COLORS,
    backgroundColorHex,
    selectBackgroundColor,
    selectedProfileImage,
    selectProfileImage,
  };
}
