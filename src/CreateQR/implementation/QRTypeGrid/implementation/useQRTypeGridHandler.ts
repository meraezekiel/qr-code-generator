import {
  Briefcase,
  Contact,
  Facebook,
  FileText,
  Globe,
  Image as ImageIcon,
  Instagram,
  Link as LinkIcon,
  Menu as MenuIcon,
  MessageCircle,
  Music,
  Share2,
  Smartphone,
  Ticket,
  Video,
  Wifi,
} from "lucide-react";
import type { QRType } from "./QRTypeGridProps";

export function useQRTypeGridHandler() {
  const qrTypes: QRType[] = [
    { id: "website", label: "Website", subtitle: "Link to any website URL", icon: Globe },
    { id: "pdf", label: "PDF", subtitle: "Show a PDF", icon: FileText },
    { id: "list-of-links", label: "List of Links", subtitle: "Share multiple links", icon: LinkIcon },
    { id: "vcard", label: "vCard", subtitle: "Share a digital business card", icon: Contact },
    { id: "business", label: "Business", subtitle: "Share information about your business", icon: Briefcase },
    { id: "video", label: "Video", subtitle: "Show a video", icon: Video },
    { id: "images", label: "Images", subtitle: "Share multiple images", icon: ImageIcon },
    { id: "facebook", label: "Facebook", subtitle: "Share your Facebook page", icon: Facebook },
    { id: "instagram", label: "Instagram", subtitle: "Share your Instagram", icon: Instagram },
    { id: "social-media", label: "Social Media", subtitle: "Share your social channels", icon: Share2 },
    { id: "whatsapp", label: "WhatsApp", subtitle: "Get WhatsApp messages", icon: MessageCircle },
    { id: "mp3", label: "MP3", subtitle: "Share an audio file", icon: Music },
    { id: "menu", label: "Menu", subtitle: "Create a restaurant menu", icon: MenuIcon },
    { id: "apps", label: "Apps", subtitle: "Redirect to an app store", icon: Smartphone },
    { id: "coupon", label: "Coupon", subtitle: "Share a coupon", icon: Ticket },
    { id: "wifi", label: "WiFi", subtitle: "Connect to a Wi-Fi network", icon: Wifi },
  ];

  return { qrTypes };
}
