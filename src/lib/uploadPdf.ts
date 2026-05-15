import { supabase } from "./supabaseClient";

const PDF_BUCKET = "pdfs";

export type UploadedPdf = {
  publicUrl: string;
  path: string;
};

function slugifyName(name: string): string {
  const dotIndex = name.lastIndexOf(".");
  const base = dotIndex > 0 ? name.slice(0, dotIndex) : name;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "file";
}

export async function uploadPdf(file: File): Promise<UploadedPdf> {
  const path = `${crypto.randomUUID()}-${slugifyName(file.name)}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from(PDF_BUCKET)
    .upload(path, file, {
      contentType: "application/pdf",
      upsert: false,
    });

  if (uploadError) {
    throw new Error(uploadError.message || "Failed to upload PDF");
  }

  const { data } = supabase.storage.from(PDF_BUCKET).getPublicUrl(path);

  if (!data?.publicUrl) {
    throw new Error("Upload succeeded but no public URL was returned");
  }

  return { publicUrl: data.publicUrl, path };
}
