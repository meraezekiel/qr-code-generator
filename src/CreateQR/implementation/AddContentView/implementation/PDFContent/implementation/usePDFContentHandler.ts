import { useRef, useState } from "react";
import { uploadPdf } from "../../../../../../lib/uploadPdf";

export type PDFSectionId =
  | "file"
  | "design"
  | "info"
  | "fonts"
  | "welcome"
  | "name"
  | "password";

export type PDFPalette = {
  id: string;
  primary: string;
  accent: string;
  hexPrimary: string;
  hexSecondary: string;
};

export type PDFUploadStatus = "idle" | "uploading" | "success" | "error";

export const PDF_PALETTES: PDFPalette[] = [
  {
    id: "blue-green",
    primary: "bg-blue-500",
    accent: "bg-emerald-500",
    hexPrimary: "#3B82F6",
    hexSecondary: "#10B981",
  },
  {
    id: "white-black",
    primary: "bg-slate-100",
    accent: "bg-slate-900",
    hexPrimary: "#F1F5F9",
    hexSecondary: "#0F172A",
  },
  {
    id: "sky-blue",
    primary: "bg-sky-200",
    accent: "bg-blue-600",
    hexPrimary: "#BAE6FD",
    hexSecondary: "#2563EB",
  },
  {
    id: "violet",
    primary: "bg-violet-300",
    accent: "bg-slate-900",
    hexPrimary: "#C4B5FD",
    hexSecondary: "#0F172A",
  },
  {
    id: "emerald",
    primary: "bg-emerald-300",
    accent: "bg-slate-700",
    hexPrimary: "#6EE7B7",
    hexSecondary: "#334155",
  },
  {
    id: "amber",
    primary: "bg-amber-300",
    accent: "bg-slate-900",
    hexPrimary: "#FCD34D",
    hexSecondary: "#0F172A",
  },
];

const MAX_PDF_BYTES = 5 * 1024 * 1024;

export function usePDFContentHandler() {
  const [openSections, setOpenSections] = useState<Set<PDFSectionId>>(
    () => new Set<PDFSectionId>(["file", "design", "info"]),
  );
  const [selectedPaletteId, setSelectedPaletteId] = useState<string>(
    PDF_PALETTES[0].id,
  );

  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [buttonText, setButtonText] = useState("View PDF");
  const [directShowPdf, setDirectShowPdf] = useState(false);

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<PDFUploadStatus>("idle");
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleSection = (id: PDFSectionId) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isOpen = (id: PDFSectionId) => openSections.has(id);

  const selectPalette = (id: string) => setSelectedPaletteId(id);

  const selectedPalette: PDFPalette =
    PDF_PALETTES.find((p) => p.id === selectedPaletteId) ?? PDF_PALETTES[0];

  const openFilePicker = () => fileInputRef.current?.click();

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      setPdfFile(null);
      setPdfUrl(null);
      setUploadStatus("error");
      setUploadError("Please select a PDF file.");
      return;
    }

    if (file.size > MAX_PDF_BYTES) {
      setPdfFile(null);
      setPdfUrl(null);
      setUploadStatus("error");
      setUploadError("File is larger than 5 MB.");
      return;
    }

    setPdfFile(file);
    setPdfUrl(null);
    setUploadError(null);
    setUploadStatus("uploading");

    try {
      const { publicUrl } = await uploadPdf(file);
      setPdfUrl(publicUrl);
      setUploadStatus("success");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      setUploadError(message);
      setUploadStatus("error");
    }
  };

  const removeFile = () => {
    setPdfFile(null);
    setPdfUrl(null);
    setUploadStatus("idle");
    setUploadError(null);
  };

  const toggleDirectShow = () => setDirectShowPdf((v) => !v);

  const isValid = uploadStatus === "success" && title.trim().length > 0;
  const qrValue = isValid ? pdfUrl ?? "" : "";

  return {
    isOpen,
    toggleSection,
    palettes: PDF_PALETTES,
    selectedPaletteId,
    selectPalette,
    selectedPalette,

    company,
    setCompany,
    title,
    setTitle,
    description,
    setDescription,
    website,
    setWebsite,
    buttonText,
    setButtonText,

    directShowPdf,
    toggleDirectShow,

    pdfFile,
    pdfUrl,
    uploadStatus,
    uploadError,
    fileInputRef,
    openFilePicker,
    handleFileChange,
    removeFile,

    isValid,
    qrValue,
  };
}
