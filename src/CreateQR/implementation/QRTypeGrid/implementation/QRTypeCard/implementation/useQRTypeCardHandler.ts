import type { QRType } from "../../QRTypeGridProps";

type UseQRTypeCardHandlerArgs = {
  type: QRType;
  onSelect: (type: QRType) => void;
  onHover: (type: QRType) => void;
  onLeave: () => void;
};

export function useQRTypeCardHandler({
  type,
  onSelect,
  onHover,
  onLeave,
}: UseQRTypeCardHandlerArgs) {
  const onClick = () => {
    onSelect(type);
  };

  const onMouseEnter = () => {
    onHover(type);
  };

  const onFocus = () => {
    onHover(type);
  };

  const onMouseLeave = () => {
    onLeave();
  };

  const onBlur = () => {
    onLeave();
  };

  return { onClick, onMouseEnter, onMouseLeave, onFocus, onBlur };
}
