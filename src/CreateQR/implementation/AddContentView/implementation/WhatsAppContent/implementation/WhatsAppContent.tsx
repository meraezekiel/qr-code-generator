import { ChevronDown, MessageCircle, QrCode } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldTextarea } from "../../FieldTextarea";
import { useWhatsAppContentHandler } from "./useWhatsAppContentHandler";
import { WhatsAppPreviewBody } from "./WhatsAppPreviewBody";

export function WhatsAppContent() {
  const { isOpen, toggleSection } = useWhatsAppContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={MessageCircle}
          title="WhatsApp Information"
          subtitle="Scanning this QR code will open WhatsApp, ready to text the provided phone number. Optionally add a prefilled message."
          isOpen={isOpen("info")}
          onToggle={() => toggleSection("info")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="wa-phone"
                className="text-xs font-semibold text-slate-700"
              >
                Phone number<span className="text-rose-500"> *</span>
              </label>
              <div className="flex items-stretch rounded-lg border border-slate-200 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20 transition-colors">
                <button
                  type="button"
                  className="flex items-center gap-1 pl-3 pr-2 border-r border-slate-200 text-slate-700"
                  aria-label="Select country code"
                >
                  <span className="text-base leading-none">🇵🇭</span>
                  <ChevronDown className="w-3 h-3" strokeWidth={2.5} />
                </button>
                <input
                  id="wa-phone"
                  type="tel"
                  placeholder="0991 558 6034"
                  className="flex-1 px-3 py-3 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <FieldTextarea
              id="wa-message"
              label="Message"
              placeholder="Write your message"
              rows={4}
            />
          </div>
        </ContentSection>

        <ContentSection
          icon={QrCode}
          title="Name of the QR Code"
          subtitle="Give a name to your QR code."
          isOpen={isOpen("name")}
          onToggle={() => toggleSection("name")}
        />
      </div>

      <div className="flex justify-center lg:justify-end">
        <PreviewPanel>
          <WhatsAppPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
