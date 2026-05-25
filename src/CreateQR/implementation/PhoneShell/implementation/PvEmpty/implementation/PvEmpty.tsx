import { FakeQR } from "../../FakeQR";

export function PvEmpty() {
  return (
    <div className="atl-pv-empty">
      <div className="qbox">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
        <FakeQR size={120} density={0.45} seed={5} color="#1a1817" />
        <div className="scanline" />
      </div>
      <h5>
        Pick a <em>type</em> to begin
      </h5>
      <p>Your preview will appear here — live, as you type.</p>
    </div>
  );
}
