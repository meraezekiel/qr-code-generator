type StepperStep = {
  id: number;
  label: string;
};

export function useStepperHeaderHandler(activeStep: number) {
  const steps: StepperStep[] = [
    { id: 1, label: "Select QR type" },
    { id: 2, label: "Add content" },
    { id: 3, label: "Design QR code" },
    { id: 4, label: "Download QR code" },
  ];

  const isActive = (id: number) => id === activeStep;
  const isCompleted = (id: number) => id < activeStep;

  return {
    steps,
    isActive,
    isCompleted,
  };
}
