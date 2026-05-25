import { BatteryMedium, Signal, Wifi } from "lucide-react";
import type { PhoneShellProps } from "./PhoneShellProps";

export function PhoneShell({ children }: PhoneShellProps) {
  return (
    <div className="atl-phone">
      <span className="atl-phone__btn-l" />
      <span className="atl-phone__btn1" />
      <span className="atl-phone__btn2" />
      <div className="atl-phone__bezel">
        <div className="atl-phone__screen">
          <div className="atl-phone__notch" />
          <div className="atl-phone__status">
            <span>9:41</span>
            <div className="right">
              <Signal size={11} strokeWidth={2} />
              <Wifi size={11} strokeWidth={2} />
              <BatteryMedium size={14} strokeWidth={2} />
            </div>
          </div>
          <div className="atl-phone__content">{children}</div>
          <div className="atl-phone__handle">
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
