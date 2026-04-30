import { AlertCircle } from "lucide-react";
import { InfoBannerProps } from "./InfoBannerProps";
import { useInfoBannerHandler } from "./useInfoBannerHandler";

export function InfoBanner({ children }: InfoBannerProps) {
  useInfoBannerHandler();
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-600">
      <span className="shrink-0 w-5 h-5 rounded-md bg-slate-200 flex items-center justify-center">
        <AlertCircle className="w-3.5 h-3.5 text-slate-600" strokeWidth={2} />
      </span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}
