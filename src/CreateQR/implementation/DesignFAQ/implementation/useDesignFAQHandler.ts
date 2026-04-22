import { useState } from "react";

type DesignFAQ = {
  id: string;
  question: string;
  answer: string;
};

const VISIBLE_COUNT = 4;

export function useDesignFAQHandler() {
  const faqs: DesignFAQ[] = [
    {
      id: "edit",
      question: "Can I edit my QR codes?",
      answer:
        "Yes, dynamic codes can be edited at any time, allowing you to update the destination that they point to. By clicking on the “Edit” button of a QR code from your dashboard, you will be able to update its content, even if it’s already printed. You can also edit the look and feel of your QR codes by customizing the design and colors that they use.",
    },
    {
      id: "customize",
      question: "Can I customize my QR codes or use different colors?",
      answer:
        "Absolutely. You can pick custom foreground and background colors, rounded or square eye styles, and drop your logo into the center. Every change previews instantly so you can fine-tune the look before you download or print.",
    },
    {
      id: "limit",
      question: "Is there a limit to how many QR codes I can create?",
      answer:
        "Free users can create unlimited static QR codes. Dynamic QR codes — the ones you can edit and track — are bundled into paid plans with generous quotas; you can upgrade or downgrade at any time from your dashboard.",
    },
    {
      id: "commercial",
      question: "Is it possible to use QR codes for commercial purposes?",
      answer:
        "Yes. Every QR code you generate here is yours to use for commercial campaigns, product packaging, business cards, signage, and more — with no royalties or attribution required.",
    },
    {
      id: "formats",
      question: "What file formats can I download?",
      answer:
        "You can download your QR code as PNG, JPG, SVG, or EPS. SVG and EPS are vector formats and scale to any size without losing quality — ideal for print.",
    },
    {
      id: "scan-anywhere",
      question: "Will my QR codes work on any device?",
      answer:
        "Yes. Our QR codes follow the standard QR specification and can be scanned by the built-in camera app on any modern iOS or Android device, as well as by dedicated scanner apps.",
    },
  ];

  const [selectedId, setSelectedId] = useState<string>(faqs[0].id);
  const [start, setStart] = useState(0);

  const maxStart = Math.max(0, faqs.length - VISIBLE_COUNT);
  const canPrev = start > 0;
  const canNext = start < maxStart;

  const visibleFaqs = faqs.slice(start, start + VISIBLE_COUNT);
  const selectedFaq = faqs.find((f) => f.id === selectedId) ?? faqs[0];

  const onSelect = (id: string) => setSelectedId(id);
  const onPrev = () => setStart((s) => Math.max(0, s - 1));
  const onNext = () => setStart((s) => Math.min(maxStart, s + 1));

  return {
    visibleFaqs,
    selectedFaq,
    selectedId,
    canPrev,
    canNext,
    onSelect,
    onPrev,
    onNext,
  };
}
