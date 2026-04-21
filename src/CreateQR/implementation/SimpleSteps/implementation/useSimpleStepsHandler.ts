import { FileText, Paintbrush, Printer, LucideIcon } from "lucide-react";

export type SimpleStep = {
  id: number;
  icon: LucideIcon;
  iconBg: string;
  iconGlow: string;
  dotColor: string;
  title: string;
  description: string;
};

export function useSimpleStepsHandler() {
  const steps: SimpleStep[] = [
    {
      id: 1,
      icon: FileText,
      iconBg: "bg-brand",
      iconGlow: "shadow-[0_18px_40px_-12px_rgba(34,197,94,0.55)]",
      dotColor: "bg-brand",
      title: "Choose your\nQR code content",
      description:
        "Decide what you want to share. You can use URLs, videos, apps, and more!",
    },
    {
      id: 2,
      icon: Paintbrush,
      iconBg: "bg-indigo-500",
      iconGlow: "shadow-[0_18px_40px_-12px_rgba(99,102,241,0.55)]",
      dotColor: "bg-indigo-500",
      title: "Customize your design",
      description:
        "Personalize your QR code's color, shape, and style to create a unique design that matches your brand!",
    },
    {
      id: 3,
      icon: Printer,
      iconBg: "bg-sky-500",
      iconGlow: "shadow-[0_18px_40px_-12px_rgba(14,165,233,0.55)]",
      dotColor: "bg-sky-500",
      title: "Download your QR code",
      description:
        "Save your QR code as a PNG, SVG, JPG or EPS. Print it or share it digitally!",
    },
  ];

  return { steps };
}
