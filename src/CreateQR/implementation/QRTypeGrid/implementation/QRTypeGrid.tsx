import { QRTypeCard } from "./QRTypeCard";
import { QRTypeGridProps } from "./QRTypeGridProps";
import { useQRTypeGridHandler } from "./useQRTypeGridHandler";

export function QRTypeGrid({
  selectedType,
  onSelectType,
  onHoverType,
  onLeaveType,
}: QRTypeGridProps) {
  const { qrTypes } = useQRTypeGridHandler();

  return (
    <div
      role="radiogroup"
      aria-label="QR code type"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      {qrTypes.map((type) => (
        <QRTypeCard
          key={type.id}
          type={type}
          isSelected={selectedType?.id === type.id}
          onSelect={onSelectType}
          onHover={onHoverType}
          onLeave={onLeaveType}
        />
      ))}
    </div>
  );
}
