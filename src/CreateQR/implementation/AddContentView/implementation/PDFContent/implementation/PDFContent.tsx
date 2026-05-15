import {
  Check,
  FileText,
  Info,
  Loader2,
  Lock,
  Palette,
  QrCode,
  Smile,
  Type,
  UploadCloud,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { usePDFContentHandler } from "./usePDFContentHandler";
import { PDFContentProps } from "./PDFContentProps";
import { PDFPreviewBody } from "./PDFPreviewBody";

export function PDFContent({
  onValidityChange,
  onQrValueChange,
}: PDFContentProps) {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectPalette,
    selectedPalette,
    company,
    setCompany,
    title,
    setTitle,
    description,
    setDescription,
    website,
    setWebsite,
    buttonText,
    setButtonText,
    directShowPdf,
    toggleDirectShow,
    pdfFile,
    pdfUrl,
    uploadStatus,
    uploadError,
    fileInputRef,
    openFilePicker,
    handleFileChange,
    removeFile,
    isValid,
    qrValue,
  } = usePDFContentHandler();

  useEffect(() => {
    onValidityChange?.(isValid);
  }, [isValid, onValidityChange]);

  useEffect(() => {
    onQrValueChange?.(qrValue);
  }, [qrValue, onQrValueChange]);

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
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleFileChange}
              className="hidden"
              aria-hidden
            />

            <div className="rounded-xl border-2 border-dashed border-brand bg-brand-subtle px-6 py-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <UploadCloud
                  className="w-7 h-7 text-brand"
                  strokeWidth={2}
                />
              </div>
              <button
                type="button"
                onClick={openFilePicker}
                disabled={uploadStatus === "uploading"}
                className="px-8 py-3 rounded-md bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {uploadStatus === "uploading" ? "Uploading..." : "Upload PDF"}
              </button>
              <p className="text-xs font-semibold text-slate-700">
                Maximum size: 5MB
              </p>
            </div>

            {uploadStatus === "uploading" && pdfFile && (
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                <Loader2
                  className="w-5 h-5 text-brand animate-spin"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <FileText
                  className="w-5 h-5 text-slate-500"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-sm font-medium text-slate-800 truncate flex-1">
                  {pdfFile.name}
                </span>
                <span className="text-xs text-slate-500">Uploading…</span>
              </div>
            )}

            {uploadStatus === "success" && pdfFile && (
              <div className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
                <Check
                  className="w-5 h-5 text-emerald-600"
                  strokeWidth={3}
                  aria-hidden
                />
                <FileText
                  className="w-5 h-5 text-slate-500"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-sm font-medium text-slate-800 truncate flex-1">
                  {pdfFile.name}
                </span>
                <button
                  type="button"
                  onClick={removeFile}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-rose-600 transition-colors"
                  aria-label="Remove PDF"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                  Remove
                </button>
              </div>
            )}

            {uploadStatus === "error" && (
              <div className="flex items-center gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3">
                <X
                  className="w-5 h-5 text-rose-600"
                  strokeWidth={3}
                  aria-hidden
                />
                <span className="text-sm font-medium text-rose-700 flex-1">
                  {uploadError ?? "Upload failed."}
                </span>
                <button
                  type="button"
                  onClick={openFilePicker}
                  className="text-xs font-semibold text-rose-700 hover:text-rose-900 transition-colors"
                >
                  Try again
                </button>
              </div>
            )}

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-700">
              <input
                type="checkbox"
                checked={directShowPdf}
                onChange={toggleDirectShow}
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
                    aria-label={`Color palette ${palette.id}`}
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
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pdf-company"
                className="text-xs font-semibold text-slate-700"
              >
                Company
              </label>
              <input
                id="pdf-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="E.g. My Firm"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pdf-title"
                className="text-xs font-semibold text-slate-700"
              >
                PDF title <span className="text-rose-500">*</span>
              </label>
              <input
                id="pdf-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g. Annual Report"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pdf-description"
                className="text-xs font-semibold text-slate-700"
              >
                Description
              </label>
              <textarea
                id="pdf-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="E.g. My Firm's Annual Report"
                rows={3}
                maxLength={4000}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none"
              />
              <span className="self-end text-xs font-medium text-slate-400 tabular-nums">
                {description.length} / 4000
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pdf-website"
                className="text-xs font-semibold text-slate-700"
              >
                Website
              </label>
              <input
                id="pdf-website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="E.g. https://www.myfirm.com/"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="pdf-button"
                className="text-xs font-semibold text-slate-700"
              >
                Button
              </label>
              <input
                id="pdf-button"
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                placeholder="E.g. View pdf"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
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
        <PreviewPanel qrValue={qrValue} qrEnabled={isValid}>
          <PDFPreviewBody
            company={company}
            title={title}
            description={description}
            website={website}
            buttonText={buttonText}
            palette={selectedPalette}
            pdfUrl={pdfUrl}
          />
        </PreviewPanel>
      </div>
    </div>
  );
}
