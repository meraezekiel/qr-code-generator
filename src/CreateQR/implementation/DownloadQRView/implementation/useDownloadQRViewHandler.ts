import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import type { DownloadQRViewProps } from "./DownloadQRViewProps";

export function useDownloadQRViewHandler({
  onBack,
}: Pick<DownloadQRViewProps, "onBack">) {
  const [email, setEmail] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error("Enter your email address first");
      return;
    }
    toast.success("QR code sent!", {
      description: `Check ${trimmed} for your QR code.`,
    });
  };

  const continueWithGoogle = () => {
    toast.success("Continue with Google", {
      description: "Google sign-in will be wired up next.",
    });
  };

  return { onBack, email, setEmail, submit, continueWithGoogle };
}
