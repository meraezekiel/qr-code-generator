import { useState } from "react";

type ScanFAQ = {
  id: string;
  question: string;
  answer: string;
};

export function useScanFAQHandler() {
  const faqs: ScanFAQ[] = [
    {
      id: "website",
      question:
        "Can I add a QR code to my website (and will people be able to scan it)?",
      answer:
        "Yes — simply download your QR code as a PNG or SVG and embed it like any other image. As long as the image is large enough to render clearly (at least 150×150 pixels on screen), visitors can scan it directly from their phone camera.",
    },
    {
      id: "how-scan",
      question: "How do you scan a QR code?",
      answer:
        "Open the camera app on any modern smartphone, point it at the QR code, and tap the notification that pops up. On older devices you may need a dedicated QR scanner app — most are free in the App Store or Google Play.",
    },
    {
      id: "how-print",
      question: "How do I print my QR code?",
      answer:
        "Download your code in SVG or EPS for print — both are vector formats and scale to any size without blurring. For best scan results, keep the code at least 2×2 cm on print material and ensure there is a white “quiet zone” of at least 4 modules around it.",
    },
    {
      id: "data-collected",
      question: "What data is collected in dynamic QR code scans?",
      answer:
        "Dynamic QR codes record the timestamp of each scan, the approximate city-level location derived from the IP address, and the device type (iOS / Android / desktop). No personal data or scanner identity is stored.",
    },
    {
      id: "counter",
      question: "Do QR codes have a scan counter?",
      answer:
        "Dynamic QR codes do — every scan is counted in real time and visible in your dashboard’s analytics view. Static QR codes do not have a counter because they resolve directly to their destination without passing through our servers.",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const onToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return { faqs, openId, onToggle };
}
