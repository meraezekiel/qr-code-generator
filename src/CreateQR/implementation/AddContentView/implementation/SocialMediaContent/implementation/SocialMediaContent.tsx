import {
  Image as ImageIcon,
  Info,
  Lock,
  Palette,
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
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useSocialMediaContentHandler } from "./useSocialMediaContentHandler";
import { SocialMediaPreviewBody } from "./SocialMediaPreviewBody";

export function SocialMediaContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  } = useSocialMediaContentHandler();

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
          icon={Info}
          title="Basic Information"
          subtitle="Provide some information to introduce your social media page."
          isOpen={isOpen("basic")}
          onToggle={() => toggleSection("basic")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <FieldText
              id="sm-title"
              label="Title"
              required
              placeholder="e.g. Ariel Campbell"
            />
            <FieldTextarea
              id="sm-description"
              label="Description"
              placeholder="e.g. Welcome to my digital hub..."
              rows={4}
            />
          </div>
        </ContentSection>

        <ContentSection
          icon={ImageIcon}
          title="Image"
          subtitle="Upload or drag and drop images."
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

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-600">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
              />
              <span className="text-sm">Vertical images</span>
            </label>
          </div>
        </ContentSection>

        <SocialNetworksSection
          isOpen={isOpen("socials")}
          onToggle={() => toggleSection("socials")}
        />

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
          <SocialMediaPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
