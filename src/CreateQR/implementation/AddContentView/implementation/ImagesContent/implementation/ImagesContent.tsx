import {
  Image as ImageIcon,
  Info,
  Lock,
  Palette,
  Plus,
  QrCode,
  Smile,
  Type,
  UploadCloud,
} from "lucide-react";
import { ContentSection } from "../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { useImagesContentHandler } from "./useImagesContentHandler";
import { ImagesPreviewBody } from "./ImagesPreviewBody";

export function ImagesContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  } = useImagesContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={Palette}
          title="Design"
          subtitle="Choose a color theme for your page."
          isOpen={isOpen("design")}
          onToggle={() => toggleSection("design")}
        >
          <div className="flex flex-col gap-5 pt-3">
            <div className="flex flex-col gap-3">
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
                      <div
                        className={`w-20 h-9 rounded ${palette.swatch}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="max-w-xs">
              <ColorReadout
                label="Primary color"
                hex={selectedPalette.hex}
                swatchClass={selectedPalette.swatch}
              />
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={ImageIcon}
          title="Image"
          subtitle="Upload or drag and drop images."
          required
          isOpen={isOpen("image")}
          onToggle={() => toggleSection("image")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="rounded-xl border-2 border-dashed border-brand bg-brand-subtle/40 px-6 py-10 flex flex-col items-center gap-4">
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
                Upload Images
              </button>
              <p className="text-xs font-semibold text-slate-700">
                Maximum size: 10MB
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="Image Information"
          subtitle="Add some context to your image gallery."
          isOpen={isOpen("info")}
          onToggle={() => toggleSection("info")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <FieldText
              id="images-title"
              label="Image gallery/album title"
              placeholder="E.g. My gallery"
            />
            <FieldTextarea
              id="images-description"
              label="Image gallery/album description"
              placeholder="E.g. Summer Pictures"
              counter="0 / 4000"
              rows={4}
            />
            <FieldText
              id="images-website"
              label="Website"
              placeholder="E.g. https://www.mypictures.com/"
            />
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-brand/40 text-brand text-sm font-bold py-3 hover:bg-brand-subtle transition-colors"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Add Button
            </button>
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
          <ImagesPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
