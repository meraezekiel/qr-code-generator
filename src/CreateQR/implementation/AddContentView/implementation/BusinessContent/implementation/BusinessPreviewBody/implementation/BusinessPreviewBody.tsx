import { ChevronRight, Clock, Grid2X2, MapPin } from "lucide-react";
import {
  SiFacebook,
  SiGoogle,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

const DAY_HOURS = [
  ["Monday", "10:00 am - 05:00 pm"],
  ["Tuesday", "10:00 am - 05:00 pm"],
  ["Wednesday", "10:00 am - 05:00 pm"],
  ["Thursday", "10:00 am - 05:00 pm"],
  ["Friday", "10:00 am - 05:00 pm"],
  ["Saturday", "10:00 am - 05:00 pm"],
  ["Sunday", "10:00 am - 05:00 am"],
];

const SOCIALS: {
  name: string;
  Icon: IconType;
  bg: string;
  iconColor?: string;
}[] = [
  { name: "Facebook", Icon: SiFacebook, bg: "bg-[#1877F2]" },
  {
    name: "Instagram",
    Icon: SiInstagram,
    bg: "bg-gradient-to-tr from-amber-400 via-pink-500 to-fuchsia-500",
  },
  {
    name: "Google",
    Icon: SiGoogle,
    bg: "bg-white border border-slate-200",
    iconColor: "text-blue-600",
  },
  { name: "LinkedIn", Icon: FaLinkedinIn, bg: "bg-[#0A66C2]" },
  { name: "TikTok", Icon: SiTiktok, bg: "bg-slate-900" },
];

export function BusinessPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white">
      <div className="bg-blue-600 px-4 py-3 text-center">
        <h2 className="text-white text-[13px] font-bold">
          Boulangerie Pâtissier
        </h2>
      </div>

      <div className="bg-blue-600 px-3 pb-4">
        <div className="rounded-md overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-rose-200 via-amber-200 to-rose-300 flex items-center justify-center text-rose-900/40 text-[10px] font-semibold tracking-widest">
            STOREFRONT
          </div>
        </div>
      </div>

      <div className="px-4 -mt-1 flex flex-col items-center text-center gap-1">
        <h3 className="text-[14px] font-bold text-slate-900">
          Boulangerie Pâtissier
        </h3>
        <p className="text-[11px] text-slate-500">
          Freshly baked happiness every day
        </p>
        <button
          type="button"
          className="mt-2 w-full bg-blue-600 text-white text-[12px] font-semibold py-2 rounded-md"
        >
          View Menu
        </button>
      </div>

      <div className="px-4 mt-4 flex items-center gap-2 text-[11px] text-slate-700 border-t border-slate-100 pt-3">
        <Clock className="w-4 h-4 text-slate-400" strokeWidth={2} />
        <span>Open hours -</span>
        <span className="text-emerald-600 font-semibold">Open now</span>
      </div>

      <div className="px-4 mt-2 flex flex-col gap-1.5">
        {DAY_HOURS.map(([day, hours]) => (
          <div key={day} className="flex items-center justify-between">
            <span className="text-[11px] text-slate-700">{day}:</span>
            <span className="text-[11px] text-slate-500">{hours}</span>
          </div>
        ))}
      </div>

      <div className="px-4 mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-start gap-2">
          <MapPin
            className="w-4 h-4 text-slate-400 mt-0.5"
            strokeWidth={2}
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold text-slate-900">
              Address
            </span>
            <span className="text-[11px] text-slate-600 leading-snug">
              345 Park Avenue, New York, 10154, NY, United States
            </span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] text-blue-600 font-semibold"
            >
              Show on Map
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 pt-3 border-t border-slate-100">
        <h4 className="text-[12px] font-bold text-slate-900 mb-2">
          Our Social Networks
        </h4>
        <div className="flex flex-col gap-2">
          {SOCIALS.map(({ name, Icon, bg, iconColor }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-md py-1"
            >
              <span
                className={[
                  "w-8 h-8 rounded-md flex items-center justify-center shadow-sm",
                  bg,
                  iconColor ?? "text-white",
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

      <div className="mt-4 px-4 py-3 border-t border-slate-200 flex items-center gap-2 sticky bottom-0 bg-white">
        <Grid2X2 className="w-4 h-4 text-slate-500" strokeWidth={2} />
        <span className="text-[12px] font-semibold text-slate-700">
          Contact
        </span>
      </div>
    </div>
  );
}
