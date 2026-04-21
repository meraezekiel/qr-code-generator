import { QRTypeGrid } from "../../QRTypeGrid";
import { PhonePreview } from "../../PhonePreview";
import { QRTypesSectionProps } from "./QRTypesSectionProps";

export function QRTypesSection({
  selectedType,
  activeType,
  onSelectType,
  onHoverType,
  onLeaveType,
}: QRTypesSectionProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 pt-8 pb-16">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
        <span className="text-slate-900">QR codes that</span>{" "}
        <span className="text-brand">fit your needs</span>
      </h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
        With our wide selection of QR codes, choose the right type to fit your
        specific needs. Whether it's to share a website or a business, promote a
        social media account or display your contact information.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)_340px] gap-8 items-start">
        <aside className="hidden lg:flex justify-center pt-8" aria-hidden>
          <svg
            width="140"
            height="260"
            viewBox="0 0 140 260"
            className="text-brand/40"
          >
            {Array.from({ length: 8 }).flatMap((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={14 + col * 28}
                  cy={14 + row * 36}
                  r={2.5}
                  fill="currentColor"
                />
              ))
            )}
          </svg>
        </aside>

        <QRTypeGrid
          selectedType={selectedType}
          onSelectType={onSelectType}
          onHoverType={onHoverType}
          onLeaveType={onLeaveType}
        />

        <div className="flex justify-center lg:justify-end">
          <PhonePreview activeType={activeType} />
        </div>
      </div>
    </section>
  );
}
