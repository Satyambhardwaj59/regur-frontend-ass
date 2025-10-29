import React from "react";
import riskLeft from "../assets/riskLeft.png";
import riskRight from "../assets/riskRight.png";

const RiskPart = () => {
  return (
    <section className="relative flex w-full h-screen overflow-hidden bg-white">

      {/* ---------- LEFT HALF ---------- */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src={riskLeft}
          alt="Left side risk"
          className="absolute left-0 top-0 w-[200%] h-full object-contain"
          style={{
            clipPath: "inset(0 50% 0 0)", // show only left 50%
            transform: "translateX(50%)",
          }}
        />
      </div>

      {/* ---------- RIGHT HALF ---------- */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src={riskRight}
          alt="Right side risk"
          className="absolute right-0 top-0 w-[200%] h-full object-contain"
          style={{
            clipPath: "inset(0 0 0 50%)", // show only right 50%
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* ---------- Center Divider Line ---------- */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[3px] h-[70%] my-auto bg-[#004AAD] z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#004AAD] z-20 flex items-center justify-center">
  <p className="text-white font-bold text-xl">{`< >`}</p>
</div>

    </section>
  );
};

export default RiskPart;
