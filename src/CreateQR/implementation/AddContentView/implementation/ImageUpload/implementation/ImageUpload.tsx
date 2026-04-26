import { HelpCircle, ImagePlus } from "lucide-react";
import { ImageUploadProps } from "./ImageUploadProps";
import { useImageUploadHandler } from "./useImageUploadHandler";

export function ImageUpload({ label, helpHint }: ImageUploadProps) {
  const { ariaLabel } = useImageUploadHandler({ label });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-semibold text-slate-700">{label}</span>
        {helpHint && (
          <HelpCircle
            className="w-3.5 h-3.5 text-slate-400"
            strokeWidth={2}
            aria-hidden
          />
        )}
      </div>
      <button
        type="button"
        aria-label={ariaLabel}
        className="w-16 h-16 rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-slate-400 hover:text-slate-500 transition-colors"
      >
        <ImagePlus className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </div>
  );
}
