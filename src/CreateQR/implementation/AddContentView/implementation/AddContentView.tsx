import { ArrowLeft, ArrowRight } from "lucide-react";
import { AddContentViewProps } from "./AddContentViewProps";
import { useAddContentViewHandler } from "./useAddContentViewHandler";
import { WebsiteContent } from "./WebsiteContent";
import { PDFContent } from "./PDFContent";
import { ListOfLinksContent } from "./ListOfLinksContent";
import { VCardContent } from "./VCardContent";

export function AddContentView({
  selectedType,
  onBack,
  onNext,
}: AddContentViewProps) {
  const { viewType } = useAddContentViewHandler(selectedType);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
        2. Add content to your QR code
      </h1>

      {viewType === "pdf" && <PDFContent />}
      {viewType === "links" && <ListOfLinksContent />}
      {viewType === "vcard" && <VCardContent />}
      {viewType === "website" && <WebsiteContent />}

      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-sm font-bold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-10 py-3 rounded-lg bg-brand text-white text-sm font-bold hover:bg-brand-dark transition-colors shadow-sm"
        >
          Next
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
