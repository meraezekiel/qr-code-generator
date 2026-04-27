import { Share2 } from "lucide-react";
import { SiFacebook } from "react-icons/si";

export function FacebookPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white">
      <div className="relative h-44 bg-gradient-to-br from-fuchsia-300 via-pink-300 to-purple-400 overflow-hidden">
        <div className="absolute top-3 left-4 w-6 h-6 rounded-full bg-rose-400/80" />
        <div className="absolute top-6 right-12 w-7 h-7 rounded-full bg-amber-300/80" />
        <div className="absolute top-14 left-10 w-8 h-8 rounded-2xl bg-emerald-300/80" />
        <div className="absolute top-20 right-6 w-9 h-9 rounded-2xl bg-blue-400/80" />
        <div className="absolute bottom-6 left-8 w-7 h-7 rounded-full bg-fuchsia-400/80" />
        <div className="absolute bottom-10 right-14 w-6 h-6 rounded-full bg-yellow-300/80" />
        <button
          type="button"
          aria-label="Share"
          className="absolute top-2 right-2 w-7 h-7 rounded-md bg-white/80 flex items-center justify-center shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5 text-slate-700" strokeWidth={2} />
        </button>
      </div>

      <div className="px-4 -mt-10 relative">
        <div className="w-20 h-20 rounded-full bg-[#1877F2] border-4 border-white flex items-center justify-center shadow-md">
          <SiFacebook className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="px-4 pt-3 pb-2">
        <h3 className="text-[14px] font-bold text-slate-900">
          Designer&apos;s world (Ui/Ux)
        </h3>
      </div>

      <div className="px-4 pb-4">
        <p className="text-[11px] text-slate-600 leading-snug">
          This is Best UI/ UX designer &amp; developer group community,
          don&apos;t hesitate post requests for help on design themes.
        </p>
      </div>

      <div className="px-4 pb-4">
        <button
          type="button"
          className="w-full bg-[#1877F2] text-white text-[12px] font-semibold py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          Go to our Facebook page
        </button>
      </div>
    </div>
  );
}
