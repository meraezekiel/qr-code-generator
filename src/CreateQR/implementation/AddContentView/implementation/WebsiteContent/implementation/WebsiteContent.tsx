import { Globe, Lock, QrCode } from "lucide-react";
import { ContentSection } from "../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { useWebsiteContentHandler } from "./useWebsiteContentHandler";
import { WebsitePreviewBody } from "./WebsitePreviewBody";

export function WebsiteContent() {
  const { isOpen, toggleSection } = useWebsiteContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={Globe}
          title="Website Information"
          subtitle="Input the URL this QR will redirect to."
          required
          isOpen={isOpen("website")}
          onToggle={() => toggleSection("website")}
        >
          <div className="flex flex-col gap-2 pt-3">
            <label
              htmlFor="website-url"
              className="text-xs font-semibold text-slate-700"
            >
              Website URL <span className="text-rose-500">*</span>
            </label>
            <input
              id="website-url"
              type="url"
              placeholder="E.g. https://www.mywebsite.com/"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
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

        <ContentSection
          icon={Lock}
          title="Password"
          helpHint
          isOpen={isOpen("password")}
          onToggle={() => toggleSection("password")}
        />
      </div>

      <div className="flex justify-center lg:justify-end">
        <PreviewPanel>
          <WebsitePreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
