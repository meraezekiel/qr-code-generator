import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { ImageUpload } from "../../../../../../ImageUpload";
import type { MenuProductCardProps } from "./MenuProductCardProps";
import { useMenuProductCardHandler } from "./useMenuProductCardHandler";

export function MenuProductCard({
  index,
  collapsed,
  onToggle,
  onMoveUp,
  onMoveDown,
  onRemove,
}: MenuProductCardProps) {
  const { label } = useMenuProductCardHandler({ index });

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between px-3 py-2">
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-2 text-left"
          aria-expanded={!collapsed}
        >
          <ChevronDown
            className={[
              "w-4 h-4 text-slate-500 transition-transform",
              collapsed ? "-rotate-90" : "",
            ].join(" ")}
            strokeWidth={2.5}
          />
          <span className="text-sm font-bold text-slate-900">{label}</span>
        </button>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onMoveUp}
            aria-label={`Move ${label} up`}
            className="w-7 h-7 rounded-md text-brand hover:bg-brand-subtle transition-colors flex items-center justify-center"
          >
            <ChevronUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            aria-label={`Move ${label} down`}
            className="w-7 h-7 rounded-md text-brand hover:bg-brand-subtle transition-colors flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${label}`}
            className="w-7 h-7 rounded-md text-rose-500 hover:bg-rose-50 transition-colors flex items-center justify-center"
          >
            <Trash2 className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="px-3 pb-3 border-t border-slate-100 pt-3">
          <ImageUpload label="Image" helpHint />
        </div>
      )}
    </div>
  );
}
