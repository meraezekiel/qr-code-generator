import { toast } from "sonner";
import { ActionBar } from "./ActionBar";
import { StepCompose } from "./StepCompose";
import { StepGet } from "./StepGet";
import { StepStyle } from "./StepStyle";
import { TopNav } from "./TopNav";
import { useCreateQRHandler } from "./useCreateQRHandler";
import { renderQrPng } from "../../lib/renderQrPng";

export function CreateQR() {
  const {
    state,
    set,
    setContent,
    setStyle,
    selectType,
    goTo,
    canAdvance,
    qrValue,
    currentType,
  } = useCreateQRHandler();

  const onDownload = async (format: "png" | "svg" | "pdf" | "eps" = "png") => {
    if (format !== "png") {
      toast.info(`${format.toUpperCase()} export is coming soon`);
      return;
    }
    try {
      const blob = await renderQrPng(qrValue, state.style);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qr-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("QR downloaded", { description: "Saved to your downloads." });
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
          <StepGet style={state.style} qrValue={qrValue} onDownload={onDownload} />
        )}
      </div>
      <ActionBar
        step={state.step}
        goTo={goTo}
        canAdvance={canAdvance}
        onDownload={() => onDownload("png")}
      />
    </div>
  );
}
