import { QRCodeArtworkProps } from "./QRCodeArtworkProps";
import { useQRCodeArtworkHandler } from "./useQRCodeArtworkHandler";

export function QRCodeArtwork({ design, value }: QRCodeArtworkProps) {
  const { containerRef } = useQRCodeArtworkHandler(value, design);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="QR code preview"
      className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
    />
  );
}
