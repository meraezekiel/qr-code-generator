import { Wifi } from "lucide-react";
import type { PvWifiProps } from "./PvWifiProps";

export function PvWifi({ content }: PvWifiProps) {
  return (
    <div className="atl-pv-wifi">
      <div className="top">
        <div className="ic-ring">
          <Wifi size={26} strokeWidth={1.75} />
        </div>
        <h5>Connect to WiFi</h5>
        <p>Scan to join instantly</p>
      </div>
      <div className="card">
        <div className="row">
          <span className="k">Network</span>
          <span className="v">{content.ssid || "YourBrand_WiFi"}</span>
        </div>
        <div className="row">
          <span className="k">Password</span>
          <span className="v">{content.password || "••••••••"}</span>
        </div>
        <div className="row">
          <span className="k">Security</span>
          <span className="v">{content.security || "WPA2"}</span>
        </div>
      </div>
      <div className="connect">Connect</div>
    </div>
  );
}
