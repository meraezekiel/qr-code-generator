import type { ImageUploadProps } from "./ImageUploadProps";

export function useImageUploadHandler({
  label,
}: Pick<ImageUploadProps, "label">) {
  return { ariaLabel: `Upload ${label.toLowerCase()}` };
}
