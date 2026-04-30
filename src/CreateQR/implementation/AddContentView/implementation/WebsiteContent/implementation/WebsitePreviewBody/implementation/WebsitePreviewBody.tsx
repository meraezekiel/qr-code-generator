import { Globe } from "lucide-react";
import { WebsitePreviewBodyProps } from "./WebsitePreviewBodyProps";

export function WebsitePreviewBody({ url }: WebsitePreviewBodyProps) {
  const display = url.trim() || "https://online-qr-generator.com";

  return (
    <>
      <div className="bg-orange-500 px-4 pt-4 pb-6">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
          <Globe
            className="w-4 h-4 text-slate-700 shrink-0"
            strokeWidth={2.5}
          />
          <span className="text-[11px] font-medium text-slate-800 truncate">
            {display}
          </span>
        </div>
      </div>

      <div
        className="flex-1 bg-white px-5 pt-6 flex flex-col items-center gap-4 animate-pulse"
        aria-hidden
      >
        <div className="w-full h-24 rounded-md bg-slate-200" />
        <div className="w-full h-2.5 rounded bg-slate-200" />
        <div className="w-3/4 h-2.5 rounded bg-slate-200" />
        <div className="w-2/3 h-2.5 rounded bg-slate-200" />
        <div className="mt-4 w-full h-32 rounded-md bg-slate-200" />
      </div>
    </>
  );
}
