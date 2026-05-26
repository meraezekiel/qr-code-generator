import { PhoneShell } from "../../PhoneShell";
import { PreviewFor } from "../../PhoneShell/implementation/PreviewFor";
import { QR_TYPES } from "../../useCreateQRHandler";
import { ContentForm } from "./ContentForm";
import type { StepComposeProps } from "./StepComposeProps";
import { TypePicker } from "./TypePicker";

export function StepCompose({
  state,
  currentType,
  fieldErrors,
  onSelectType,
  onContentChange,
  onQueryChange,
  onCategoryChange,
}: StepComposeProps) {
  return (
    <>
      <section className="atl-hero">
        <div>
          <div className="atl-hero__kicker">
            <span>Step 01</span> · Compose
          </div>
          <h1 className="atl-hero__h1">
            Make a QR
            <br />
            <em>worth scanning.</em>
          </h1>
          <p className="atl-hero__sub">
            Pick what your code should do, then fill in the details on the right.
            The preview updates live, so what you see is exactly what scanners get.
          </p>
        </div>
        <div className="atl-hero__counter">
          <div className="label">Types available</div>
          <div className="num">
            {QR_TYPES.length.toString().padStart(2, "0")}
            <small>/ kinds</small>
          </div>
        </div>
      </section>

      <section className="atl-canvas">
        <TypePicker
          query={state.query}
          category={state.category}
          selectedId={state.typeId}
          onQueryChange={onQueryChange}
          onCategoryChange={onCategoryChange}
          onSelectType={onSelectType}
        />

        <ContentForm
          type={currentType}
          content={state.content}
          fieldErrors={fieldErrors}
          onContentChange={onContentChange}
        />

        <div className="atl-preview-rail">
          <PhoneShell key={state.typeId || "empty"}>
            <PreviewFor
              typeId={state.typeId}
              content={state.content}
              label={currentType?.label}
              sub={currentType?.sub}
              Icon={currentType?.Icon}
            />
          </PhoneShell>
          <div className="atl-preview-meta">
            <div className="atl-live-dot" /> Live · iPhone 15
          </div>
        </div>
      </section>
    </>
  );
}
