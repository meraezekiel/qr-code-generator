import {
  ArrowRight,
  BarChart3,
  Eye,
  Globe,
  PieChart,
  Search,
  Sprout,
} from "lucide-react";

export function PDFPreviewBody() {
  return (
    <>
      <div className="bg-cyan-700 px-5 pt-3 pb-6 text-center">
        <div className="text-[9px] font-semibold text-white/90 tracking-wide">
          Enterprise Inc.
        </div>
        <h2 className="mt-1 text-[22px] font-extrabold text-white leading-tight">
          Annual Report
        </h2>
        <p className="mt-2 text-[10px] text-white/90 leading-snug px-2">
          Our best year yet! See how we achieved record-breaking success in our
          annual report
        </p>
      </div>

      <div className="flex-1 bg-white px-4 -mt-4 flex flex-col gap-3">
        <div className="rounded-md bg-amber-50 p-3 shadow-sm">
          <div className="relative h-32 rounded-sm bg-amber-50 overflow-hidden flex items-center justify-center">
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
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-3 rounded-md flex items-center justify-center gap-2 shadow-sm"
        >
          <Eye className="w-4 h-4" strokeWidth={2.5} />
          View PDF
        </button>

        <div className="mt-auto pb-1 flex items-center gap-2 border-t border-slate-100 pt-2">
          <Globe className="w-3.5 h-3.5 text-slate-500" strokeWidth={2.5} />
          <span className="text-[11px] font-semibold text-cyan-700 underline flex-1">
            www.enterprise.com
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
        </div>
      </div>
    </>
  );
}
