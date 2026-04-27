import { Plus } from "lucide-react";
import { useOpeningHoursEditorHandler } from "./useOpeningHoursEditorHandler";

export function OpeningHoursEditor() {
  const { days, hours, toggleDay, updateRange, addRange } =
    useOpeningHoursEditorHandler();

  return (
    <div className="flex flex-col gap-3 pt-3">
      {days.map(({ id, label }) => {
        const day = hours[id];
        return (
          <div key={id} className="flex flex-col gap-2">
            {day.ranges.map((range, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {idx === 0 ? (
                  <label className="flex items-center gap-2.5 w-32 shrink-0 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={day.enabled}
                      onChange={() => toggleDay(id)}
                      className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand/30"
                    />
                    <span className="text-sm text-slate-700">{label}</span>
                  </label>
                ) : (
                  <span className="w-32 shrink-0" aria-hidden />
                )}
                <input
                  type="time"
                  value={range.from}
                  onChange={(e) =>
                    updateRange(id, idx, "from", e.target.value)
                  }
                  placeholder="--:-- --"
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <input
                  type="time"
                  value={range.to}
                  onChange={(e) => updateRange(id, idx, "to", e.target.value)}
                  placeholder="--:-- --"
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                {idx === 0 ? (
                  <button
                    type="button"
                    onClick={() => addRange(id)}
                    aria-label={`Add another range for ${label}`}
                    className="w-10 h-10 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors shrink-0"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                ) : (
                  <span className="w-10 shrink-0" aria-hidden />
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
