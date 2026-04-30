export type LogoSectionProps = {
  logoDataUrl: string | null;
  onLogoChange: (dataUrl: string | null) => void;
  isOpen: boolean;
  onToggle: () => void;
};
