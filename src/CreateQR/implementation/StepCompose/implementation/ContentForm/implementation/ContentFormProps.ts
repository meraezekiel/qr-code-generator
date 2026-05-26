import type { QRTypeInfo } from "../../../../useCreateQRHandler";

export type ContentFormProps = {
  type: QRTypeInfo | null;
  content: Record<string, string>;
  fieldErrors: Record<string, string>;
  onContentChange: (key: string, value: string) => void;
};
