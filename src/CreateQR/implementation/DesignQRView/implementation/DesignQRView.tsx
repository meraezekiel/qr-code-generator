import { CornersSection } from "./CornersSection";
import { DesignPreview } from "./DesignPreview";
import { DesignQRViewProps } from "./DesignQRViewProps";
import { FrameSection } from "./FrameSection";
import { LogoSection } from "./LogoSection";
import { PatternSection } from "./PatternSection";
import { StepFormShell } from "../../StepFormShell";

export function DesignQRView({
  selectedType,
  qrValue,
  designHandler,
  onBack,
  onCreate,
}: DesignQRViewProps) {
  const {
    design,
    isOpen,
    toggle,
    swapColors,
    setFrameStyle,
    setPatternStyle,
    setPatternColor,
    setPatternColor2,
    setPatternGradient,
    setPatternGradientStyle,
    setBackgroundColor,
    setBackgroundColor2,
    setBackgroundGradient,
    setBackgroundGradientStyle,
    setBackgroundTransparent,
    setCornerFrameStyle,
    setCornerDotStyle,
    setCornerFrameColor,
    setCornerDotColor,
    setLogoDataUrl,
  } = designHandler;

  return (
    <StepFormShell
      title="3. Design the QR"
      onBack={onBack}
      primaryAction={{
        label: "Create",
        onClick: onCreate,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
        <div className="flex flex-col gap-4">
          <FrameSection
            value={design.frameStyle}
            onChange={setFrameStyle}
            isOpen={isOpen("frame")}
            onToggle={() => toggle("frame")}
          />
          <PatternSection
            patternStyle={design.patternStyle}
            patternColor={design.patternColor}
            patternColor2={design.patternColor2}
            patternGradient={design.patternGradient}
            patternGradientStyle={design.patternGradientStyle}
            backgroundColor={design.backgroundColor}
            backgroundColor2={design.backgroundColor2}
            backgroundGradient={design.backgroundGradient}
            backgroundGradientStyle={design.backgroundGradientStyle}
            backgroundTransparent={design.backgroundTransparent}
            onPatternStyleChange={setPatternStyle}
            onPatternColorChange={setPatternColor}
            onPatternColor2Change={setPatternColor2}
            onPatternGradientChange={setPatternGradient}
            onPatternGradientStyleChange={setPatternGradientStyle}
            onBackgroundColorChange={setBackgroundColor}
            onBackgroundColor2Change={setBackgroundColor2}
            onBackgroundGradientChange={setBackgroundGradient}
            onBackgroundGradientStyleChange={setBackgroundGradientStyle}
            onBackgroundTransparentChange={setBackgroundTransparent}
            onSwapColors={swapColors}
            isOpen={isOpen("pattern")}
            onToggle={() => toggle("pattern")}
          />
          <CornersSection
            cornerFrameStyle={design.cornerFrameStyle}
            cornerDotStyle={design.cornerDotStyle}
            cornerFrameColor={design.cornerFrameColor}
            cornerDotColor={design.cornerDotColor}
            onCornerFrameStyleChange={setCornerFrameStyle}
            onCornerDotStyleChange={setCornerDotStyle}
            onCornerFrameColorChange={setCornerFrameColor}
            onCornerDotColorChange={setCornerDotColor}
            isOpen={isOpen("corners")}
            onToggle={() => toggle("corners")}
          />
          <LogoSection
            logoDataUrl={design.logoDataUrl}
            onLogoChange={setLogoDataUrl}
            isOpen={isOpen("logo")}
            onToggle={() => toggle("logo")}
          />
        </div>

        <div className="flex justify-center lg:justify-end lg:sticky lg:top-6">
          <DesignPreview
            design={design}
            selectedType={selectedType}
            qrValue={qrValue}
          />
        </div>
      </div>
    </StepFormShell>
  );
}
