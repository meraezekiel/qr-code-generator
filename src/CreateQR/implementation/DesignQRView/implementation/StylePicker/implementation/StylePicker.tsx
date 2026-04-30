import { StylePickerProps } from "./StylePickerProps";
import { useStylePickerHandler } from "./useStylePickerHandler";

export function StylePicker({ items, value, onChange, columns }: StylePickerProps) {
  const { isSelected, select } = useStylePickerHandler({ value, onChange });

  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => {
        const selected = isSelected(item.id);
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected}
            onClick={() => select(item.id)}
            className={[
              "aspect-square rounded-lg bg-white flex flex-col items-center justify-center p-1.5 transition-colors",
              selected
                ? "border-2 border-brand ring-1 ring-brand/30"
                : "border border-slate-200 hover:border-slate-300",
            ].join(" ")}
          >
            <div className="flex-1 w-full flex items-center justify-center min-h-0">
              {item.render()}
            </div>
            {item.label && (
              <span className="text-[9px] font-semibold text-slate-700 mt-0.5 truncate w-full text-center">
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
