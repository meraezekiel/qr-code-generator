import { useMemo } from "react";
import { Check, Search } from "lucide-react";
import {
  QR_CATEGORIES,
  QR_TYPES,
  type CategoryId,
} from "../../../../useCreateQRHandler";
import type { TypePickerProps } from "./TypePickerProps";

export function TypePicker({
  query,
  category,
  selectedId,
  onQueryChange,
  onCategoryChange,
  onSelectType,
}: TypePickerProps) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return QR_TYPES.filter((t) => category === "all" || t.category === category)
      .filter(
        (t) =>
          !q ||
          t.label.toLowerCase().includes(q) ||
          t.sub.toLowerCase().includes(q)
      );
  }, [query, category]);

  return (
    <div className="atl-panel">
      <div className="atl-panel__head">
        <div className="atl-panel__title">
          <em>Pick</em> a type
        </div>
        <div className="atl-panel__meta">{filtered.length} kinds</div>
      </div>
      <div className="atl-panel__body">
        <div className="atl-search">
          <Search size={16} strokeWidth={1.75} />
          <input
            placeholder="Search — vCard, WiFi, menu…"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          <kbd>⌘ K</kbd>
        </div>
        <div className="atl-cat-row">
          <button
            type="button"
            className="atl-cat-pill"
            data-active={category === "all"}
            onClick={() => onCategoryChange("all")}
          >
            All
          </button>
          {QR_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className="atl-cat-pill"
              data-active={category === c.id}
              onClick={() => onCategoryChange(c.id as CategoryId)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="atl-type-grid">
          {filtered.map((t) => {
            const Icon = t.Icon;
            return (
              <button
                key={t.id}
                type="button"
                className="atl-type-item"
                data-selected={selectedId === t.id}
                onClick={() => onSelectType(t.id)}
              >
                <div className="atl-type-item__ic">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div className="atl-type-item__body">
                  <div className="atl-type-item__lbl">{t.label}</div>
                  <div className="atl-type-item__sub">{t.sub}</div>
                </div>
                <div className="atl-type-item__check">
                  <Check size={14} strokeWidth={2.25} />
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                padding: "40px 20px",
                textAlign: "center",
                color: "var(--muted)",
                fontSize: 13,
              }}
            >
              No match for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
