import {
  ArrowRight,
  BarChart3,
  Eye,
  Globe,
  PieChart,
  Search,
  Sprout,
} from "lucide-react";
import { PDFPreviewBodyProps } from "./PDFPreviewBodyProps";

export function PDFPreviewBody({
  company,
  title,
  description,
  website,
  buttonText,
  palette,
  pdfUrl,
}: PDFPreviewBodyProps) {
  const displayCompany = company.trim() || "Enterprise Inc.";
  const displayTitle = title.trim() || "Annual Report";
  const displayDescription =
    description.trim() ||
    "Our best year yet! See how we achieved record-breaking success in our annual report";
  const displayWebsite = website.trim() || "www.online-qr-generator.com";
  const displayButton = buttonText.trim() || "View PDF";

  return (
    <>
      <div
        className="px-5 pt-3 pb-6 text-center"
        style={{ backgroundColor: palette.hexPrimary }}
      >
        <div className="text-[9px] font-semibold text-white/90 tracking-wide">
          {displayCompany}
        </div>
        <h2 className="mt-1 text-[22px] font-extrabold text-white leading-tight">
          {displayTitle}
        </h2>
        <p className="mt-2 text-[10px] text-white/90 leading-snug px-2 line-clamp-3">
          {displayDescription}
        </p>
      </div>

      <div className="flex-1 bg-white px-4 -mt-4 flex flex-col gap-3">
        <div className="rounded-md bg-amber-50 p-1 shadow-sm">
          <div className="relative h-32 rounded-sm bg-amber-50 overflow-hidden flex items-center justify-center">
            {pdfUrl ? (
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="PDF preview"
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
            ) : (
              <>
                <BarChart3
                  className="absolute left-2 bottom-2 w-12 h-12 text-orange-400"
                  strokeWidth={1.5}
                />
                <PieChart
                  className="absolute right-3 top-2 w-10 h-10 text-cyan-500"
                  strokeWidth={1.5}
                />
                <Search
                  className="w-12 h-12 text-cyan-700"
                  strokeWidth={1.8}
                />
                <Sprout
                  className="absolute right-1 bottom-1 w-7 h-7 text-emerald-500"
                  strokeWidth={1.8}
                />
              </>
            )}
          </div>
        </div>

        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-white text-sm font-bold py-3 rounded-md flex items-center justify-center gap-2 shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: palette.hexSecondary }}
          >
            <Eye className="w-4 h-4" strokeWidth={2.5} />
            {displayButton}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="w-full text-white text-sm font-bold py-3 rounded-md flex items-center justify-center gap-2 shadow-sm cursor-not-allowed opacity-90"
            style={{ backgroundColor: palette.hexSecondary }}
          >
            <Eye className="w-4 h-4" strokeWidth={2.5} />
            {displayButton}
          </button>
        )}

        <div className="mt-auto pb-1 flex items-center gap-2 border-t border-slate-100 pt-2">
          <Globe className="w-3.5 h-3.5 text-slate-500" strokeWidth={2.5} />
          <span
            className="text-[11px] font-semibold underline flex-1 truncate"
            style={{ color: palette.hexSecondary }}
          >
            {displayWebsite}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
        </div>
      </div>
    </>
  );
}
