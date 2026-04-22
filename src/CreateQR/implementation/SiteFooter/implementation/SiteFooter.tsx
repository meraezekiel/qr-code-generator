import { QrCode } from "lucide-react";
import { useSiteFooterHandler } from "./useSiteFooterHandler";

export function SiteFooter() {
  const { columns } = useSiteFooterHandler();

  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col gap-4">
          <QrCode className="w-12 h-12 text-white" strokeWidth={1.75} />
          <p className="text-sm text-white/85 leading-relaxed max-w-[260px]">
            Take your business or idea to the next level with Online QR
            Generator
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.id} className="md:col-span-2">
            <h3 className="text-base font-semibold mb-4">{col.heading}</h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className="text-sm text-white/90 hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2 flex">
          <div className="rounded-xl bg-white/10 px-5 py-5 w-full flex flex-col gap-4">
            <p className="text-sm font-medium leading-snug">
              Generate, Manage &amp; Track your QR codes 👇
            </p>
            <button
              type="button"
              className="w-full rounded-md bg-brand hover:bg-brand-dark border border-white/30 text-white font-semibold py-2.5 transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-white/75">
          <span>2026 © Online QR Generator All rights reserved</span>
          <span>&apos;QR Code&apos; is a trademark of DENSO WAVE INCORPORATED</span>
        </div>
      </div>
    </footer>
  );
}
