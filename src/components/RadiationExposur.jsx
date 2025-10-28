import React from 'react'
import doc from '../assets/doc.png';
import body from '../assets/body.png';

const RadiationExposur = () => {
  return (
  <section className="relative flex flex-col mb-80 ">
  {/* Blue Box aligned to left side */}
  <div className="relative w-[70%] h-[850px] rounded-r-4xl flex flex-col justify-center items-center bg-[#EBF6FF] pb-40 pl-16">
    <div className="w-[60%] mx-auto">
      <h2 className="text-[52px] leading-[68px] font-bold pb-8">
        Reducing Radiation Exposure
      </h2>
      <p className="text-xl leading-[32px] pb-8">
        Our AI systems herald a new standard, transcending traditional imaging
        limits, reducing radiation exposure by up to 84%*
      </p>
      <p className="text-xl leading-[32px]">
        This innovation is not just an upgrade; it's a complete overhaul of
        safety standards, ensuring you and your patients are exposed to
        significantly less risk.
      </p>
    </div>
  </div>

  {/* Absolute Image Container centered to full page */}
  <div className="absolute bottom-[-200px] left-5/9 -translate-x-1/2 flex justify-center gap-8">
    <img
      className="w-[530px] h-[464px] rounded-lg shadow-lg"
      src={body}
      alt="Body"
    />
    <img
      className="w-[530px] h-[464px] rounded-lg shadow-lg"
      src={doc}
      alt="Doctor"
    />
  </div>
</section>


  )
}

export default RadiationExposur
