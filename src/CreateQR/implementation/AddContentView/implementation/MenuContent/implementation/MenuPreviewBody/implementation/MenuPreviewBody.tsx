import {
  ArrowRight,
  ChevronRight,
  Coffee,
  Cookie,
  Drumstick,
  Fish,
  Globe,
  Grid2X2,
  IceCreamCone,
  Mail,
  Phone,
  Pizza,
  Soup,
  Wheat,
} from "lucide-react";
import {
  SiFacebook,
  SiGoogle,
  SiInstagram,
  SiTiktok,
  SiX,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

const CATEGORIES = ["Starters", "Beverages", "Sweet Endings", "Nourishing"];

const FOOD_ICONS: { Icon: LucideIcon; bg: string }[] = [
  { Icon: Wheat, bg: "bg-amber-300" },
  { Icon: Drumstick, bg: "bg-rose-300" },
  { Icon: Cookie, bg: "bg-stone-300" },
  { Icon: Soup, bg: "bg-emerald-300" },
  { Icon: Coffee, bg: "bg-violet-300" },
  { Icon: Pizza, bg: "bg-orange-300" },
  { Icon: IceCreamCone, bg: "bg-amber-200" },
  { Icon: Fish, bg: "bg-cyan-300" },
];

const SOCIALS: { name: string; Icon: IconType; bg: string; iconColor?: string }[] =
  [
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
    { name: "X", Icon: SiX, bg: "bg-slate-900" },
    { name: "TikTok", Icon: SiTiktok, bg: "bg-slate-900" },
  ];

export function MenuPreviewBody() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-orange-600">
      <div className="px-6 pt-6 flex flex-col items-center text-center text-white">
        <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center shadow-md mb-3">
          <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden>
            <circle cx="22" cy="32" r="16" fill="#16a34a" />
            <circle cx="42" cy="32" r="16" fill="#facc15" />
            <path
              d="M16 22 v8 a4 4 0 0 0 4 4 v8"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="text-[18px] font-bold">TastyFood</h2>
        <p className="text-[11px] text-white/90 leading-snug mt-1">
          Fresh, flavorful, and nourishing dishes made with locally sourced
          ingredients
        </p>
      </div>

      <div className="px-3 pt-4 flex flex-col gap-2">
        {CATEGORIES.map((label) => (
          <div
            key={label}
            className="flex items-center justify-between bg-white rounded-md px-4 py-3 shadow-sm"
          >
            <span className="text-[13px] font-bold text-slate-900">
              {label}
            </span>
            <ArrowRight
              className="w-4 h-4 text-slate-500"
              strokeWidth={2.5}
            />
          </div>
        ))}
      </div>

      <div className="bg-white px-3 py-4 mt-4 grid grid-cols-4 gap-3">
        {FOOD_ICONS.map(({ Icon, bg }, i) => (
          <span
            key={i}
            className={[
              "aspect-square rounded-full flex items-center justify-center",
              bg,
            ].join(" ")}
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </span>
        ))}
      </div>

      <div className="bg-white px-4 pt-3 pb-4 border-t border-slate-100">
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

      <div className="bg-white px-4 py-3 border-t border-slate-200 flex items-center gap-2">
        <Grid2X2 className="w-4 h-4 text-slate-500" strokeWidth={2} />
        <span className="text-[12px] font-semibold text-slate-700">
          Contact
        </span>
      </div>

      <div className="bg-white px-4 pb-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
            <Phone className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500">Phone</span>
            <span className="text-[11px] font-semibold text-slate-900">
              555-100-1000
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
            <Mail className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500">Email</span>
            <span className="text-[11px] font-semibold text-slate-900">
              TastyFood@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
            <Globe className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500">Website</span>
            <span className="text-[11px] font-semibold text-slate-900">
              www.tastyfood.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
