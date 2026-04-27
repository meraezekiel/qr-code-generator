import { ArrowRight, Globe } from "lucide-react";

export function ImagesPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-emerald-500">
      <div className="px-4 pt-4 pb-3 text-center">
        <h2 className="text-white text-[18px] font-bold">My Pictures</h2>
      </div>

      <div className="px-6 pb-3 text-center">
        <p className="text-white text-[12px] leading-snug">
          Capturing life&apos;s moments, one snapshot at a time. Join me!
        </p>
      </div>

      <div className="px-4 pb-4">
        <button
          type="button"
          className="w-full bg-emerald-400 text-white text-[12px] font-semibold py-2.5 rounded-md hover:bg-emerald-300 transition-colors"
        >
          View More
        </button>
      </div>

      <div className="px-3 pb-3 flex flex-col gap-2">
        <div className="aspect-[3/4] rounded-md bg-gradient-to-br from-amber-300 via-orange-300 to-sky-300 flex items-center justify-center text-white/40 text-[10px] font-bold tracking-widest">
          PHOTO 1
        </div>
        <div className="aspect-[3/4] rounded-md bg-gradient-to-br from-rose-400 via-slate-700 to-cyan-700 flex items-center justify-center text-white/40 text-[10px] font-bold tracking-widest">
          PHOTO 2
        </div>
      </div>

      <div className="sticky bottom-0 bg-white px-4 py-3 flex items-center gap-2 border-t border-slate-200">
        <Globe className="w-4 h-4 text-slate-500" strokeWidth={2} />
        <span className="flex-1 text-[12px] font-semibold text-slate-700">
          www.mypictures.com
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
      </div>
    </div>
  );
}
