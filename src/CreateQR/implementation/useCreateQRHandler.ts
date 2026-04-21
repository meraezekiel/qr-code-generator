import { useState } from "react";
import { toast } from "sonner";
import type { QRType } from "./QRTypeGrid/implementation/QRTypeGridProps";

export function useCreateQRHandler() {
  const [selectedType, setSelectedType] = useState<QRType | null>(null);
  const [hoveredType, setHoveredType] = useState<QRType | null>(null);

  const onSelectType = (type: QRType) => {
    setSelectedType(type);
    toast.success(`You selected ${type.label}`, {
      description: type.subtitle,
    });
  };

  const onHoverType = (type: QRType) => {
    setHoveredType(type);
  };

  const onLeaveType = () => {
    setHoveredType(null);
  };

  const activeType = hoveredType ?? selectedType;

  return {
    selectedType,
    activeType,
    onSelectType,
    onHoverType,
    onLeaveType,
  };
}
