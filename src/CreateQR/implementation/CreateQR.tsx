import { toast } from "sonner";
import { ActionBar } from "./ActionBar";
import { StepCompose } from "./StepCompose";
import { StepGet } from "./StepGet";
import { StepStyle } from "./StepStyle";
import { TopNav } from "./TopNav";
import { useCreateQRHandler, type QrFormat } from "./useCreateQRHandler";
import { renderQr } from "../../lib/renderQrPng";

export function CreateQR() {
  const {
    state,
    set,
    setContent,
    setStyle,
    setFormat,
    selectType,
    goTo,
    canAdvance,
    qrValue,
    currentType,
    fieldErrors,
  } = useCreateQRHandler();

  const onDownload = async (format: QrFormat) => {
    try {
      const blob = await renderQr(qrValue, state.style, format);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qr-${Date.now()}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success(`QR downloaded`, {
        description: `Saved as ${format.toUpperCase()} to your downloads.`,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to render QR";
      toast.error("Download failed", { description: msg });
    }
  };

  return (
    <div className="atl-shell">
      <TopNav step={state.step} goTo={goTo} />
      <div>
        {state.step === 0 && (
          <StepCompose
            state={state}
            currentType={currentType}
            fieldErrors={fieldErrors}
            onSelectType={selectType}
            onContentChange={setContent}
            onQueryChange={(q) => set({ query: q })}
            onCategoryChange={(c) => set({ category: c })}
          />
        )}
        {state.step === 1 && (
          <StepStyle
            style={state.style}
            qrValue={qrValue}
            currentType={currentType}
            onStyleChange={setStyle}
          />
        )}
        {state.step === 2 && (
          <StepGet
            style={state.style}
            qrValue={qrValue}
            selectedFormat={state.format}
            onSelectFormat={setFormat}
          />
        )}
      </div>
      <ActionBar
        step={state.step}
        goTo={goTo}
        canAdvance={canAdvance}
        selectedFormat={state.format}
        onDownload={() => onDownload(state.format)}
      />
    </div>
  );
}
