type FooterColumn = {
  id: string;
  heading: string;
  links: { id: string; label: string }[];
};

export function useSiteFooterHandler() {
  const columns: FooterColumn[] = [
    {
      id: "service",
      heading: "Service",
      links: [
        { id: "create", label: "Create QR" },
        { id: "plans", label: "Plans and Prices" },
        { id: "language", label: "Language" },
      ],
    },
    {
      id: "company",
      heading: "Company",
      links: [
        { id: "terms", label: "Terms & Conditions" },
        { id: "privacy", label: "Privacy Policy" },
      ],
    },
    {
      id: "help",
      heading: "Help",
      links: [
        { id: "faq", label: "FAQ" },
        { id: "cancel", label: "Cancel subscription" },
      ],
    },
  ];

  return { columns };
}
