import { QrCode } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { ColorField } from "../../ColorField";
import { InfoBanner } from "../../InfoBanner";
import { StylePicker } from "../../StylePicker";
import { SwapDivider } from "../../SwapDivider";
import { PatternSectionProps, PatternStyleId } from "./PatternSectionProps";
import { usePatternSectionHandler } from "./usePatternSectionHandler";
import type { GradientStyle } from "../../useDesignQRViewHandler";

export function PatternSection({
  patternStyle,
  patternColor,
  patternColor2,
  patternGradient,
  patternGradientStyle,
  backgroundColor,
  backgroundColor2,
  backgroundGradient,
  backgroundGradientStyle,
  backgroundTransparent,
  onPatternStyleChange,
  onPatternColorChange,
  onPatternColor2Change,
  onPatternGradientChange,
  onPatternGradientStyleChange,
  onBackgroundColorChange,
  onBackgroundColor2Change,
  onBackgroundGradientChange,
  onBackgroundGradientStyleChange,
  onBackgroundTransparentChange,
  onSwapColors,
  isOpen,
  onToggle,
}: PatternSectionProps) {
  const { patternIds } = usePatternSectionHandler();
  const items = patternIds.map((id) => ({
    id,
    render: () => <PatternSwatch shape={id} />,
  }));

  return (
    <ContentSection
      icon={QrCode}
      title="QR Code Pattern"
      subtitle="Choose a pattern for your QR code and select colors."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="flex flex-col gap-5 pt-3">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-slate-700">Pattern style</span>
          <StylePicker
            items={items}
            value={patternStyle}
            onChange={(id) => onPatternStyleChange(id as PatternStyleId)}
            columns={6}
          />
        </div>

        <ColorBlock
          headerLabel="Pattern color"
          toggleLabel="Use a gradient pattern color"
          gradientEnabled={patternGradient}
          onGradientToggle={onPatternGradientChange}
          gradientStyle={patternGradientStyle}
          onGradientStyleChange={onPatternGradientStyleChange}
          color1Label={patternGradient ? "Pattern color 1" : "Pattern color"}
          color1Value={patternColor}
          onColor1Change={onPatternColorChange}
          color2Label="Pattern color 2"
          color2Value={patternColor2}
          onColor2Change={onPatternColor2Change}
        />

        <SwapDivider onSwap={onSwapColors} />

        <ColorBlock
          headerLabel="Pattern background color"
          toggleLabel="Use a gradient background color"
          gradientEnabled={backgroundGradient}
          onGradientToggle={onBackgroundGradientChange}
          gradientStyle={backgroundGradientStyle}
          onGradientStyleChange={onBackgroundGradientStyleChange}
          color1Label={backgroundGradient ? "Background color 1" : "Background color"}
          color1Value={backgroundColor}
          onColor1Change={onBackgroundColorChange}
          color2Label="Background color 2"
          color2Value={backgroundColor2}
          onColor2Change={onBackgroundColor2Change}
          colorDisabled={backgroundTransparent}
          extraTopControl={
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={backgroundTransparent}
                onChange={(e) => onBackgroundTransparentChange(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-brand focus:ring-brand"
              />
              Transparent background
            </label>
          }
        />

        <InfoBanner>
          <span className="font-semibold text-slate-700">Remember!</span> For optimal
          QR code reading results, we recommend using high-contrast colors.
        </InfoBanner>
      </div>
    </ContentSection>
  );
}

function PatternSwatch({ shape }: { shape: PatternStyleId }) {
  const cellW = 5;
  const gap = shape === "fine" ? 0.4 : shape === "sparse" ? 1 : 0.6;
  const cells: Array<[number, number]> = [
    [0, 0], [2, 0], [4, 0],
    [1, 1], [3, 1],
    [0, 2], [2, 2], [4, 2],
    [1, 3], [3, 3],
    [0, 4], [2, 4], [4, 4],
  ];

  return (
    <svg viewBox="0 0 30 30" className="w-full h-full text-slate-900" aria-hidden>
      {cells.map(([x, y], i) => {
        const cx = x * (cellW + gap) + 1;
        const cy = y * (cellW + gap) + 1;
        switch (shape) {
          case "classic":
            return <rect key={i} x={cx} y={cy} width={cellW} height={cellW} fill="currentColor" />;
          case "rounded":
            return <rect key={i} x={cx} y={cy} width={cellW} height={cellW} rx="1.4" fill="currentColor" />;
          case "dots":
            return <circle key={i} cx={cx + cellW / 2} cy={cy + cellW / 2} r={cellW / 2} fill="currentColor" />;
          case "diagonal":
            return (
              <rect
                key={i}
                x={cx}
                y={cy}
                width={cellW}
                height={cellW}
                fill="currentColor"
                transform={`rotate(45 ${cx + cellW / 2} ${cy + cellW / 2})`}
              />
            );
          case "sparse":
            return <circle key={i} cx={cx + cellW / 2} cy={cy + cellW / 2} r={cellW / 3} fill="currentColor" />;
          case "fine":
            return <rect key={i} x={cx + 1} y={cy + 1} width={cellW - 2} height={cellW - 2} fill="currentColor" />;
        }
      })}
    </svg>
  );
}

type ColorBlockProps = {
  headerLabel: string;
  toggleLabel: string;
  gradientEnabled: boolean;
  onGradientToggle: (next: boolean) => void;
  gradientStyle: GradientStyle;
  onGradientStyleChange: (style: GradientStyle) => void;
  color1Label: string;
  color1Value: string;
  onColor1Change: (hex: string) => void;
  color2Label: string;
  color2Value: string;
  onColor2Change: (hex: string) => void;
  extraTopControl?: React.ReactNode;
  colorDisabled?: boolean;
};

function ColorBlock({
  headerLabel,
  toggleLabel,
  gradientEnabled,
  onGradientToggle,
  gradientStyle,
  onGradientStyleChange,
  color1Label,
  color1Value,
  onColor1Change,
  color2Label,
  color2Value,
  onColor2Change,
  extraTopControl,
  colorDisabled,
}: ColorBlockProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-bold text-slate-900">{headerLabel}</span>
      {extraTopControl}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-end">
        <ToggleRow
          label={toggleLabel}
          value={gradientEnabled}
          onChange={onGradientToggle}
        />
        {gradientEnabled && (
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-slate-700">
              Gradient style
            </span>
            <select
              value={gradientStyle}
              onChange={(e) =>
                onGradientStyleChange(e.target.value as GradientStyle)
              }
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        )}
      </div>

      <div
        className={[
          "grid gap-3",
          gradientEnabled ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
          colorDisabled ? "opacity-40 pointer-events-none" : "",
        ].join(" ")}
      >
        <ColorField
          label={color1Label}
          value={color1Value}
          onChange={onColor1Change}
        />
        {gradientEnabled && (
          <ColorField
            label={color2Label}
            value={color2Value}
            onChange={onColor2Change}
          />
        )}
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-left hover:bg-slate-100 transition-colors"
    >
      <span className="text-sm text-slate-700 flex-1">{label}</span>
      <span
        className={[
          "shrink-0 w-9 h-5 rounded-full p-0.5 transition-colors",
          value ? "bg-brand" : "bg-slate-300",
        ].join(" ")}
      >
        <span
          className={[
            "block w-4 h-4 rounded-full bg-white shadow transition-transform",
            value ? "translate-x-4" : "translate-x-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
