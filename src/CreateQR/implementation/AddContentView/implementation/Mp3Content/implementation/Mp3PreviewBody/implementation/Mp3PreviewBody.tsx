import {
  ChevronRight,
  Globe,
  Pause,
  Repeat,
  Share2,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiYoutube,
} from "react-icons/si";
import type { IconType } from "react-icons";

const SOCIALS: {
  name: string;
  Icon: IconType;
  bg: string;
}[] = [
  { name: "Facebook", Icon: SiFacebook, bg: "bg-[#1877F2]" },
  {
    name: "Instagram",
    Icon: SiInstagram,
    bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500",
  },
  { name: "Youtube", Icon: SiYoutube, bg: "bg-[#FF0000]" },
  { name: "Spotify", Icon: SiSpotify, bg: "bg-emerald-500" },
];

export function Mp3PreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-violet-400">
      <div className="px-3 pt-2 pb-3 flex items-center justify-end">
        <button
          type="button"
          aria-label="Share"
          className="w-7 h-7 rounded-md bg-white/30 flex items-center justify-center"
        >
          <Share2 className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        </button>
      </div>

      <div className="px-3 pb-3">
        <div className="aspect-square rounded-md overflow-hidden bg-gradient-to-br from-fuchsia-500 via-purple-700 to-indigo-900 flex items-end justify-center text-white/30 text-[10px] font-bold tracking-widest pb-2">
          ALBUM ART
        </div>
      </div>

      <div className="px-4 pb-3 text-center">
        <h3 className="text-[14px] font-bold text-slate-900">Night Drive</h3>
        <p className="text-[11px] text-slate-700">The Best Driving Music</p>
      </div>

      <div className="px-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-700 tabular-nums">0:13</span>
          <div className="flex-1 h-1 rounded-full bg-white/40 overflow-hidden">
            <div className="h-full w-2/5 bg-violet-700 rounded-full" />
          </div>
          <span className="text-[10px] text-slate-700 tabular-nums">0:30</span>
        </div>
      </div>

      <div className="px-4 pb-3 flex items-center justify-between text-slate-900">
        <Repeat className="w-4 h-4" strokeWidth={2} />
        <SkipBack className="w-5 h-5 fill-current" strokeWidth={0} />
        <button
          type="button"
          aria-label="Pause"
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md"
        >
          <Pause className="w-5 h-5 text-slate-900 fill-current" strokeWidth={0} />
        </button>
        <SkipForward className="w-5 h-5 fill-current" strokeWidth={0} />
        <Volume2 className="w-4 h-4" strokeWidth={2} />
      </div>

      <div className="px-3 pb-4">
        <button
          type="button"
          className="w-full bg-violet-500 text-white text-[12px] font-semibold py-2.5 rounded-md hover:bg-violet-600 transition-colors"
        >
          View More Songs
        </button>
      </div>

      <div className="bg-white px-4 pt-3 pb-4">
        <h4 className="text-[12px] font-bold text-slate-900 mb-2">
          Follow me on
        </h4>
        <div className="flex flex-col gap-2">
          {SOCIALS.map(({ name, Icon, bg }) => (
            <div key={name} className="flex items-center gap-3 rounded-md py-1">
              <span
                className={[
                  "w-8 h-8 rounded-md flex items-center justify-center shadow-sm text-white",
                  bg,
                ].join(" ")}
              >
                <Icon className="w-4 h-4" />
              </span>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-slate-900">
                  {name}
                </div>
                <div className="text-[9px] text-slate-500">Social Account</div>
              </div>
              <ChevronRight
                className="w-3.5 h-3.5 text-slate-400"
                strokeWidth={2.5}
              />
            </div>
          ))}

          <div className="flex items-center gap-3 rounded-md py-1">
            <span className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
              <Globe className="w-4 h-4" strokeWidth={2} />
            </span>
            <div className="flex-1 text-[11px] font-semibold text-slate-900">
              www.thestorms.com
            </div>
            <ChevronRight
              className="w-3.5 h-3.5 text-slate-400"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
