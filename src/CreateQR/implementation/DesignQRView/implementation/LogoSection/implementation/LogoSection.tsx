import { ImagePlus, X } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { LogoSectionProps } from "./LogoSectionProps";
import { useLogoSectionHandler } from "./useLogoSectionHandler";

export function LogoSection({
  logoDataUrl,
  onLogoChange,
  isOpen,
  onToggle,
}: LogoSectionProps) {
  const { inputRef, inputId, triggerPicker, onFileSelected, clear } =
    useLogoSectionHandler({ onLogoChange });

  return (
    <ContentSection
      icon={ImagePlus}
      title="Add Logo"
      subtitle="Make your QR code unique by adding your logo or an image"
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-col gap-3 pt-3">
        <span className="text-sm text-slate-700">
          Upload your logo (Maximum size: 1 MB)
        </span>
        <div className="relative w-24 h-24">
          {logoDataUrl ? (
            <>
              <img
                src={logoDataUrl}
                alt="Uploaded logo"
                className="w-24 h-24 object-cover rounded-lg border border-slate-200"
              />
              <button
                type="button"
                onClick={clear}
                aria-label="Remove logo"
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shadow"
              >
                <X className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={triggerPicker}
              className="w-24 h-24 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:border-brand hover:bg-brand-subtle/40 transition-colors flex items-center justify-center text-slate-500"
              aria-label="Upload logo"
            >
              <ImagePlus className="w-7 h-7" strokeWidth={1.8} />
            </button>
          )}
          <input
            id={inputId}
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFileSelected(e.target.files?.[0] ?? null)}
          />
        </div>
      </div>
    </ContentSection>
  );
}
