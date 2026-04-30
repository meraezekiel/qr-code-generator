import { Pencil } from "lucide-react";
import { ColorFieldProps } from "./ColorFieldProps";
import { useColorFieldHandler } from "./useColorFieldHandler";

export function ColorField({ label, value, onChange }: ColorFieldProps) {
  const { inputId, onTextChange, onPickerChange, swatch } = useColorFieldHandler({
    value,
    onChange,
  });

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-xs font-semibold text-slate-700">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-slate-200 bg-white overflow-hidden focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
        <label
          className="relative w-11 h-11 shrink-0 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: swatch }}
          aria-label="Pick color"
        >
          <Pencil
            className="w-4 h-4 text-white mix-blend-difference"
            strokeWidth={2}
            aria-hidden
          />
          <input
            type="color"
            value={swatch}
            onChange={(e) => onPickerChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(e) => onTextChange(e.target.value)}
          spellCheck={false}
          className="flex-1 px-3 py-2.5 text-sm font-mono text-slate-800 bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
}
