import { useCallback, useEffect, useState } from "react";
import { AddContentViewProps } from "./AddContentViewProps";
import { useAddContentViewHandler } from "./useAddContentViewHandler";
import { WebsiteContent } from "./WebsiteContent";
import { PDFContent } from "./PDFContent";
import { ListOfLinksContent } from "./ListOfLinksContent";
import { VCardContent } from "./VCardContent";
import { BusinessContent } from "./BusinessContent";
import { VideoContent } from "./VideoContent";
import { ImagesContent } from "./ImagesContent";
import { FacebookContent } from "./FacebookContent";
import { InstagramContent } from "./InstagramContent";
import { SocialMediaContent } from "./SocialMediaContent";
import { WhatsAppContent } from "./WhatsAppContent";
import { Mp3Content } from "./Mp3Content";
import { MenuContent } from "./MenuContent";
import { StepFormShell } from "../../StepFormShell";

export function AddContentView({
  selectedType,
  menuSubType,
  onBack,
  onNext,
  onQrValueChange,
}: AddContentViewProps) {
  const { viewType } = useAddContentViewHandler(selectedType, menuSubType);
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setIsFormValid(viewType === "website" ? false : true);
  }, [viewType]);

  const handleWebsiteValidityChange = useCallback((valid: boolean) => {
    setIsFormValid(valid);
  }, []);

  return (
    <StepFormShell
      title="2. Add content to your QR code"
      onBack={onBack}
      primaryAction={{
        label: "Next",
        onClick: onNext,
        disabled: !isFormValid,
      }}
    >
      {viewType === "pdf" && <PDFContent />}
      {viewType === "links" && <ListOfLinksContent />}
      {viewType === "vcard" && <VCardContent />}
      {viewType === "business" && <BusinessContent />}
      {viewType === "video" && <VideoContent />}
      {viewType === "images" && <ImagesContent />}
      {viewType === "facebook" && <FacebookContent />}
      {viewType === "instagram" && <InstagramContent />}
      {viewType === "social-media" && <SocialMediaContent />}
      {viewType === "whatsapp" && <WhatsAppContent />}
      {viewType === "mp3" && <Mp3Content />}
      {viewType === "menu" && <MenuContent />}
      {viewType === "website" && (
        <WebsiteContent
          onValidityChange={handleWebsiteValidityChange}
          onQrValueChange={onQrValueChange}
        />
      )}
    </StepFormShell>
  );
}
