import { QrArt } from "../../../../QrArt";
import { PALETTE_BY_ID } from "../../../../useCreateQRHandler";
import type { QrStageProps } from "./QrStageProps";

export function QrStage({
  style,
  qrValue,
  size,
  qrSize,
  padding,
  stagePadding = 24,
}: QrStageProps) {
  const palette = PALETTE_BY_ID[style.palette];
  return (
    <div className="atl-qr-stage" style={{ padding: stagePadding }}>
      <span className="scan-c tl" />
      <span className="scan-c tr" />
      <span className="scan-c bl" />
      <span className="scan-c br" />
      <div
        style={{
          width: size,
          height: size,
          background: palette.bg,
          padding,
          borderRadius: 8,
        }}
      >
        <div style={{ width: qrSize, height: qrSize }}>
          <QrArt value={qrValue} style={style} />
        </div>
      </div>
    </div>
  );
}
