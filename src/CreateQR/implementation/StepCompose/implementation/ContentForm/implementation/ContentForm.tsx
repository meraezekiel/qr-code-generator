import { MousePointerClick, Upload } from "lucide-react";
import { FIELDS_BY_TYPE } from "../../../../useCreateQRHandler";
import type { ContentFormProps } from "./ContentFormProps";

export function ContentForm({ type, content, onContentChange }: ContentFormProps) {
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
              return (
                <div className="atl-field-grp" key={f.k}>
                  <label htmlFor={id}>
                    {f.lbl} <span>{f.required ? "required" : "optional"}</span>
                  </label>
                  {f.kind === "textarea" ? (
                    <textarea
                      id={id}
                      className="atl-input"
                      placeholder={f.placeholder}
                      value={content[f.k] || ""}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    />
                  ) : f.kind === "select" ? (
                    <select
                      id={id}
                      className="atl-input"
                      value={content[f.k] || (f.options && f.options[0]) || ""}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    >
                      {f.options?.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.kind === "file" ? (
                    <button
                      type="button"
                      className="atl-input"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        justifyContent: "flex-start",
                        color: "var(--muted-deep)",
                        cursor: "pointer",
                      }}
                    >
                      <Upload size={16} strokeWidth={1.5} /> Choose a{" "}
                      {f.accept ? "PDF" : "file"} to upload
                    </button>
                  ) : (
                    <input
                      id={id}
                      className="atl-input"
                      placeholder={f.placeholder}
                      value={content[f.k] || ""}
                      onChange={(e) => onContentChange(f.k, e.target.value)}
                    />
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
