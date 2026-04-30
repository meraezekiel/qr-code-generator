import { ArrowDownUp } from "lucide-react";
import { SwapDividerProps } from "./SwapDividerProps";
import { useSwapDividerHandler } from "./useSwapDividerHandler";

export function SwapDivider({ onSwap }: SwapDividerProps) {
  const { onSwap: swap } = useSwapDividerHandler({ onSwap });

  return (
    <div className="relative flex items-center">
      <div className="flex-1 h-px bg-slate-200" />
      <button
        type="button"
        onClick={swap}
        aria-label="Swap pattern and background colors"
        className="mx-3 w-9 h-9 rounded-full border border-brand bg-white text-brand flex items-center justify-center hover:bg-brand-subtle transition-colors"
      >
        <ArrowDownUp className="w-4 h-4" strokeWidth={2} />
      </button>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}
