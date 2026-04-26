import { useState } from "react";
import { toast } from "sonner";
import type { QRType } from "./QRTypeGrid/implementation/QRTypeGridProps";

export function useCreateQRHandler() {
  const [selectedType, setSelectedType] = useState<QRType | null>(null);
  const [hoveredType, setHoveredType] = useState<QRType | null>(null);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const onSelectType = (type: QRType) => {
    setSelectedType(type);
    setCurrentStep(2);
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

  const goToStep1 = () => setCurrentStep(1);
  const goToStep2 = () => setCurrentStep(2);

  const activeType = hoveredType ?? selectedType;

  return {
    selectedType,
    activeType,
    currentStep,
    onSelectType,
    onHoverType,
    onLeaveType,
    goToStep1,
    goToStep2,
  };
}
