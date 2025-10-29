import React from "react";
import ReactCompareImage from "react-compare-image";
import riskLeft from "../assets/riskLeft.png";
import riskRight from "../assets/riskRight.png";

const BeforeAfter = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 bg-[#F8FAFF]">

      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
        <ReactCompareImage
          leftImage={riskLeft}
          rightImage={riskRight}
          sliderLineColor="#3783CA"
          handleSize={40}
          sliderPositionPercentage={0.5}
          hover={true}
        />
      </div>

    </section>
  );
};

export default BeforeAfter;
