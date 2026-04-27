import { ChevronRight, User } from "lucide-react";
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
  { name: "TikTok", Icon: SiTiktok, bg: "bg-slate-900" },
  { name: "YouTube", Icon: SiYoutube, bg: "bg-[#FF0000]" },
];

export function SocialMediaPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white">
      <div className="relative px-6 pt-4 pb-3 bg-slate-100">
        <div className="relative aspect-[4/3] mx-auto max-w-[180px]">
          <span className="absolute inset-0 -translate-x-2 -translate-y-1 rounded bg-emerald-300" />
          <span className="absolute inset-0 translate-x-2 translate-y-1 rounded bg-amber-400" />
          <span className="absolute inset-0 rounded bg-slate-50 border border-slate-200 flex items-center justify-center">
            <User className="w-12 h-12 text-slate-400" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      <div className="px-4 pt-4 pb-2 text-center">
        <h3 className="text-[14px] font-bold text-slate-900">Ariel Campbell</h3>
      </div>

      <div className="px-4 pb-4 text-center">
        <p className="text-[11px] text-slate-600 leading-snug">
          Welcome to my digital hub, where I share insights, creations, and
          more. Dive in to stay updated and connected with me across the web.
        </p>
      </div>

      <div className="px-4 pt-3 border-t border-slate-100">
        <h4 className="text-[12px] font-bold text-slate-900 mb-2">
          Find me on
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
