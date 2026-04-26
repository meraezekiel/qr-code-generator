import { Mail, MapPin, Phone, User } from "lucide-react";

export function VCardPreviewBody() {
  return (
    <>
      <div className="bg-emerald-900 px-4 pt-4 pb-16 flex flex-col items-center text-center text-white relative">
        <div className="w-[68px] h-[68px] rounded-full p-[3px] bg-white shadow-md">
          <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
            <User className="w-7 h-7 text-slate-500" strokeWidth={2} />
          </div>
        </div>
        <h2 className="mt-2 text-[15px] font-bold">John Carlson</h2>
        <p className="text-[11px] text-white/85">Account Manager</p>

        <div className="mt-3 flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Phone className="w-4 h-4 text-emerald-900" strokeWidth={2.5} />
          </span>
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Mail className="w-4 h-4 text-emerald-900" strokeWidth={2.5} />
          </span>
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
            <MapPin className="w-4 h-4 text-emerald-900" strokeWidth={2.5} />
          </span>
        </div>

        <p className="mt-3 text-[10px] leading-snug text-white/95 px-3">
          As an account manager, I thrive on building lasting relationships and
          helping clients to succeed. Let&apos;s connect and grow together!
        </p>
      </div>

      <div className="flex-1 bg-white px-4 pt-4 -mt-6 rounded-t-2xl flex flex-col gap-3">
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
              John.Carlson@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
