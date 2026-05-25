import type { FakeQRProps } from "./FakeQRProps";

const N = 21;

function isFinder(r: number, c: number) {
  return (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);
}

function rand(r: number, c: number, seed: number) {
  const x = r * 31 + c * 17 + seed * 7;
  return ((x * 9301 + 49297) % 233280) / 233280;
}

function Finder({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  const u = size / N;
  return (
    <g>
      <rect x={x * u} y={y * u} width={7 * u} height={7 * u} fill={color} />
      <rect x={(x + 1) * u} y={(y + 1) * u} width={5 * u} height={5 * u} fill="white" />
      <rect x={(x + 2) * u} y={(y + 2) * u} width={3 * u} height={3 * u} fill={color} />
    </g>
  );
}

export function FakeQR({
  size = 100,
  density = 0.5,
  seed = 17,
  color = "#1a1817",
}: FakeQRProps) {
  const cells: JSX.Element[] = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (isFinder(r, c)) continue;
      if (rand(r, c, seed) < density) {
        cells.push(
          <rect
            key={`${r},${c}`}
            x={(c / N) * size}
            y={(r / N) * size}
            width={size / N}
            height={size / N}
            fill={color}
          />
        );
      }
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      <Finder x={0} y={0} size={size} color={color} />
      <Finder x={N - 7} y={0} size={size} color={color} />
      <Finder x={0} y={N - 7} size={size} color={color} />
      {cells}
    </svg>
  );
}
