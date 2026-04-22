import { StepperHeader } from "./StepperHeader";
import { QRTypeGrid } from "./QRTypeGrid";
import { PhonePreview } from "./PhonePreview";
import { SimpleSteps } from "./SimpleSteps";
import { AdvancedFeatures } from "./AdvancedFeatures";
import { DesignFAQ } from "./DesignFAQ";
import { ScanFAQ } from "./ScanFAQ";
import { CTABanner } from "./CTABanner";
import { SiteFooter } from "./SiteFooter";
import { useCreateQRHandler } from "./useCreateQRHandler";

export function CreateQR() {
  const {
    selectedType,
    activeType,
    onSelectType,
    onHoverType,
    onLeaveType,
  } = useCreateQRHandler();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <StepperHeader activeStep={1} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 pt-8 pb-16">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">
          <span className="text-brand">Easily create a QR code</span>{" "}
          <span className="text-slate-900">for any occasion in seconds!</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)_340px] gap-8 items-start">
          <aside className="hidden lg:flex flex-col items-center pt-20">
            <svg
              width="150"
              height="170"
              viewBox="0 0 150 170"
              fill="none"
              className="text-brand -mb-2"
              aria-hidden
            >
              <path
                d="M20 10 C 120 10, 140 80, 90 140"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M82 130 L 90 142 L 102 134"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div className="border border-brand/40 rounded-2xl px-5 py-3 text-slate-700 font-medium text-center shadow-sm bg-white">
              Choose a
              <br />
              QR Type
            </div>
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
      </main>

      <SimpleSteps />

      <AdvancedFeatures />

      <DesignFAQ />

      <ScanFAQ />

      <CTABanner />

      <SiteFooter />
    </div>
  );
}
