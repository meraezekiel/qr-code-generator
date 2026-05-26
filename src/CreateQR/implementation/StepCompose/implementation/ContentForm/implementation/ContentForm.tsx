import { AlertCircle, MousePointerClick } from "lucide-react";
import { FIELDS_BY_TYPE } from "../../../../useCreateQRHandler";
import type { ContentFormProps } from "./ContentFormProps";
import { FileUploadField } from "./FileUploadField";

export function ContentForm({
  type,
  content,
  fieldErrors,
  onContentChange,
}: ContentFormProps) {
  const fields = type ? FIELDS_BY_TYPE[type.id] || [] : [];

  return (
    <div className="atl-panel">
      <div className="atl-panel__head">
        <div className="atl-panel__title">
          {type ? (
            <>
              The <em>content</em>
            </>
          ) : (
            <>
              What it'll <em>do</em>
            </>
          )}
        </div>
        <div className="atl-panel__meta">{type ? type.label : "—"}</div>
      </div>
      <div className="atl-panel__body">
        {!type ? (
          <div className="atl-empty-form">
            <div className="ic-wrap">
              <MousePointerClick size={22} strokeWidth={1.5} />
            </div>
            <h4>
              Choose a type
              <br />
              to get started
            </h4>
            <p>
              Each type has its own short form. We keep it minimal — only what's
              required.
            </p>
          </div>
        ) : (
          <div className="atl-form-stack">
            {fields.map((f) => {
              const id = `f-${f.k}`;
              const error = fieldErrors[f.k];
              const errorId = error ? `${id}-error` : undefined;
              const inputClass = error ? "atl-input atl-input--invalid" : "atl-input";
              return (
                <div className="atl-field-grp" key={f.k}>
                  <label htmlFor={id}>
                    {f.lbl} <span>{f.required ? "required" : "optional"}</span>
                  </label>
                  {f.kind === "textarea" ? (
                    <textarea
                      id={id}
                      className={inputClass}
                      placeholder={f.placeholder}
                      value={content[f.k] || ""}
                      aria-invalid={!!error}
                      aria-describedby={errorId}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    />
                  ) : f.kind === "select" ? (
                    <select
                      id={id}
                      className={inputClass}
                      value={content[f.k] || (f.options && f.options[0]) || ""}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    >
                      {f.options?.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.kind === "file" ? (
                    <FileUploadField
                      fieldKey={f.k}
                      inputId={id}
                      value={content[f.k] || ""}
                      accept={f.accept}
                      onContentChange={onContentChange}
                    />
                  ) : (
                    <input
                      id={id}
                      className={inputClass}
                      placeholder={f.placeholder}
                      value={content[f.k] || ""}
                      inputMode={f.validate === "url" ? "url" : undefined}
                      autoCapitalize={f.validate === "url" ? "off" : undefined}
                      autoCorrect={f.validate === "url" ? "off" : undefined}
                      spellCheck={f.validate === "url" ? false : undefined}
                      aria-invalid={!!error}
                      aria-describedby={errorId}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    />
                  )}
                  {error && (
                    <div id={errorId} className="atl-field-error" role="alert">
                      <AlertCircle size={12} strokeWidth={2} />
                      <span>{error}</span>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="atl-tip">
              Dynamic codes — you can edit this content any time without reprinting.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
