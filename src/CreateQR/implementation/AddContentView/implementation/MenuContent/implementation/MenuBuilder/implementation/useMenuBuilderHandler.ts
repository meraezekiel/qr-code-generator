import { useState } from "react";

export type MenuProduct = {
  id: string;
  collapsed: boolean;
};

export type MenuSection = {
  id: string;
  name: string;
  description: string;
  collapsed: boolean;
  products: MenuProduct[];
};

const newId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const newProduct = (): MenuProduct => ({ id: newId(), collapsed: false });

const newSection = (): MenuSection => ({
  id: newId(),
  name: "",
  description: "",
  collapsed: false,
  products: [newProduct()],
});

const swap = <T,>(items: T[], i: number, j: number): T[] => {
  if (j < 0 || j >= items.length) return items;
  const next = [...items];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
};

export function useMenuBuilderHandler() {
  const [sections, setSections] = useState<MenuSection[]>(() => [newSection()]);

  const addSection = () =>
    setSections((current) => [...current, newSection()]);

  const removeSection = (id: string) =>
    setSections((current) => current.filter((s) => s.id !== id));

  const moveSection = (id: string, dir: -1 | 1) =>
    setSections((current) => {
      const idx = current.findIndex((s) => s.id === id);
      return idx < 0 ? current : swap(current, idx, idx + dir);
    });

  const toggleSectionCollapsed = (id: string) =>
    setSections((current) =>
      current.map((s) =>
        s.id === id ? { ...s, collapsed: !s.collapsed } : s,
      ),
    );

  const updateSectionName = (id: string, value: string) =>
    setSections((current) =>
      current.map((s) => (s.id === id ? { ...s, name: value } : s)),
    );

  const updateSectionDescription = (id: string, value: string) =>
    setSections((current) =>
      current.map((s) => (s.id === id ? { ...s, description: value } : s)),
    );

  const addProduct = (sectionId: string) =>
    setSections((current) =>
      current.map((s) =>
        s.id === sectionId
          ? { ...s, products: [...s.products, newProduct()] }
          : s,
      ),
    );

  const removeProduct = (sectionId: string, productId: string) =>
    setSections((current) =>
      current.map((s) =>
        s.id === sectionId
          ? { ...s, products: s.products.filter((p) => p.id !== productId) }
          : s,
      ),
    );

  const moveProduct = (sectionId: string, productId: string, dir: -1 | 1) =>
    setSections((current) =>
      current.map((s) => {
        if (s.id !== sectionId) return s;
        const idx = s.products.findIndex((p) => p.id === productId);
        return idx < 0 ? s : { ...s, products: swap(s.products, idx, idx + dir) };
      }),
    );

  const toggleProductCollapsed = (sectionId: string, productId: string) =>
    setSections((current) =>
      current.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              products: s.products.map((p) =>
                p.id === productId ? { ...p, collapsed: !p.collapsed } : p,
              ),
            }
          : s,
      ),
    );

  return {
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
  };
}
