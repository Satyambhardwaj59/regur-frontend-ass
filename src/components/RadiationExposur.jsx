import React from 'react'
import doc from '../assets/doc.png'
import body from '../assets/body.png'

const RadiationExposur = () => {
  return (
    <section className="relative flex flex-col lg:mb-[350px]">
      {/* Blue Box */}
      <div className="relative w-full md:w-[70%] h-auto md:h-[850px] rounded-none rounded-tr-[150px] flex flex-col justify-center items-center md:items-start bg-[#EBF6FF] px-4 md:pl-16 py-12 md:py-0 text-center md:text-left">
        <div className="w-full md:w-[60%] mx-auto md:mx-0">
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] leading-tight md:leading-[68px] font-bold pb-6 md:pb-8">
            Reducing Radiation Exposure
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-[28px] md:leading-[32px] pb-6 md:pb-8">
            Our AI systems herald a new standard, transcending traditional imaging
            limits, reducing radiation exposure by up to 84%*
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-[28px] md:leading-[32px]">
            This innovation is not just an upgrade; it's a complete overhaul of
            safety standards, ensuring you and your patients are exposed to
            significantly less risk.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div
        className="
          flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8
          w-[90%] mx-auto md:w-auto
          md:absolute md:bottom-[-300px] md:left-1/2 md:-translate-x-1/2
          mt-0 md:mt-0
        "
      >
        <img
          className="w-full sm:w-[420px] md:w-[530px] h-auto rounded-lg shadow-lg object-cover"
          src={body}
          alt="Body"
        />
        <img
          className="w-full sm:w-[420px] md:w-[530px] h-auto rounded-lg shadow-lg object-cover"
          src={doc}
          alt="Doctor"
        />
      </div>
    </section>
  )
}

export default RadiationExposur
