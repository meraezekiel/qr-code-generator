import { AtSign, Instagram, QrCode } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { useInstagramContentHandler } from "./useInstagramContentHandler";
import { InstagramPreviewBody } from "./InstagramPreviewBody";

export function InstagramContent() {
  const { isOpen, toggleSection } = useInstagramContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={Instagram}
          title="Basic Information"
          subtitle="Enter the Instagram username that this QR code will redirect to."
          isOpen={isOpen("basic")}
          onToggle={() => toggleSection("basic")}
        >
          <div className="pt-3">
            <FieldText
              id="ig-username"
              label="Username"
              required
              placeholder="Username"
              prefixIcon={AtSign}
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

        <div className="rounded-2xl bg-sky-500 px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-white font-bold text-base">
              Looking to share all your social media profiles?
            </span>
            <span className="text-white/90 text-sm">
              We have a special QR code for that!
            </span>
          </div>
          <button
            type="button"
            className="shrink-0 px-6 py-2.5 rounded-full bg-white text-sky-500 text-sm font-bold hover:bg-sky-50 transition-colors"
          >
            Try it now!
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <PreviewPanel>
          <InstagramPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
