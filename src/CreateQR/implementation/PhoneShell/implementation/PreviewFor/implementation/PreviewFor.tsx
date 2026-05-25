import { HelpCircle } from "lucide-react";
import { PvCoupon } from "../../PvCoupon";
import { PvEmpty } from "../../PvEmpty";
import { PvGeneric } from "../../PvGeneric";
import { PvInstagram } from "../../PvInstagram";
import { PvMenu } from "../../PvMenu";
import { PvVcard } from "../../PvVcard";
import { PvVideo } from "../../PvVideo";
import { PvWebsite } from "../../PvWebsite";
import { PvWifi } from "../../PvWifi";
import type { PreviewForProps } from "./PreviewForProps";

export function PreviewFor({ typeId, content, label, sub, Icon }: PreviewForProps) {
  if (!typeId) return <PvEmpty />;
  switch (typeId) {
    case "website":
      return <PvWebsite content={content} />;
    case "vcard":
      return <PvVcard content={content} />;
    case "wifi":
      return <PvWifi content={content} />;
    case "menu":
      return <PvMenu content={content} />;
    case "instagram":
      return <PvInstagram content={content} />;
    case "coupon":
      return <PvCoupon content={content} />;
    case "video":
      return <PvVideo content={content} />;
    default:
      return (
        <PvGeneric
          label={label || typeId}
          sub={sub || ""}
          Icon={Icon || HelpCircle}
          content={content}
        />
      );
  }
}
