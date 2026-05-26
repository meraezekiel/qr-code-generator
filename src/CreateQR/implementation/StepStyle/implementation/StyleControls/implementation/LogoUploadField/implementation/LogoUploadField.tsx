import { AlertCircle, Loader2, RotateCcw, Upload, X } from "lucide-react";
import type { LogoUploadFieldProps } from "./LogoUploadFieldProps";
import { useLogoUploadFieldHandler } from "./useLogoUploadFieldHandler";

export function LogoUploadField({ value, onChange }: LogoUploadFieldProps) {
  const {
    inputRef,
    error,
    dragOver,
    loading,
    triggerPicker,
    onInputChange,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    clear,
  } = useLogoUploadFieldHandler({ onChange });

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/svg+xml"
        style={{ display: "none" }}
        onChange={onInputChange}
      />

      {value ? (
        <div
          className="atl-logo-card"
          data-drop={dragOver}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="atl-logo-card__preview">
            <img src={value} alt="Brand logo" />
          </div>
          <div className="atl-logo-card__body">
            <div className="atl-logo-card__title">Logo added</div>
            <div className="atl-logo-card__hint">Centred on the code</div>
          </div>
          <button
            type="button"
            className="atl-upload__btn"
            onClick={triggerPicker}
            disabled={loading}
          >
            <RotateCcw size={12} strokeWidth={2} /> Replace
          </button>
          <button
            type="button"
            className="atl-upload__btn atl-upload__btn--ghost"
            onClick={clear}
            aria-label="Remove logo"
          >
            <X size={14} strokeWidth={2} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="atl-input atl-upload-trigger atl-logo-drop"
          data-drop={dragOver}
          onClick={triggerPicker}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <Loader2 size={16} strokeWidth={1.75} className="atl-spin" />
              <span>Reading image…</span>
            </>
          ) : (
            <>
              <Upload size={16} strokeWidth={1.5} />
              <span>
                {dragOver
                  ? "Drop to use as logo"
                  : "Drop a PNG or SVG to centre on the code"}
              </span>
            </>
          )}
        </button>
      )}

      {error && (
        <div className="atl-field-error" role="alert">
          <AlertCircle size={12} strokeWidth={2} />
          <span>{error}</span>
        </div>
      )}
    </>
  );
}
