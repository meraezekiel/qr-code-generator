import { Globe } from "lucide-react";
import { ContentSection } from "../../../../ContentSection";
import { SocialNetworksSectionProps } from "./SocialNetworksSectionProps";
import { useSocialNetworksSectionHandler } from "./useSocialNetworksSectionHandler";

export function SocialNetworksSection({
  isOpen,
  onToggle,
}: SocialNetworksSectionProps) {
  const { socialIcons } = useSocialNetworksSectionHandler();

  return (
    <ContentSection
      icon={Globe}
      title="Social Networks"
      subtitle="Add social media links to your page."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-12 gap-2 pt-3">
        {socialIcons.map(({ id, bg, Icon, iconColor }) => (
          <button
            key={id}
            type="button"
            aria-label={id}
            className={[
              "w-9 h-9 rounded-full flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity",
              bg,
              iconColor ?? "text-white",
            ].join(" ")}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    </ContentSection>
  );
}
