import type { PvGenericProps } from "./PvGenericProps";

const LABELS: Record<string, string> = {
  name: "Name",
  restaurant: "Restaurant",
  title: "Title",
};

export function PvGeneric({ label, sub, Icon, content }: PvGenericProps) {
  const entries = Object.entries(content).filter(([, v]) => v).slice(0, 4);
  return (
    <div className="atl-pv-wifi">
      <div className="top">
        <div className="ic-ring">
          <Icon size={28} strokeWidth={1.75} />
        </div>
        <h5>{label}</h5>
        <p>{sub}</p>
      </div>
      <div className="card">
        {entries.map(([k, v]) => (
          <div className="row" key={k}>
            <span className="k">{LABELS[k] || k}</span>
            <span
              className="v"
              style={{
                fontSize: 11,
                maxWidth: 130,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {v}
            </span>
          </div>
        ))}
        {entries.length === 0 && (
          <div
            style={{
              fontSize: 11,
              color: "var(--muted)",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            Fill in details to preview
          </div>
        )}
      </div>
    </div>
  );
}
