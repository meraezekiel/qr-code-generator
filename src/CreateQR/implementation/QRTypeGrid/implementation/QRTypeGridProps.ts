import type { LucideIcon } from "lucide-react";

export type QRTypeId =
  | "website"
  | "pdf"
  | "list-of-links"
  | "vcard"
  | "business"
  | "video"
  | "images"
  | "facebook"
  | "instagram"
  | "social-media"
  | "whatsapp"
  | "mp3"
  | "menu"
  | "apps"
  | "coupon"
  | "wifi";

export type QRType = {
  id: QRTypeId;
  label: string;
  subtitle: string;
  icon: LucideIcon;
};

export type QRTypeGridProps = {
  selectedType: QRType | null;
  onSelectType: (type: QRType) => void;
  onHoverType: (type: QRType) => void;
  onLeaveType: () => void;
};
