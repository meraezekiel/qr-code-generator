import { useMemo } from "react";

export function useMiniQRHandler(bitGrid: boolean[][]) {
  return useMemo(
    () => ({
      cells: bitGrid.flatMap((row, r) =>
        row.map((on, c) => ({ key: `${r}-${c}`, x: c, y: r, on })),
      ),
    }),
    [bitGrid],
  );
}
