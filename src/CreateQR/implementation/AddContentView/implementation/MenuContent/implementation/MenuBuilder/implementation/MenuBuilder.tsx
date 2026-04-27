import { Plus } from "lucide-react";
import { useMenuBuilderHandler } from "./useMenuBuilderHandler";
import { MenuSectionCard } from "./MenuSectionCard";

export function MenuBuilder() {
  const {
    sections,
    addSection,
    removeSection,
    moveSection,
    toggleSectionCollapsed,
    updateSectionName,
    updateSectionDescription,
    addProduct,
    removeProduct,
    moveProduct,
    toggleProductCollapsed,
  } = useMenuBuilderHandler();

  return (
    <div className="flex flex-col gap-4 pt-3">
      {sections.map((section, idx) => (
        <MenuSectionCard
          key={section.id}
          section={section}
          index={idx}
          onToggle={() => toggleSectionCollapsed(section.id)}
          onMoveUp={() => moveSection(section.id, -1)}
          onMoveDown={() => moveSection(section.id, 1)}
          onRemove={() => removeSection(section.id)}
          onUpdateName={(value) => updateSectionName(section.id, value)}
          onUpdateDescription={(value) =>
            updateSectionDescription(section.id, value)
          }
          onAddProduct={() => addProduct(section.id)}
          onRemoveProduct={(productId) => removeProduct(section.id, productId)}
          onMoveProductUp={(productId) =>
            moveProduct(section.id, productId, -1)
          }
          onMoveProductDown={(productId) =>
            moveProduct(section.id, productId, 1)
          }
          onToggleProduct={(productId) =>
            toggleProductCollapsed(section.id, productId)
          }
        />
      ))}

      <button
        type="button"
        onClick={addSection}
        className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-brand text-brand text-sm font-bold py-3 hover:bg-brand-subtle transition-colors"
      >
        <Plus className="w-4 h-4" strokeWidth={2.5} />
        Add Section
      </button>
    </div>
  );
}
