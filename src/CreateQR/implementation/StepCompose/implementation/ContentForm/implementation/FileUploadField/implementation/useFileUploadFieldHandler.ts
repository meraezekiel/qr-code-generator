import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { uploadPdf } from "../../../../../../../../lib/uploadPdf";

const MAX_PDF_BYTES = 25 * 1024 * 1024;

type Args = {
  fieldKey: string;
  value: string;
  accept: string | undefined;
  onContentChange: (key: string, value: string) => void;
};

export function useFileUploadFieldHandler({
  fieldKey,
  value,
  accept,
  onContentChange,
}: Args) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!value) setFileName(null);
  }, [value]);

  const triggerPicker = () => {
    if (uploading) return;
    setError(null);
    inputRef.current?.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setError(null);

    const wantsPdf = accept === "application/pdf";
    const looksPdf =
      file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (wantsPdf && !looksPdf) {
      setError("Please choose a PDF file");
      return;
    }
    if (file.size > MAX_PDF_BYTES) {
      const mb = Math.floor(MAX_PDF_BYTES / 1024 / 1024);
      setError(`File is too large. Max ${mb}MB.`);
      return;
    }

    setFileName(file.name);
    setUploading(true);
    try {
      const { publicUrl } = await uploadPdf(file);
      onContentChange(fieldKey, publicUrl);
    } catch (err) {
      setFileName(null);
      const msg = err instanceof Error ? err.message : "Upload failed";
      setError(msg);
    } finally {
      setUploading(false);
    }
  };

  const clear = () => {
    setFileName(null);
    setError(null);
    onContentChange(fieldKey, "");
  };

  return {
    inputRef,
    fileName,
    uploading,
    error,
    hasUpload: !!value,
    triggerPicker,
    handleChange,
    clear,
  };
}
