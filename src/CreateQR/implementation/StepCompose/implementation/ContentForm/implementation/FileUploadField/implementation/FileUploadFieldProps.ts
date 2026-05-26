export type FileUploadFieldProps = {
  fieldKey: string;
  inputId: string;
  value: string;
  accept?: string;
  onContentChange: (key: string, value: string) => void;
};
