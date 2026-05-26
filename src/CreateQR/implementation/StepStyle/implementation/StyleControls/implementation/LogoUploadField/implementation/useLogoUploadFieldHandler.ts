import { useRef, useState, type ChangeEvent, type DragEvent } from "react";

const MAX_LOGO_BYTES = 2 * 1024 * 1024;
const ALLOWED_MIME = ["image/png", "image/svg+xml"];

type Args = {
  onChange: (dataUrl: string | null) => void;
};

export function useLogoUploadFieldHandler({ onChange }: Args) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFile = async (file: File | null | undefined) => {
    if (!file) return;
    setError(null);

    const okMime = ALLOWED_MIME.includes(file.type);
    const okExt = /\.(png|svg)$/i.test(file.name);
    if (!okMime && !okExt) {
      setError("Please choose a PNG or SVG image");
      return;
    }
    if (file.size > MAX_LOGO_BYTES) {
      const mb = Math.floor(MAX_LOGO_BYTES / 1024 / 1024);
      setError(`Image is too large. Max ${mb}MB.`);
      return;
    }

    setLoading(true);
    try {
      const dataUrl = await readAsDataUrl(file);
      onChange(dataUrl);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to read image";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const triggerPicker = () => {
    if (loading) return;
    setError(null);
    inputRef.current?.click();
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    e.target.value = "";
    void handleFile(file);
  };

  const stop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDragEnter = (e: DragEvent<HTMLElement>) => {
    stop(e);
    setDragOver(true);
  };
  const onDragOver = (e: DragEvent<HTMLElement>) => {
    stop(e);
    if (!dragOver) setDragOver(true);
  };
  const onDragLeave = (e: DragEvent<HTMLElement>) => {
    stop(e);
    setDragOver(false);
  };
  const onDrop = (e: DragEvent<HTMLElement>) => {
    stop(e);
    setDragOver(false);
    void handleFile(e.dataTransfer?.files?.[0] ?? null);
  };

  const clear = () => {
    setError(null);
    onChange(null);
  };

  return {
    inputRef,
    error,
    dragOver,
    loading,
    triggerPicker,
    onInputChange,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    clear,
  };
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = () => {
      const r = reader.result;
      if (typeof r === "string") resolve(r);
      else reject(new Error("Unexpected file reader result"));
    };
    reader.readAsDataURL(file);
  });
}
