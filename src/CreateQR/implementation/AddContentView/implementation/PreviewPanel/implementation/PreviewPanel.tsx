import { Signal, Wifi, BatteryMedium } from "lucide-react";
import { PreviewPanelProps } from "./PreviewPanelProps";
import { usePreviewPanelHandler } from "./usePreviewPanelHandler";

export function PreviewPanel({ children }: PreviewPanelProps) {
  const { mode, showPreview, showQrCode } = usePreviewPanelHandler();

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        role="tablist"
        aria-label="Preview mode"
        className="inline-flex p-1 rounded-full bg-slate-100"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "preview"}
          onClick={showPreview}
          className={[
            "px-5 py-1.5 text-sm font-bold rounded-full transition-colors",
            mode === "preview"
              ? "bg-brand text-white shadow-sm"
              : "text-slate-600 hover:text-slate-800",
          ].join(" ")}
        >
          Preview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "qrcode"}
          onClick={showQrCode}
          className={[
            "px-5 py-1.5 text-sm font-bold rounded-full transition-colors",
            mode === "qrcode"
              ? "bg-brand text-white shadow-sm"
              : "text-slate-600 hover:text-slate-800",
          ].join(" ")}
        >
          QR code
        </button>
      </div>

      <div
        aria-label="Phone preview"
        className="relative w-[290px] h-[600px] rounded-[44px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-[3px] shadow-2xl"
      >
        <div className="absolute -right-[3px] top-32 w-[3px] h-10 rounded-l bg-slate-700" />
        <div className="absolute -right-[3px] top-48 w-[3px] h-20 rounded-l bg-slate-700" />
        <div className="absolute -left-[3px] top-44 w-[3px] h-16 rounded-r bg-slate-700" />

        <div className="relative w-full h-full rounded-[41px] bg-slate-950 p-[2px]">
          <div className="relative w-full h-full rounded-[39px] bg-white overflow-hidden flex flex-col">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-900 ring-[2px] ring-slate-800 z-20" />

            <div className="pt-2.5 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-900 z-10">
              <span className="tabular-nums">9:41</span>
              <div className="flex items-center gap-1 text-slate-900">
                <Signal className="w-3 h-3" strokeWidth={2.5} />
                <Wifi className="w-3 h-3" strokeWidth={2.5} />
                <BatteryMedium className="w-4 h-4" strokeWidth={2.5} />
              </div>
            </div>

            {mode === "preview" ? (
              <div className="flex-1 min-h-0 flex flex-col">{children}</div>
            ) : (
              <div className="flex-1 min-h-0 flex items-center justify-center bg-white">
                <div className="w-44 h-44 rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs px-3 text-center">
                  QR code preview
                </div>
              </div>
            )}

            <div className="pb-2 pt-1 flex justify-center">
              <div className="w-28 h-[3px] rounded-full bg-slate-900/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
