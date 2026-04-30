import {
  Clock,
  Info,
  LayoutGrid,
  Lock,
  MapPin,
  Palette,
  Plus,
  QrCode,
  Repeat,
  Search,
  Smile,
  Type,
  User,
  UserCircle2,
} from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { ColorReadout } from "../../ColorReadout";
import { ImageUpload } from "../../ImageUpload";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { ContactAddRow } from "../../ContactAddRow";
import { useBusinessContentHandler } from "./useBusinessContentHandler";
import { BusinessPreviewBody } from "./BusinessPreviewBody";
import { OpeningHoursEditor } from "../../OpeningHoursEditor";
import { FacilitiesGrid } from "./FacilitiesGrid";

export function BusinessContent() {
  const {
    isOpen,
    toggleSection,
    palettes,
    selectedPaletteId,
    displayedPalette,
    selectPalette,
    swapColors,
  } = useBusinessContentHandler();

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
          icon={Info}
          title="Business Information"
          subtitle="Introduce your business or organization."
          required
          isOpen={isOpen("info")}
          onToggle={() => toggleSection("info")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <ImageUpload label="Image" helpHint />
            <FieldText
              id="biz-company"
              label="Company"
              required
              placeholder="E.g. My Company"
            />
            <FieldText
              id="biz-title"
              label="Title"
              placeholder="E.g. Clothing store"
            />
            <FieldText
              id="biz-subtitle"
              label="Subtitle"
              placeholder="E.g. Selling clothes for over 15 years"
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
          icon={Clock}
          title="Opening Hours"
          subtitle="Business hours for each day of the week."
          isOpen={isOpen("hours")}
          onToggle={() => toggleSection("hours")}
        >
          <OpeningHoursEditor />
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
          icon={Info}
          title="Contact Information"
          subtitle="Provide contact information."
          isOpen={isOpen("contact")}
          onToggle={() => toggleSection("contact")}
        >
          <div className="flex flex-col gap-3 pt-3">
            <FieldText
              id="biz-contact-name"
              label="Contact Name"
              placeholder="E.g. Robert Junior"
              prefixIcon={User}
            />
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
          icon={UserCircle2}
          title="About Company"
          subtitle="Add more information about your business."
          isOpen={isOpen("about")}
          onToggle={() => toggleSection("about")}
        >
          <div className="pt-3">
            <FieldTextarea
              id="biz-about"
              label=""
              placeholder="E.g. Los Angeles based clothing store selling innovative designs for over 15 years"
              rows={5}
            />
          </div>
        </ContentSection>

        <ContentSection
          icon={LayoutGrid}
          title="Facilities"
          subtitle="Choose amenities available at your venue."
          isOpen={isOpen("facilities")}
          onToggle={() => toggleSection("facilities")}
        >
          <FacilitiesGrid />
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
          <BusinessPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
