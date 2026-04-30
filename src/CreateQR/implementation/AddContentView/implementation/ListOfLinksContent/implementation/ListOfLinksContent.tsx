import {
  ArrowDown,
  ArrowUp,
  Info,
  Link as LinkIcon,
  Lock,
  Palette,
  Plus,
  QrCode,
  Smile,
  Trash2,
  Type,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { ImageUpload } from "../../ImageUpload";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useListOfLinksContentHandler } from "./useListOfLinksContentHandler";
import { LinksPreviewBody } from "./LinksPreviewBody";

export function ListOfLinksContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  } = useListOfLinksContentHandler();

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
                      <div className="flex w-20 h-9 rounded overflow-hidden">
                        <div className={`flex-1 ${palette.background}`} />
                        <div className={`flex-1 ${palette.linkBg}`} />
                        <div className={`flex-1 ${palette.linkText}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ColorReadout
                label="Background color"
                hex={selectedPalette.hexBackground}
                swatchClass={selectedPalette.background}
              />
              <ColorReadout
                label="Background color of the link"
                hex={selectedPalette.hexLinkBg}
                swatchClass={selectedPalette.linkBg}
              />
              <ColorReadout
                label="Link text color"
                hex={selectedPalette.hexLinkText}
                swatchClass={selectedPalette.linkText}
              />
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="Basic Information"
          subtitle="Add a headline and short description to introduce your list of links"
          required
          isOpen={isOpen("basic")}
          onToggle={() => toggleSection("basic")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <ImageUpload label="Image" helpHint />
            <FieldText
              id="links-title"
              label="Title"
              required
              placeholder="E.g. Find me on social networks"
            />
            <FieldTextarea
              id="links-description"
              label="Description"
              placeholder="E.g. New content every week in the links below"
              counter="0 / 4000"
            />
          </div>
        </ContentSection>

        <ContentSection
          icon={LinkIcon}
          title="List of Links"
          subtitle="Add your profiles usernames or links to social media pages."
          isOpen={isOpen("links")}
          onToggle={() => toggleSection("links")}
        >
          <div className="flex flex-col gap-4 pt-4">
            <div className="rounded-lg border border-slate-200 p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Link</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Delete link"
                    className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-rose-500 hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    aria-label="Move down"
                    disabled
                    className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-300"
                  >
                    <ArrowDown className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    aria-label="Move up"
                    disabled
                    className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-300"
                  >
                    <ArrowUp className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>

              <ImageUpload label="Image" helpHint />

              <FieldText
                id="link-text"
                label="Link text"
                placeholder="Name of the link"
              />
              <FieldText
                id="link-url"
                label="URL"
                placeholder="E.g. https://mywebsite.com/"
                type="url"
              />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-brand text-brand px-4 py-3 text-sm font-bold hover:bg-brand-subtle transition-colors"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Add Link
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
          <LinksPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
