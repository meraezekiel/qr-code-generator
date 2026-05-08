import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "../../../../lib/supabaseClient";
import { blobToBase64, renderQrPng } from "../../../../lib/renderQrPng";
import type { DownloadQRViewProps } from "./DownloadQRViewProps";

export function useDownloadQRViewHandler({
  qrValue,
  design,
  onBack,
}: Pick<DownloadQRViewProps, "qrValue" | "design" | "onBack">) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error("Enter your email address first");
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    try {
      const png = await renderQrPng(qrValue, design);
      const base64 = await blobToBase64(png);
      const { error } = await supabase.functions.invoke("send-qr-email", {
        body: {
          email: trimmed,
          label: qrValue.trim() || "Scan Me!",
          qrPngBase64: base64,
        },
      });
      if (error) throw error;
      toast.success("QR code sent!", {
        description: `Check ${trimmed} for your QR code.`,
      });
      setEmail("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send email";
      toast.error("Could not send QR code", { description: message });
    } finally {
      setSubmitting(false);
    }
  };

  const continueWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
    if (error) {
      toast.error("Google sign-in failed", { description: error.message });
    }
  };

  return { onBack, email, setEmail, submit, submitting, continueWithGoogle };
}
