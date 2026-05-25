import type { QrArtProps } from "./QrArtProps";
import { useQrArtHandler } from "./useQrArtHandler";

export function QrArt({ value, style }: QrArtProps) {
  const { containerRef } = useQrArtHandler(value, style);
  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="QR code"
      className="[&>svg]:w-full [&>svg]:h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
