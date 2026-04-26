import {
  Building2,
  HelpCircle,
  IdCard,
  Info,
  Lock,
  MapPin,
  Palette,
  QrCode,
  Repeat,
  Search,
  Smile,
  Type,
  User,
} from "lucide-react";
import { ContentSection } from "../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { ImageUpload } from "../../ImageUpload";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useVCardContentHandler } from "./useVCardContentHandler";
import { VCardPreviewBody } from "./VCardPreviewBody";
import { ContactAddRow } from "./ContactAddRow";

export function VCardContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    displayedPalette,
    selectPalette,
    swapColors,
  } = useVCardContentHandler();

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
          icon={IdCard}
          title="Personal Information"
          subtitle="Fill in your information."
          required
          isOpen={isOpen("personal")}
          onToggle={() => toggleSection("personal")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <ImageUpload label="Image" helpHint />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldText
                id="vcard-name"
                label="Name"
                required
                placeholder="E.g. John"
                prefixIcon={User}
              />
              <FieldText
                id="vcard-surname"
                label="Surname"
                placeholder="E.g. Carlson"
                prefixIcon={User}
              />
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="Contact Details"
          subtitle="Provide the contact information you want to display on your vCard."
          isOpen={isOpen("contact")}
          onToggle={() => toggleSection("contact")}
        >
          <div className="flex flex-col gap-3 pt-3">
            <ContactAddRow title="Add Phone" />
            <ContactAddRow title="Add Email" />
            <ContactAddRow title="Add Website" />

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-600 mt-2">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
              />
              <span className="text-sm">&quot;Add contact&quot; at the top.</span>
              <HelpCircle
                className="w-4 h-4 text-slate-400"
                strokeWidth={2}
                aria-hidden
              />
            </label>
          </div>
        </ContentSection>

        <ContentSection
          icon={MapPin}
          title="Location"
          subtitle="Provide your address and location information."
          isOpen={isOpen("location")}
          onToggle={() => toggleSection("location")}
        >
          <div className="flex flex-col gap-2 pt-3">
            <span className="text-xs font-semibold text-slate-700">
              Search address
            </span>
            <div className="flex items-stretch gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  strokeWidth={2}
                  aria-hidden
                />
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="button"
                className="px-5 rounded-lg border border-brand text-brand text-sm font-bold hover:bg-brand-subtle transition-colors whitespace-nowrap"
              >
                Manual entry
              </button>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={Building2}
          title="Company Details"
          subtitle="Add more information about the business you are part of."
          isOpen={isOpen("company")}
          onToggle={() => toggleSection("company")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FieldText
                id="vcard-company"
                label="Company"
                placeholder="E.g. Firm ABC"
              />
              <FieldText
                id="vcard-profession"
                label="Profession"
                placeholder="E.g. Account manager"
              />
            </div>
            <FieldTextarea
              id="vcard-summary"
              label="Summary"
              placeholder="As an account manager, I thrive on building lasting..."
              rows={5}
            />
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
          <VCardPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
