import {
  HelpCircle,
  Info,
  Lock,
  Palette,
  Plus,
  QrCode,
  Repeat,
  Smile,
  Type,
  UploadCloud,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { ImageUpload } from "../../ImageUpload";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useMp3ContentHandler } from "./useMp3ContentHandler";
import { Mp3PreviewBody } from "./Mp3PreviewBody";

export function Mp3Content() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    displayedPalette,
    selectPalette,
    swapColors,
  } = useMp3ContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={Info}
          title="MP3"
          subtitle="Upload an audio file from your device."
          required
          isOpen={isOpen("mp3")}
          onToggle={() => toggleSection("mp3")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="rounded-xl border-2 border-dashed border-brand bg-brand-subtle/40 px-6 py-10 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-brand flex items-center justify-center text-brand">
                <UploadCloud className="w-7 h-7" strokeWidth={2} />
              </div>
              <button
                type="button"
                className="px-8 py-3 rounded-md bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm"
              >
                Upload MP3
              </button>
              <p className="text-xs font-semibold text-slate-700">
                Maximum size: 25MB
              </p>
            </div>

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-400">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
              />
              <span className="text-sm">Add download option</span>
              <HelpCircle
                className="w-4 h-4 text-slate-400"
                strokeWidth={2}
                aria-hidden
              />
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
                      <div className="flex w-20 h-9 rounded overflow-hidden">
                        <div className={`flex-1 ${palette.primary}`} />
                        <div className={`flex-1 ${palette.secondary}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-end gap-3">
              <div className="flex-1">
                <ColorReadout
                  label="Primary color"
                  hex={displayedPalette.hexPrimary}
                  swatchClass={displayedPalette.primary}
                />
              </div>
              <button
                type="button"
                onClick={swapColors}
                aria-label="Swap colors"
                className="w-10 h-10 mb-1 rounded-full border-2 border-brand text-brand flex items-center justify-center hover:bg-brand-subtle transition-colors shrink-0"
              >
                <Repeat className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <div className="flex-1">
                <ColorReadout
                  label="Secondary color"
                  hex={displayedPalette.hexSecondary}
                  swatchClass={displayedPalette.secondary}
                />
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="Basic Information"
          subtitle="Add some context to your MP3 file."
          isOpen={isOpen("basic")}
          onToggle={() => toggleSection("basic")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <ImageUpload label="Image" helpHint />
            <FieldText
              id="mp3-title"
              label="Title"
              placeholder="Song or audio file name"
            />
            <FieldTextarea
              id="mp3-description"
              label="Description"
              placeholder="Provide any relevant information about your audio file"
              counter="0 / 4000"
              rows={4}
            />
            <FieldText
              id="mp3-website"
              label="Website"
              placeholder="E.g. https://mywebsite.com/"
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
          <Mp3PreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
