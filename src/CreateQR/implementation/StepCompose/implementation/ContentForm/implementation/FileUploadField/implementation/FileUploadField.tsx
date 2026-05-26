import { AlertCircle, Check, Loader2, RotateCcw, Upload, X } from "lucide-react";
import type { FileUploadFieldProps } from "./FileUploadFieldProps";
import { useFileUploadFieldHandler } from "./useFileUploadFieldHandler";

export function FileUploadField({
  fieldKey,
  inputId,
  value,
  accept,
  onContentChange,
}: FileUploadFieldProps) {
  const {
    inputRef,
    fileName,
    uploading,
    error,
    hasUpload,
    triggerPicker,
    handleChange,
    clear,
  } = useFileUploadFieldHandler({ fieldKey, value, accept, onContentChange });

  const kindLabel = accept === "application/pdf" ? "PDF" : "file";
  const showDone = hasUpload && !uploading;

  return (
    <>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      {showDone ? (
        <div className="atl-upload">
          <div className="atl-upload__icon">
            <Check size={14} strokeWidth={2.5} />
          </div>
          <div className="atl-upload__body">
            <div className="atl-upload__name">{fileName || `${kindLabel} uploaded`}</div>
            <div className="atl-upload__hint">Ready to encode in your QR</div>
          </div>
          <button
            type="button"
            className="atl-upload__btn"
            onClick={triggerPicker}
          >
            <RotateCcw size={12} strokeWidth={2} /> Replace
          </button>
          <button
            type="button"
            className="atl-upload__btn atl-upload__btn--ghost"
            onClick={clear}
            aria-label={`Remove uploaded ${kindLabel}`}
          >
            <X size={14} strokeWidth={2} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="atl-input atl-upload-trigger"
          onClick={triggerPicker}
          disabled={uploading}
          aria-busy={uploading}
        >
          {uploading ? (
            <>
              <Loader2 size={16} strokeWidth={1.75} className="atl-spin" />
              <span>Uploading{fileName ? ` ${fileName}` : "…"}</span>
            </>
          ) : (
            <>
              <Upload size={16} strokeWidth={1.5} />
              <span>Choose a {kindLabel} to upload</span>
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
