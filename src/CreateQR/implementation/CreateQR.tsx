import { StepperHeader } from "./StepperHeader";
import { QRTypesSection } from "./QRTypesSection";
import { SimpleSteps } from "./SimpleSteps";
import { AdvancedFeatures } from "./AdvancedFeatures";
import { useCreateQRHandler } from "./useCreateQRHandler";

export function CreateQR() {
  const {
    selectedType,
    activeType,
    onSelectType,
    onHoverType,
    onLeaveType,
  } = useCreateQRHandler();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <StepperHeader activeStep={1} />

      <main className="flex-1">
        <QRTypesSection
          selectedType={selectedType}
          activeType={activeType}
          onSelectType={onSelectType}
          onHoverType={onHoverType}
          onLeaveType={onLeaveType}
        />
      </main>

      <SimpleSteps />

      <AdvancedFeatures />

      <QRTypesSection
        selectedType={selectedType}
        activeType={activeType}
        onSelectType={onSelectType}
        onHoverType={onHoverType}
        onLeaveType={onLeaveType}
      />
    </div>
  );
}
