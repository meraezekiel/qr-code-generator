import {
  Clock,
  Info,
  Lock,
  Menu as MenuIcon,
  Palette,
  QrCode,
  Smile,
  Type,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { ImageUpload } from "../../ImageUpload";
import { ContactAddRow } from "../../ContactAddRow";
import { OpeningHoursEditor } from "../../OpeningHoursEditor";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useMenuContentHandler } from "./useMenuContentHandler";
import { MenuPreviewBody } from "./MenuPreviewBody";
import { MenuBuilder } from "./MenuBuilder";

export function MenuContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    selectedPalette,
    selectPalette,
  } = useMenuContentHandler();

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
            title="Restaurant Information"
            subtitle="Introduce your restaurant in a few words."
            isOpen={isOpen("info")}
            onToggle={() => toggleSection("info")}
          >
            <div className="flex flex-col gap-4 pt-3">
              <ImageUpload label="Image" helpHint />
              <FieldText
                id="menu-restaurant-name"
                label="Restaurant name"
                placeholder="E.g. Tasty Food"
              />
              <FieldTextarea
                id="menu-description"
                label="Description"
                placeholder="E.g. Fresh, local food"
                counter="0 / 4000"
                rows={4}
              />
            </div>
          </ContentSection>

          <ContentSection
            icon={MenuIcon}
            title="Menu"
            subtitle="Provide your menu information."
            required
            isOpen={isOpen("menu")}
            onToggle={() => toggleSection("menu")}
          >
            <MenuBuilder />
          </ContentSection>

          <ContentSection
            icon={Clock}
            title="Opening Hours"
            subtitle="Business hours for each day of the week."
            isOpen={isOpen("hours")}
            onToggle={() => toggleSection("hours")}
          >
            <OpeningHoursEditor />
          </ContentSection>

          <ContentSection
            icon={Info}
            title="Contact Information"
            subtitle="Provide contact information."
            isOpen={isOpen("contact")}
            onToggle={() => toggleSection("contact")}
          >
            <div className="flex flex-col gap-3 pt-3">
              <ContactAddRow title="Add Phone" />
              <ContactAddRow title="Add Email" />
              <ContactAddRow title="Add Website" />
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
            <MenuPreviewBody />
          </PreviewPanel>
        </div>
      </div>
  );
}
