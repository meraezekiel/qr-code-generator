import type { PDFPalette } from "../../usePDFContentHandler";

export type PDFPreviewBodyProps = {
  company: string;
  title: string;
  description: string;
  website: string;
  buttonText: string;
  palette: PDFPalette;
  pdfUrl: string | null;
};
