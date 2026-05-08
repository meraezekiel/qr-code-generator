import {
  ArrowLeft,
  Check,
  Edit3,
  LayoutGrid,
  LineChart,
  Mail,
  QrCode,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { DownloadQRViewProps } from "./DownloadQRViewProps";
import { useDownloadQRViewHandler } from "./useDownloadQRViewHandler";
import { QRCodeArtwork } from "../../DesignQRView/implementation/DesignPreview/implementation/QRCodeArtwork";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const FEATURES: Array<{ icon: IconComponent; label: string }> = [
  { icon: Mail, label: "Receive your QR code by email" },
  { icon: LayoutGrid, label: "Download your QR code in multiple formats" },
  { icon: Edit3, label: "Edit your QR code content, even after printing it" },
  { icon: QrCode, label: "Create unlimited QR codes" },
  { icon: LineChart, label: "Track your QR codes with powerful analytics" },
  { icon: LayoutGrid, label: "Manage all your QR code in one place" },
  { icon: QrCode, label: "Much more!" },
];

export function DownloadQRView({ qrValue, design, onBack }: DownloadQRViewProps) {
  const {
    email,
    setEmail,
    submit,
    submitting,
    continueWithGoogle,
    onBack: handleBack,
  } = useDownloadQRViewHandler({ qrValue, design, onBack });

  const labelText = qrValue.trim() || "Scan Me!";

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="w-full max-w-[1400px] mx-auto px-6 pt-6 pb-12 flex flex-col gap-6">
        <button
          type="button"
          onClick={handleBack}
          className="self-start inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm px-10 py-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-subtle flex items-center justify-center mb-6">
                <QrCode className="w-7 h-7 text-brand" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-1">
                Download Your QR Code
              </h2>
              <p className="text-sm text-slate-500">
                Enter your email address to receive your QR code
              </p>
            </div>

            <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="download-email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <input
                    id="download-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email here"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-lg bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-sm font-bold text-slate-600 tracking-wide">
                OR
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <button
              type="button"
              onClick={continueWithGoogle}
              className="w-full py-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-900 text-sm font-semibold inline-flex items-center justify-center gap-3"
            >
              <GoogleGlyph className="w-5 h-5" />
              Continue with Google
            </button>

            <div className="mt-10">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Enter your email to access all of our features
              </h3>
              <ul className="flex flex-col gap-3.5">
                {FEATURES.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <feature.icon
                      className="w-5 h-5 text-brand shrink-0"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {feature.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm px-10 py-12 lg:sticky lg:top-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" strokeWidth={3.5} />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Your QR Code Is Ready
              </h2>
            </div>

            <div className="flex justify-center">
              <ScanTargetFrame>
                <div className="w-[280px] flex flex-col bg-white">
                  <div className="w-full aspect-square">
                    <QRCodeArtwork design={design} value={qrValue} />
                  </div>
                  <div className="bg-slate-900 text-white text-center font-bold text-base py-3 tracking-wide">
                    {labelText}
                  </div>
                </div>
              </ScanTargetFrame>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ScanTargetFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative inline-block p-6">
      <span
        aria-hidden
        className="absolute top-0 left-0 w-10 h-10 border-l-[6px] border-t-[6px] border-brand-light rounded-tl-xl"
      />
      <span
        aria-hidden
        className="absolute top-0 right-0 w-10 h-10 border-r-[6px] border-t-[6px] border-brand-light rounded-tr-xl"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 w-10 h-10 border-l-[6px] border-b-[6px] border-brand-light rounded-bl-xl"
      />
      <span
        aria-hidden
        className="absolute bottom-0 right-0 w-10 h-10 border-r-[6px] border-b-[6px] border-brand-light rounded-br-xl"
      />
      {children}
    </div>
  );
}

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
