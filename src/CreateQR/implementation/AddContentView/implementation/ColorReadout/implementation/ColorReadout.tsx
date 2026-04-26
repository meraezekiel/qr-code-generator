import { Pencil } from "lucide-react";
import { ColorReadoutProps } from "./ColorReadoutProps";
import { useColorReadoutHandler } from "./useColorReadoutHandler";

export function ColorReadout({ label, hex, swatchClass }: ColorReadoutProps) {
  const { displayHex } = useColorReadoutHandler({ hex });

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1.5">
        <span className="w-9 h-9 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
          <Pencil className="w-4 h-4" strokeWidth={2} />
        </span>
        <span className={`w-9 h-9 rounded-md ${swatchClass}`} />
        <span className="text-sm font-mono font-semibold text-slate-700 px-1">
          {displayHex}
        </span>
      </div>
    </div>
  );
}
