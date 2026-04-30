import { Check, Eye, EyeOff, Globe, Lock, QrCode } from "lucide-react";
import { useEffect } from "react";
import { ContentSection } from "../../../../ContentSection";
import { PreviewPanel } from "../../PreviewPanel";
import { useWebsiteContentHandler } from "./useWebsiteContentHandler";
import { WebsiteContentProps } from "./WebsiteContentProps";
import { WebsitePreviewBody } from "./WebsitePreviewBody";

export function WebsiteContent({
  onValidityChange,
  onQrValueChange,
}: WebsiteContentProps) {
  const {
    isOpen,
    toggleSection,
    url,
    setUrl,
    urlError,
    isValid,
    qrValue,
    handleUrlBlur,
    name,
    setName,
    passwordEnabled,
    togglePasswordEnabled,
    password,
    setPassword,
    passwordVisible,
    togglePasswordVisible,
  } = useWebsiteContentHandler();

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
          icon={Globe}
          title="Website Information"
          subtitle="Input the URL this QR will redirect to."
          required
          isOpen={isOpen("website")}
          onToggle={() => toggleSection("website")}
        >
          <div className="flex flex-col gap-2 pt-3">
            <label
              htmlFor="website-url"
              className="text-xs font-semibold text-slate-700"
            >
              Website URL <span className="text-rose-500">*</span>
            </label>
            <input
              id="website-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBlur={handleUrlBlur}
              aria-invalid={urlError ? true : undefined}
              aria-describedby={urlError ? "website-url-error" : undefined}
              placeholder="E.g. https://www.mywebsite.com/"
              className={[
                "w-full rounded-lg border px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                urlError
                  ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
                  : "border-slate-200 focus:border-brand focus:ring-brand/20",
              ].join(" ")}
            />
            {urlError && (
              <p
                id="website-url-error"
                role="alert"
                className="text-xs font-medium text-rose-600"
              >
                {urlError}
              </p>
            )}
          </div>
        </ContentSection>

        <ContentSection
          icon={QrCode}
          title="Name of the QR Code"
          subtitle="Give a name to your QR code."
          isOpen={isOpen("name")}
          onToggle={() => toggleSection("name")}
        >
          <div className="flex flex-col gap-2 pt-3">
            <label
              htmlFor="qr-name"
              className="text-xs font-semibold text-slate-700"
            >
              Name
            </label>
            <input
              id="qr-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="E.g. My QR code"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </ContentSection>

        <ContentSection
          icon={Lock}
          title="Password"
          helpHint
          isOpen={isOpen("password")}
          onToggle={() => toggleSection("password")}
        >
          <div className="flex flex-col gap-4 pt-3">
            <button
              type="button"
              onClick={togglePasswordEnabled}
              aria-pressed={passwordEnabled}
              className="inline-flex items-center gap-2.5 self-start text-sm font-semibold text-slate-700"
            >
              <span
                className={[
                  "w-5 h-5 rounded-md flex items-center justify-center transition-colors",
                  passwordEnabled
                    ? "bg-emerald-500 border-2 border-emerald-500"
                    : "border-2 border-slate-300 bg-white",
                ].join(" ")}
                aria-hidden
              >
                {passwordEnabled && (
                  <Check
                    className="w-3.5 h-3.5 text-white"
                    strokeWidth={3}
                  />
                )}
              </span>
              Activate password
            </button>

            {passwordEnabled && (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="qr-password"
                  className="text-xs font-semibold text-slate-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="qr-password"
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="Enter a password"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-12 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisible}
                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                    aria-pressed={passwordVisible}
                    className="absolute inset-y-0 right-0 flex items-center justify-center w-11 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus-visible:text-slate-700"
                  >
                    {passwordVisible ? (
                      <EyeOff className="w-5 h-5" strokeWidth={2} aria-hidden />
                    ) : (
                      <Eye className="w-5 h-5" strokeWidth={2} aria-hidden />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </ContentSection>
      </div>

      <div className="flex justify-center lg:justify-end">
        <PreviewPanel qrValue={qrValue} qrEnabled={isValid}>
          <WebsitePreviewBody url={url} />
        </PreviewPanel>
      </div>
    </div>
  );
}
