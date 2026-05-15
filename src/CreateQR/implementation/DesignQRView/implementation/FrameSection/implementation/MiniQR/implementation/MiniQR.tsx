import { MiniQRProps } from "./MiniQRProps";
import { useMiniQRHandler } from "./useMiniQRHandler";

export function MiniQR({ size, bitGrid }: MiniQRProps) {
  const { cells } = useMiniQRHandler(bitGrid);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-full text-slate-900"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {cells.map((cell) =>
        cell.on ? (
          <rect
            key={cell.key}
            x={cell.x}
            y={cell.y}
            width={1}
            height={1}
            fill="currentColor"
          />
        ) : null,
      )}
    </svg>
  );
}
