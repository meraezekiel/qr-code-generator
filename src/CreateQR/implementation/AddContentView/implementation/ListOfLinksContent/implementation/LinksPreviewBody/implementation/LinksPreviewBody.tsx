import {
  ArrowRight,
  Camera,
  Disc,
  Instagram,
  Music,
  Plane,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LinkCard = {
  label: string;
  iconBg: string;
  iconColor: string;
  icon: LucideIcon;
};

const LINK_CARDS: LinkCard[] = [
  {
    label: "Jenny's Make up",
    iconBg: "bg-rose-300",
    iconColor: "text-white",
    icon: User,
  },
  {
    label: "Instagram Profile",
    iconBg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500",
    iconColor: "text-white",
    icon: Instagram,
  },
  {
    label: "TikTok Videos",
    iconBg: "bg-slate-900",
    iconColor: "text-white",
    icon: Music,
  },
  {
    label: "Trip to Costa Rica",
    iconBg: "bg-red-600",
    iconColor: "text-white",
    icon: Plane,
  },
  {
    label: "My VSCO",
    iconBg: "bg-white border border-slate-200",
    iconColor: "text-slate-600",
    icon: Disc,
  },
];

export function LinksPreviewBody() {
  return (
    <>
      <div className="bg-cyan-700 px-4 pt-4 pb-12 text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-9 w-[68px] h-[68px] rounded-full p-[3px] bg-white shadow-md">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-300 via-pink-400 to-fuchsia-500 flex items-center justify-center">
            <Camera className="w-7 h-7 text-white/90" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white px-4 pt-12 flex flex-col gap-3 overflow-hidden">
        <div className="text-center">
          <h2 className="text-[15px] font-bold text-slate-900">Jenny Leslie</h2>
          <p className="mt-1 text-[10px] text-slate-600 leading-snug px-2">
            Join me on my social media journey for daily inspiration,
            positivity, and fun!
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-1">
          {LINK_CARDS.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-2.5 bg-emerald-200/70 rounded-full px-2 py-1.5 shadow-sm"
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${card.iconBg}`}
              >
                <card.icon
                  className={`w-3.5 h-3.5 ${card.iconColor}`}
                  strokeWidth={2.5}
                />
              </span>
              <span className="flex-1 text-[11px] font-semibold text-slate-800">
                {card.label}
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 text-slate-700 mr-1"
                strokeWidth={2.5}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
