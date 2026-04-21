import {
  QrCode,
  TrendingUp,
  Activity,
  LayoutTemplate,
  LayoutGrid,
  Sliders,
  Download,
  DollarSign,
  LucideIcon,
} from "lucide-react";

export type FeatureTone = "violet" | "emerald" | "orange" | "sky";

export type AdvancedFeature = {
  id: string;
  icon: LucideIcon;
  tone: FeatureTone;
  title: string;
  description: string;
};

export function useAdvancedFeaturesHandler() {
  const features: AdvancedFeature[] = [
    {
      id: "high-tech",
      icon: QrCode,
      tone: "violet",
      title: "High-tech QR codes",
      description:
        "Access advanced functionalities with our dynamic QR code generator. Customize colors, layout, and logo on various QR code types and easily scan them on any device.",
    },
    {
      id: "conversion",
      icon: TrendingUp,
      tone: "emerald",
      title: "High conversion rates",
      description:
        "Create high-performing QR codes that accurately represent your brand and design, resulting in high scan rates. Qr-code-maker",
    },
    {
      id: "analytics",
      icon: Activity,
      tone: "violet",
      title: "Real-time analytics",
      description:
        "Boost your marketing campaigns with access to real-time analytics for each generated QR code that shows when, where and how many times your QR codes were scanned.",
    },
    {
      id: "landing",
      icon: LayoutTemplate,
      tone: "orange",
      title: "Easy landing pages",
      description:
        "There's no need for you to build a website. Our custom QR code generator platform can help you quickly and easily create customizable landing pages for all of your QR code needs.",
    },
    {
      id: "multiple",
      icon: LayoutGrid,
      tone: "emerald",
      title: "Multiple types of QR codes",
      description:
        "Easily create various QR code types with customized options to meet your specific needs. From URLs and vCards to Wi-Fi and PDFs — we've got you covered.",
    },
    {
      id: "customization",
      icon: Sliders,
      tone: "violet",
      title: "Full customization",
      description:
        "Bring your QR codes to life by customizing them with our endless array of colors, shapes, frames, and logos that fit perfectly with your brand.",
    },
    {
      id: "download",
      icon: Download,
      tone: "orange",
      title: "Easily download, share & edit",
      description:
        "Keep the highest resolution for print and digital use. Download in PNG, SVG, JPG, or EPS — and edit any dynamic QR code at any time without reprinting.",
    },
    {
      id: "get-started",
      icon: DollarSign,
      tone: "sky",
      title: "Get started now!",
      description:
        "Ready to create your first QR code? Take advantage of our free QR code generator to quickly design and download your QR code in just a few clicks.",
    },
  ];

  const toneClasses: Record<FeatureTone, string> = {
    violet: "bg-violet-100 text-violet-500",
    emerald: "bg-emerald-100 text-emerald-500",
    orange: "bg-orange-100 text-orange-500",
    sky: "bg-sky-100 text-sky-500",
  };

  return { features, toneClasses };
}
