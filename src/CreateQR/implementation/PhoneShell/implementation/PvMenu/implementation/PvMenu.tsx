import { Utensils } from "lucide-react";
import type { PvMenuProps } from "./PvMenuProps";

const ITEMS = [
  {
    n: "Margherita Pizza",
    d: "Fresh basil, mozzarella",
    p: "$12",
    c: "linear-gradient(135deg,#f0b429,#e87b35)",
  },
  {
    n: "Caesar Salad",
    d: "Crisp, anchovy dressing",
    p: "$8",
    c: "linear-gradient(135deg,#9fd16f,#5fa53f)",
  },
  {
    n: "Pasta Carbonara",
    d: "Guanciale, egg yolk",
    p: "$14",
    c: "linear-gradient(135deg,#e8c98a,#b8862e)",
  },
  {
    n: "Tiramisu",
    d: "Mascarpone, espresso",
    p: "$6",
    c: "linear-gradient(135deg,#a6845e,#6b4423)",
  },
];

export function PvMenu({ content }: PvMenuProps) {
  return (
    <div className="atl-pv-menu">
      <div className="top">
        <Utensils size={14} strokeWidth={1.75} style={{ color: "var(--lime)" }} />
        <span>{content.restaurant || "Our Menu"}</span>
      </div>
      <div className="tabs">
        <button type="button" data-active="true">All</button>
        <button type="button">Mains</button>
        <button type="button">Drinks</button>
        <button type="button">Desserts</button>
      </div>
      <div className="items">
        {ITEMS.map((it) => (
          <div className="item" key={it.n}>
            <div className="thumb" style={{ background: it.c }} />
            <div style={{ flex: 1 }}>
              <div className="n">{it.n}</div>
              <div className="d">{it.d}</div>
            </div>
            <div className="p">{it.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
