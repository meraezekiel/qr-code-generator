import { useMemo, useState } from "react";
import {
  Briefcase,
  Contact,
  Facebook,
  FileText,
  Globe,
  Image,
  Instagram,
  Link,
  MessageCircle,
  Music,
  Share2,
  Smartphone,
  Ticket,
  Utensils,
  Video,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { validateUrl } from "../../lib/validateUrl";

export type StepIdx = 0 | 1 | 2;

export type CategoryId = "all" | "content" | "business" | "social" | "connect";

export type ShapeId = "square" | "dot" | "soft" | "lines";
export type CornerId = "square" | "rounded" | "circle";
export type PaletteId = "forest" | "ink" | "lime" | "cream" | "clay" | "navy";
export type QrFormat = "png" | "svg" | "pdf" | "eps";

export type FieldKind = "text" | "textarea" | "select" | "file";
export type FieldValidate = "url";
export type FieldDef = {
  k: string;
  lbl: string;
  placeholder?: string;
  kind?: FieldKind;
  options?: string[];
  required?: boolean;
  accept?: string;
  validate?: FieldValidate;
};

export type QRTypeInfo = {
  id: string;
  label: string;
  sub: string;
  Icon: LucideIcon;
  category: Exclude<CategoryId, "all">;
};

export type StyleState = {
  palette: PaletteId;
  shape: ShapeId;
  corner: CornerId;
  caption: string;
  logoDataUrl: string | null;
};

export type CreateQRState = {
  step: StepIdx;
  typeId: string | null;
  content: Record<string, string>;
  query: string;
  category: CategoryId;
  style: StyleState;
  format: QrFormat;
};

export const PRESET_PALETTES: Array<{ id: PaletteId; fg: string; bg: string }> = [
  { id: "forest", fg: "#1b5e3a", bg: "#fbf8f0" },
  { id: "ink", fg: "#1a1817", bg: "#ffffff" },
  { id: "lime", fg: "#1a1817", bg: "#dffc60" },
  { id: "cream", fg: "#3a342f", bg: "#f5f1e8" },
  { id: "clay", fg: "#c8542a", bg: "#fff4ec" },
  { id: "navy", fg: "#0e2e52", bg: "#eaf1fa" },
];

export const PALETTE_BY_ID: Record<PaletteId, { fg: string; bg: string }> = Object.fromEntries(
  PRESET_PALETTES.map((p) => [p.id, { fg: p.fg, bg: p.bg }])
) as Record<PaletteId, { fg: string; bg: string }>;

export const QR_CATEGORIES: Array<{ id: Exclude<CategoryId, "all">; label: string }> = [
  { id: "content", label: "Content" },
  { id: "business", label: "Business" },
  { id: "social", label: "Social" },
  { id: "connect", label: "Connect" },
];

export const QR_TYPES: QRTypeInfo[] = [
  { id: "website", label: "Website", sub: "Link to any URL", Icon: Globe, category: "content" },
  { id: "pdf", label: "PDF", sub: "Show a PDF", Icon: FileText, category: "content" },
  { id: "links", label: "Links", sub: "Bundle of links", Icon: Link, category: "content" },
  { id: "video", label: "Video", sub: "Show a video", Icon: Video, category: "content" },
  { id: "images", label: "Images", sub: "A gallery", Icon: Image, category: "content" },
  { id: "mp3", label: "Audio", sub: "Share an MP3", Icon: Music, category: "content" },
  { id: "vcard", label: "vCard", sub: "Digital business card", Icon: Contact, category: "business" },
  { id: "business", label: "Business", sub: "Storefront page", Icon: Briefcase, category: "business" },
  { id: "menu", label: "Menu", sub: "Restaurant menu", Icon: Utensils, category: "business" },
  { id: "coupon", label: "Coupon", sub: "Promo offer", Icon: Ticket, category: "business" },
  { id: "apps", label: "App", sub: "Redirect to store", Icon: Smartphone, category: "business" },
  { id: "instagram", label: "Instagram", sub: "Share your handle", Icon: Instagram, category: "social" },
  { id: "facebook", label: "Facebook", sub: "Page link", Icon: Facebook, category: "social" },
  { id: "whatsapp", label: "WhatsApp", sub: "Direct chat", Icon: MessageCircle, category: "social" },
  { id: "social-media", label: "All social", sub: "Every platform", Icon: Share2, category: "social" },
  { id: "wifi", label: "WiFi", sub: "Network credentials", Icon: Wifi, category: "connect" },
];

const TYPE_BY_ID: Record<string, QRTypeInfo> = Object.fromEntries(
  QR_TYPES.map((t) => [t.id, t])
);

export const FIELDS_BY_TYPE: Record<string, FieldDef[]> = {
  website: [{ k: "url", lbl: "Destination URL", placeholder: "https://yourbrand.com", required: true, validate: "url" }],
  pdf: [{ k: "file", lbl: "PDF file", kind: "file", accept: "application/pdf", required: true }],
  links: [
    { k: "displayName", lbl: "Display name", placeholder: "Your name or brand" },
    { k: "bio", lbl: "Bio", placeholder: "A short intro", kind: "textarea" },
  ],
  vcard: [
    { k: "name", lbl: "Full name", placeholder: "Alex Morgan", required: true },
    { k: "title", lbl: "Title", placeholder: "Product Designer" },
    { k: "email", lbl: "Email", placeholder: "alex@company.com" },
    { k: "phone", lbl: "Phone", placeholder: "+1 555 123 4567" },
    { k: "website", lbl: "Website", placeholder: "alexmorgan.design" },
  ],
  business: [
    { k: "name", lbl: "Business name", placeholder: "Northwind Co.", required: true },
    { k: "address", lbl: "Address", placeholder: "221 Market St." },
    { k: "phone", lbl: "Phone", placeholder: "+1 555 0100" },
    { k: "website", lbl: "Website", placeholder: "northwind.co" },
  ],
  menu: [{ k: "restaurant", lbl: "Restaurant name", placeholder: "Bella Vista", required: true }],
  coupon: [
    { k: "discount", lbl: "Discount", placeholder: "25% OFF", required: true },
    { k: "code", lbl: "Code", placeholder: "SAVE25" },
  ],
  apps: [
    { k: "name", lbl: "App name", placeholder: "YourApp", required: true },
    { k: "ios", lbl: "App Store link", placeholder: "https://apps.apple.com/...", validate: "url" },
    { k: "android", lbl: "Play Store link", placeholder: "https://play.google.com/...", validate: "url" },
  ],
  instagram: [{ k: "handle", lbl: "Instagram handle", placeholder: "@yourbrand", required: true }],
  facebook: [{ k: "page", lbl: "Facebook page URL", placeholder: "https://facebook.com/yourpage", required: true, validate: "url" }],
  whatsapp: [
    { k: "number", lbl: "WhatsApp number", placeholder: "+1 555 0100", required: true },
    { k: "greeting", lbl: "Pre-filled message", placeholder: "Hi! I’d like to place an order", kind: "textarea" },
  ],
  "social-media": [{ k: "handle", lbl: "Display name", placeholder: "Your brand", required: true }],
  video: [{ k: "url", lbl: "Video URL", placeholder: "https://youtube.com/watch?v=…", required: true, validate: "url" }],
  images: [{ k: "caption", lbl: "Gallery title", placeholder: "My portfolio", required: true }],
  mp3: [
    { k: "title", lbl: "Track title", placeholder: "Summer Vibes", required: true },
    { k: "artist", lbl: "Artist", placeholder: "Your Brand" },
  ],
  wifi: [
    { k: "ssid", lbl: "Network name (SSID)", placeholder: "YourBrand_WiFi", required: true },
    { k: "password", lbl: "Password", placeholder: "••••••••" },
    { k: "security", lbl: "Security", kind: "select", options: ["WPA2", "WPA", "WEP", "None"] },
  ],
};

const INITIAL: CreateQRState = {
  step: 0,
  typeId: null,
  content: {},
  query: "",
  category: "all",
  style: {
    palette: "forest",
    shape: "soft",
    corner: "rounded",
    caption: "Scan me",
    logoDataUrl: null,
  },
  format: "png",
};

function buildQrValue(typeId: string | null, content: Record<string, string>): string {
  if (!typeId) return "https://online-qr-generator.com";
  const v = (k: string) => (content[k] || "").trim();
  switch (typeId) {
    case "website":
      return v("url") || "https://yourbrand.com";
    case "pdf":
      return v("file") || "https://yourbrand.com";
    case "vcard": {
      const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        v("name") && `FN:${v("name")}`,
        v("title") && `TITLE:${v("title")}`,
        v("email") && `EMAIL:${v("email")}`,
        v("phone") && `TEL:${v("phone")}`,
        v("website") && `URL:${v("website")}`,
        "END:VCARD",
      ].filter(Boolean);
      return lines.join("\n");
    }
    case "wifi": {
      const ssid = v("ssid") || "YourBrand_WiFi";
      const sec = v("security") || "WPA2";
      const pwd = v("password");
      return `WIFI:T:${sec};S:${ssid};P:${pwd};;`;
    }
    case "whatsapp": {
      const num = v("number").replace(/\D/g, "");
      const greeting = v("greeting");
      const base = `https://wa.me/${num}`;
      return greeting ? `${base}?text=${encodeURIComponent(greeting)}` : base;
    }
    case "instagram":
      return `https://instagram.com/${v("handle").replace(/^@/, "") || "yourbrand"}`;
    case "facebook":
      return v("page") || "https://facebook.com/yourpage";
    case "video":
      return v("url") || "https://youtube.com";
    case "menu":
      return v("restaurant")
        ? `https://menu.example.com/${encodeURIComponent(v("restaurant"))}`
        : "https://menu.example.com";
    case "coupon":
      return v("code") || v("discount") || "PROMO";
    default: {
      const first = Object.values(content).find((x) => x && x.trim());
      return first?.trim() || "https://online-qr-generator.com";
    }
  }
}

export function useCreateQRHandler() {
  const [state, setState] = useState<CreateQRState>(INITIAL);

  const set = (patch: Partial<CreateQRState>) => setState((s) => ({ ...s, ...patch }));
  const setContent = (key: string, value: string) =>
    setState((s) => ({ ...s, content: { ...s.content, [key]: value } }));
  const setStyle = (patch: Partial<StyleState>) =>
    setState((s) => ({ ...s, style: { ...s.style, ...patch } }));
  const setFormat = (format: QrFormat) =>
    setState((s) => (s.format === format ? s : { ...s, format }));
  const selectType = (id: string) =>
    setState((s) => (s.typeId === id ? s : { ...s, typeId: id, content: {} }));

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(2, i)) as StepIdx;
    setState((s) => ({ ...s, step: next }));
  };

  const fieldErrors = useMemo(() => {
    if (!state.typeId) return {} as Record<string, string>;
    const fields = FIELDS_BY_TYPE[state.typeId] || [];
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const val = (state.content[f.k] || "").trim();
      if (f.validate === "url") {
        const msg = validateUrl(val);
        if (msg) errs[f.k] = msg;
      }
    }
    return errs;
  }, [state.typeId, state.content]);

  const requiredFilled = useMemo(() => {
    if (!state.typeId) return false;
    const fields = FIELDS_BY_TYPE[state.typeId] || [];
    return fields.every(
      (f) => !f.required || !!(state.content[f.k] || "").trim()
    );
  }, [state.typeId, state.content]);

  const canAdvance =
    state.step === 0
      ? !!state.typeId && requiredFilled && Object.keys(fieldErrors).length === 0
      : true;

  const qrValue = useMemo(
    () => buildQrValue(state.typeId, state.content),
    [state.typeId, state.content]
  );

  const currentType = state.typeId ? TYPE_BY_ID[state.typeId] : null;
  const currentFields = state.typeId ? FIELDS_BY_TYPE[state.typeId] || [] : [];

  const reset = () => {
    setState(INITIAL);
    toast.success("Started over", { description: "All choices cleared." });
  };

  return {
    state,
    set,
    setContent,
    setStyle,
    setFormat,
    selectType,
    goTo,
    canAdvance,
    qrValue,
    currentType,
    currentFields,
    fieldErrors,
    reset,
  };
}
