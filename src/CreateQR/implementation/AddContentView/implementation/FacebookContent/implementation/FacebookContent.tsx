import {
  Check,
  Globe,
  HelpCircle,
  ImagePlus,
  Lock,
  Palette,
  Pencil,
  QrCode,
  Smile,
  Type,
  User,
} from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { ContentSection } from "../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { useFacebookContentHandler } from "./useFacebookContentHandler";
import { FacebookPreviewBody } from "./FacebookPreviewBody";

export function FacebookContent() {
  const {
    isOpen,
    toggleSection,
    backgroundImages,
    selectedBackgroundImage,
    selectBackgroundImage,
    backgroundColors,
    backgroundColorHex,
    selectBackgroundColor,
    selectedProfileImage,
    selectProfileImage,
  } = useFacebookContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={Palette}
          title="Design"
          subtitle="Choose between a background image or a background color for your page."
          isOpen={isOpen("design")}
          onToggle={() => toggleSection("design")}
        >
          <div className="flex flex-col gap-5 pt-3">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-slate-700">
                Background Images
              </span>
              <div className="grid grid-cols-4 gap-3">
                <button
                  type="button"
                  className="aspect-square rounded-lg border-2 border-dashed border-brand bg-brand-subtle/40 flex items-center justify-center text-brand hover:bg-brand-subtle transition-colors"
                  aria-label="Upload background image"
                >
                  <ImagePlus className="w-6 h-6" strokeWidth={1.5} />
                </button>
                {backgroundImages.map((image) => {
                  const selected = image.id === selectedBackgroundImage;
                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => selectBackgroundImage(image.id)}
                      aria-pressed={selected}
                      className={[
                        "relative aspect-square rounded-lg overflow-hidden transition-all",
                        image.swatch,
                        selected
                          ? "ring-2 ring-brand"
                          : "ring-1 ring-slate-200 hover:ring-slate-300",
                      ].join(" ")}
                    >
                      {selected && (
                        <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shadow-md">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="w-10 h-10 rounded-full border-2 border-brand text-brand text-xs font-bold flex items-center justify-center">
                OR
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-slate-700">
                Background Color
              </span>
              <div className="grid grid-cols-4 gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1.5">
                  <span className="w-9 h-9 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                    <Pencil className="w-4 h-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-mono font-semibold text-slate-700 px-1">
                    {backgroundColorHex.toUpperCase()}
                  </span>
                </div>
                {backgroundColors.map((color) => {
                  const selected = color.hex === backgroundColorHex;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => selectBackgroundColor(color.hex)}
                      aria-pressed={selected}
                      className={[
                        "h-12 rounded-lg transition-all",
                        color.swatch,
                        selected
                          ? "ring-2 ring-brand"
                          : "ring-1 ring-slate-200 hover:ring-slate-300",
                      ].join(" ")}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          icon={User}
          title="Profile Image"
          subtitle="Choose between uploading your own profile image or keeping the Facebook logo."
          isOpen={isOpen("profile")}
          onToggle={() => toggleSection("profile")}
        >
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => selectProfileImage("facebook")}
              aria-pressed={selectedProfileImage === "facebook"}
              className={[
                "relative w-16 h-16 rounded-md overflow-hidden flex items-center justify-center bg-[#1877F2] transition-all",
                selectedProfileImage === "facebook"
                  ? "ring-2 ring-brand"
                  : "ring-1 ring-slate-200 hover:ring-slate-300",
              ].join(" ")}
              aria-label="Use Facebook logo"
            >
              <SiFacebook className="w-10 h-10 text-white" />
              {selectedProfileImage === "facebook" && (
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shadow-md">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => selectProfileImage("upload")}
              aria-pressed={selectedProfileImage === "upload"}
              className={[
                "w-16 h-16 rounded-md border-2 border-dashed flex items-center justify-center transition-colors",
                selectedProfileImage === "upload"
                  ? "border-brand bg-brand-subtle text-brand"
                  : "border-slate-300 text-slate-400 hover:border-slate-400 hover:text-slate-500",
              ].join(" ")}
              aria-label="Upload profile image"
            >
              <ImagePlus className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </ContentSection>

        <ContentSection
          icon={Globe}
          title="Basic Information"
          subtitle="Provide information about your Facebook page."
          isOpen={isOpen("basic")}
          onToggle={() => toggleSection("basic")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fb-url"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700"
              >
                <span>
                  Facebook URL
                  <span className="text-rose-500"> *</span>
                </span>
                <HelpCircle
                  className="w-3.5 h-3.5 text-slate-400"
                  strokeWidth={2}
                  aria-hidden
                />
              </label>
              <input
                id="fb-url"
                type="url"
                placeholder="https://facebook/yourpage"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <FieldText
              id="fb-title"
              label="Title"
              placeholder="E.g. My Facebook page"
            />
            <FieldTextarea
              id="fb-description"
              label="Description"
              placeholder="E.g. Click on the Like button below..."
              rows={4}
            />
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
          <FacebookPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
