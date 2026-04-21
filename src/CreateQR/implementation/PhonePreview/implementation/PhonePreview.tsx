import { Signal, Wifi, BatteryMedium } from "lucide-react";
import { PhonePreviewProps } from "./PhonePreviewProps";
import { usePhonePreviewHandler } from "./usePhonePreviewHandler";
import { PreviewContent } from "./PreviewContent";

export function PhonePreview({ activeType }: PhonePreviewProps) {
  const { animationKey, statusLabel } = usePhonePreviewHandler(activeType);

  return (
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

          <div className="pt-2.5 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-900">
            <span className="tabular-nums">9:41</span>
            <div className="flex items-center gap-1 text-slate-900">
              <Signal className="w-3 h-3" strokeWidth={2.5} />
              <Wifi className="w-3 h-3" strokeWidth={2.5} />
              <BatteryMedium className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>

          <div className="sr-only" aria-live="polite">
            {statusLabel}
          </div>

          <div
            key={animationKey}
            className="flex-1 min-h-0 animate-phone-fade"
          >
            <PreviewContent activeType={activeType} />
          </div>

          <div className="pb-2 pt-1 flex justify-center">
            <div className="w-28 h-[3px] rounded-full bg-slate-900/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
