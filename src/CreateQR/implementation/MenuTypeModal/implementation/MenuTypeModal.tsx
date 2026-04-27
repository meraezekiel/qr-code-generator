import { ChevronRight, FileText, Link as LinkIcon, Menu, X } from "lucide-react";
import type { MenuTypeModalProps } from "./MenuTypeModalProps";

export function MenuTypeModal({ onSelect, onClose }: MenuTypeModalProps) {
  const options = [
    {
      id: "digital" as const,
      label: "I want to create a digital menu",
      Icon: Menu,
    },
    {
      id: "pdf" as const,
      label: "I have a PDF version of my menu",
      Icon: FileText,
    },
    {
      id: "link" as const,
      label: "I have a link that redirects to my menu",
      Icon: LinkIcon,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-type-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full p-8 relative shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>

        <h2
          id="menu-type-modal-title"
          className="text-xl font-bold text-slate-900 text-center pr-6"
        >
          How do you want to create your Menu QR Code?
        </h2>

        <hr className="my-6 border-slate-200" />

        <div className="flex flex-col gap-3">
          {options.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 hover:border-brand hover:bg-brand-subtle transition-colors text-left"
            >
              <span className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="flex-1 text-sm font-semibold text-slate-900">
                {label}
              </span>
              <ChevronRight
                className="w-4 h-4 text-slate-400"
                strokeWidth={2.5}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
