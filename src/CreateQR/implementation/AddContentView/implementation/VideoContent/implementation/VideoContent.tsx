import {
  Info,
  Lock,
  PlayCircle,
  Plus,
  QrCode,
  Smile,
  Type,
  Upload,
} from "lucide-react";
import { ContentSection } from "../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { FieldText } from "../../FieldText";
import { FieldTextarea } from "../../FieldTextarea";
import { SocialNetworksSection } from "../../SocialNetworksSection";
import { useVideoContentHandler } from "./useVideoContentHandler";
import { VideoPreviewBody } from "./VideoPreviewBody";

export function VideoContent() {
  const { isOpen, toggleSection } = useVideoContentHandler();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
      <div className="flex flex-col gap-4">
        <ContentSection
          icon={PlayCircle}
          title="Video"
          subtitle="Add one or more videos to your page."
          required
          isOpen={isOpen("video")}
          onToggle={() => toggleSection("video")}
        >
          <div className="flex flex-col gap-5 pt-3">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-slate-700">
                Video URL
              </span>
              <div className="flex items-stretch gap-3">
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch..."
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-5 rounded-lg bg-brand/30 text-white text-sm font-bold cursor-not-allowed whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  Add video
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-slate-600">
                You can also upload video(s) from your device
              </span>
              <div className="rounded-xl border-2 border-dashed border-brand bg-brand-subtle/40 px-6 py-10 flex flex-col items-center gap-4">
                <div className="relative w-14 h-14 rounded-full border-2 border-brand flex items-center justify-center text-brand">
                  <PlayCircle className="w-7 h-7" strokeWidth={2} />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center">
                    <Upload className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                </div>
                <button
                  type="button"
                  className="px-8 py-3 rounded-md bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm"
                >
                  Upload video(s)
                </button>
                <p className="text-xs font-semibold text-slate-700">
                  Maximum size: 250MB
                </p>
              </div>
            </div>

            <label className="flex items-center gap-3 px-1 cursor-pointer text-slate-400">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
              />
              <span className="text-sm">Show the video directly</span>
            </label>
          </div>
        </ContentSection>

        <ContentSection
          icon={Info}
          title="Video Information"
          subtitle="Add some context to your video page."
          isOpen={isOpen("info")}
          onToggle={() => toggleSection("info")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <FieldText
              id="video-company"
              label="Company"
              placeholder="E.g. My Company"
            />
            <FieldText
              id="video-title"
              label="Video Title"
              placeholder="E.g. My Video"
            />
            <FieldTextarea
              id="video-description"
              label="Description"
              placeholder="E.g. Here is a video about..."
              counter="0 / 4000"
              rows={4}
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
          <VideoPreviewBody />
        </PreviewPanel>
      </div>
    </div>
  );
}
