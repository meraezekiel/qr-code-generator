import { ChevronRight, Play } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
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
  { name: "TikTok", Icon: SiTiktok, bg: "bg-slate-900" },
];

export function VideoPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-amber-200 via-rose-200 to-emerald-200 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-md">
            <Play
              className="w-5 h-5 text-slate-900 fill-current ml-0.5"
              strokeWidth={0}
            />
          </span>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4">
        <p className="text-[11px] text-slate-700 leading-snug">
          From the preparation to the plate, learn to cook my favourite recipes
          like a pro
        </p>
      </div>

      <div className="px-4 pt-3 border-t border-slate-100">
        <h4 className="text-[12px] font-bold text-slate-900 mb-2">
          Follow me on
        </h4>
        <div className="flex flex-col gap-2">
          {SOCIALS.map(({ name, Icon, bg }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-md py-1"
            >
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
        </div>
      </div>
    </div>
  );
}
