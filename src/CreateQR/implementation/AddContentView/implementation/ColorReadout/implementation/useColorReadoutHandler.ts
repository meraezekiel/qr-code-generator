import type { ColorReadoutProps } from "./ColorReadoutProps";

export function useColorReadoutHandler({
  hex,
}: Pick<ColorReadoutProps, "hex">) {
  return { displayHex: hex.toUpperCase() };
}
