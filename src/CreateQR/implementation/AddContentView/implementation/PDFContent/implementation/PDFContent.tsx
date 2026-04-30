import {
  Info,
  Lock,
  Palette,
  QrCode,
  Smile,
  Type,
  UploadCloud,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { usePDFContentHandler } from "./usePDFContentHandler";
import { PDFPreviewBody } from "./PDFPreviewBody";

export function PDFContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectPalette,
  } = usePDFContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={UploadCloud}
          title="PDF File"
          subtitle="Upload the PDF file you want to display."
          required
          isOpen={isOpen("file")}
          onToggle={() => toggleSection("file")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="rounded-xl border-2 border-dashed border-brand bg-brand-subtle px-6 py-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <UploadCloud
                  className="w-7 h-7 text-brand"
                  strokeWidth={2}
                />
              </div>
              <button
                type="button"
                className="px-8 py-3 rounded-md bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm"
              >
                Upload PDF
              </button>
              <p className="text-xs font-semibold text-slate-700">
                Maximum size: 100MB
              </p>
            </div>

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-400">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
              />
              <span className="text-sm">Directly show the PDF file.</span>
            </label>
          </div>
        </ContentSection>

        <ContentSection
          icon={Palette}
          title="Design"
          subtitle="Choose a color theme for your page."
          isOpen={isOpen("design")}
          onToggle={() => toggleSection("design")}
        >
          <div className="flex flex-col gap-3 pt-3">
            <span className="text-xs font-semibold text-slate-700">
              Color palette
            </span>
            <div className="flex flex-wrap gap-3">
              {palettes.map((palette) => {
                const selected = palette.id === selectedPaletteId;
                return (
                  <button
                    key={palette.id}
                    type="button"
                    onClick={() => selectPalette(palette.id)}
                    aria-pressed={selected}
                    className={[
                      "relative rounded-md p-1 transition-colors",
                      selected
                        ? "ring-2 ring-brand"
                        : "ring-1 ring-slate-200 hover:ring-slate-300",
                    ].join(" ")}
                  >
                    <div className="flex w-20 h-9 rounded overflow-hidden">
                      <div className={`flex-1 ${palette.primary}`} />
                      <div className={`flex-1 ${palette.accent}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="PDF Information"
          subtitle="Add some context to your PDF."
          isOpen={isOpen("info")}
          onToggle={() => toggleSection("info")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <FieldText id="pdf-company" label="Company" placeholder="E.g. My Firm" />
            <FieldText id="pdf-title" label="PDF title" placeholder="E.g. Annual Report" focused />
            <FieldTextarea
              id="pdf-description"
              label="Description"
              placeholder="E.g. My Firm's Annual Report"
              counter="0 / 4000"
            />
            <FieldText
              id="pdf-website"
              label="Website"
              placeholder="E.g. https://www.myfirm.com/"
            />
            <FieldText id="pdf-button" label="Button" placeholder="E.g. View pdf" />
          </div>
        </ContentSection>

        <ContentSection
          icon={Type}
          title="Fonts"
          subtitle="Make your page unique with original fonts."
          isOpen={isOpen("fonts")}
          onToggle={() => toggleSection("fonts")}
        />

        <ContentSection
          icon={Smile}
          title="Welcome Screen"
          subtitle="Display an image while your page loads."
          isOpen={isOpen("welcome")}
          onToggle={() => toggleSection("welcome")}
        />

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
          <PDFPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
