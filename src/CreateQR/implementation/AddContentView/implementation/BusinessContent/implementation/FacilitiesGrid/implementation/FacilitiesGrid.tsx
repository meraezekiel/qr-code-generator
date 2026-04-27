import { useFacilitiesGridHandler } from "./useFacilitiesGridHandler";

export function FacilitiesGrid() {
  const { facilities, isSelected, toggle } = useFacilitiesGridHandler();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-3">
      {facilities.map(({ id, label, icon: Icon }) => {
        const selected = isSelected(id);
        return (
          <button
            key={id}
            type="button"
            onClick={() => toggle(id)}
            aria-pressed={selected}
            className={[
              "flex flex-col items-center gap-2 rounded-lg border p-3 transition-colors",
              selected
                ? "border-brand bg-brand-subtle"
                : "border-slate-200 bg-white hover:border-slate-300",
            ].join(" ")}
          >
            <span
              className={[
                "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                selected
                  ? "bg-brand text-white"
                  : "bg-slate-100 text-slate-500",
              ].join(" ")}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
            </span>
            <span className="text-[11px] font-medium text-slate-700 text-center leading-tight">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
