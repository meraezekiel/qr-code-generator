import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { MenuProductCard } from "../../MenuProductCard";
import type { MenuSectionCardProps } from "./MenuSectionCardProps";
import { useMenuSectionCardHandler } from "./useMenuSectionCardHandler";

export function MenuSectionCard({
  section,
  index,
  onToggle,
  onMoveUp,
  onMoveDown,
  onRemove,
  onUpdateName,
  onUpdateDescription,
  onAddProduct,
  onRemoveProduct,
  onMoveProductUp,
  onMoveProductDown,
  onToggleProduct,
}: MenuSectionCardProps) {
  const { label } = useMenuSectionCardHandler({ index });

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-2 text-left"
          aria-expanded={!section.collapsed}
        >
          <ChevronDown
            className={[
              "w-4 h-4 text-slate-500 transition-transform",
              section.collapsed ? "-rotate-90" : "",
            ].join(" ")}
            strokeWidth={2.5}
          />
          <span className="text-base font-bold text-slate-900">{label}</span>
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${label}`}
            className="w-9 h-9 rounded-md border border-rose-300 text-rose-500 hover:bg-rose-50 transition-colors flex items-center justify-center"
          >
            <Trash2 className="w-4 h-4" strokeWidth={2} />
          </button>
          <span className="text-slate-300" aria-hidden>|</span>
          <button
            type="button"
            onClick={onMoveUp}
            aria-label={`Move ${label} up`}
            className="w-9 h-9 rounded-md border border-brand text-brand hover:bg-brand-subtle transition-colors flex items-center justify-center"
          >
            <ChevronUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            aria-label={`Move ${label} down`}
            className="w-9 h-9 rounded-md border border-brand text-brand hover:bg-brand-subtle transition-colors flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {!section.collapsed && (
        <div className="px-4 pb-4 border-t border-slate-100 pt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={`menu-section-name-${section.id}`}
              className="text-xs font-semibold text-slate-700"
            >
              Name of the section<span className="text-rose-500"> *</span>
            </label>
            <input
              id={`menu-section-name-${section.id}`}
              type="text"
              value={section.name}
              onChange={(e) => onUpdateName(e.target.value)}
              placeholder="E.g. Appetizers"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={`menu-section-description-${section.id}`}
              className="text-xs font-semibold text-slate-700"
            >
              Description
            </label>
            <input
              id={`menu-section-description-${section.id}`}
              type="text"
              value={section.description}
              onChange={(e) => onUpdateDescription(e.target.value)}
              placeholder="E.g. Irresistible selection of appetizers"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div className="flex flex-col gap-3">
            {section.products.map((product, idx) => (
              <MenuProductCard
                key={product.id}
                index={idx}
                collapsed={product.collapsed}
                onToggle={() => onToggleProduct(product.id)}
                onMoveUp={() => onMoveProductUp(product.id)}
                onMoveDown={() => onMoveProductDown(product.id)}
                onRemove={() => onRemoveProduct(product.id)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onAddProduct}
            className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-brand/40 text-brand text-sm font-bold py-3 hover:bg-brand-subtle transition-colors"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Add Product
          </button>
        </div>
      )}
    </div>
  );
}
