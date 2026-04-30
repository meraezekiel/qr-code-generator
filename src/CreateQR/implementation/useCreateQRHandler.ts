import { useState } from "react";
import { toast } from "sonner";
import type { QRType } from "./QRTypeGrid/implementation/QRTypeGridProps";
import type { MenuSubType } from "./MenuTypeModal";
import { useDesignQRViewHandler } from "./DesignQRView/implementation/useDesignQRViewHandler";

export function useCreateQRHandler() {
  const [selectedType, setSelectedType] = useState<QRType | null>(null);
  const [hoveredType, setHoveredType] = useState<QRType | null>(null);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [menuSubType, setMenuSubType] = useState<MenuSubType | null>(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [qrValue, setQrValue] = useState("");
  const designHandler = useDesignQRViewHandler();

  const onSelectType = (type: QRType) => {
    if (type.id === "menu") {
      setSelectedType(type);
      setMenuSubType(null);
      setIsMenuModalOpen(true);
      return;
    }

    setSelectedType(type);
    setMenuSubType(null);
    setCurrentStep(2);
    toast.success(`You selected ${type.label}`, {
      description: type.subtitle,
    });
  };

  const selectMenuSubType = (subType: MenuSubType) => {
    setMenuSubType(subType);
    setIsMenuModalOpen(false);
    setCurrentStep(2);
    toast.success("You selected Menu", {
      description: "Create a restaurant menu",
    });
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
    setSelectedType(null);
    setMenuSubType(null);
  };

  const onHoverType = (type: QRType) => {
    setHoveredType(type);
  };

  const onLeaveType = () => {
    setHoveredType(null);
  };

  const goToStep1 = () => setCurrentStep(1);
  const goToStep2 = () => setCurrentStep(2);
  const goToStep3 = () => setCurrentStep(3);
  const goToStep4 = () => {
    setCurrentStep(4);
    toast.success("QR code created!", {
      description: "Pick a format on the next step to download it.",
    });
  };

  const activeType = hoveredType ?? selectedType;

  return {
    selectedType,
    activeType,
    currentStep,
    menuSubType,
    isMenuModalOpen,
    qrValue,
    setQrValue,
    designHandler,
    onSelectType,
    onHoverType,
    onLeaveType,
    selectMenuSubType,
    closeMenuModal,
    goToStep1,
    goToStep2,
    goToStep3,
    goToStep4,
  };
}
