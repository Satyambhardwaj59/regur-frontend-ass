import React from 'react'
import omega from '../assets/omega.png'
import EView from '../assets/EView.png'
import ROI from '../assets/ROI.png'

const Integration = () => {
  return (
    <>
      {/* ---------- IMAGE SECTION ---------- */}
      <section className="relative flex justify-center items-center py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative w-[90%] sm:w-[85%] lg:w-[80%] flex justify-center items-center">
          {/* Base Image - Omega Machine */}
          <img
            src={omega}
            alt="Omega Imaging System"
            className="relative w-[85%] sm:w-[75%] h-auto"
          />

          {/* EView Monitor - bottom-left */}
          <img
            src={EView}
            alt="EView Display"
            className="absolute bottom-[4%] left-[5%] sm:left-[8%] w-[85%] sm:w-[80%] h-auto"
          />

          {/* Blue Connecting Line */}
          <div
            className="absolute bg-[#3B85C6] hidden sm:block"
            style={{
              width: '18%',
              height: '2px',
              top: '44%',
              right: '5%',
              transform: 'rotate(-5deg)',
            }}
          ></div>

          {/* ROI Circle - top-right */}
          <img
            src={ROI}
            alt="Region of Interest"
            className="absolute top-[25%] sm:top-[30%] right-[-8%] sm:right-[-10%] w-[22%] sm:w-[16%] h-auto rounded-full"
          />
        </div>
      </section>

      {/* ---------- TEXT SECTION ---------- */}
      <div className="mt-10 mb-16 sm:mb-20 flex flex-col items-center text-center px-4">
        <h2 className="text-2xl sm:text-4xl lg:text-[52px] leading-tight sm:leading-[60px] lg:leading-[68px] font-light w-full sm:w-[80%] lg:w-[60%] mx-auto">
          Seamless Integration: <br />
          <span className="font-bold text-[#003366]">AI-Powered Precision</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-[20px] text-gray-700 w-full sm:w-[80%] lg:w-[60%] mx-auto py-4 sm:py-6 leading-relaxed lg:leading-[32px]">
          Our AI technology doesn't just reduce radiation; it enhances your
          workflow. It intuitively detects your region of interest, adjusting
          seamlessly without interrupting your critical work.
        </p>

        <p className="text-sm sm:text-base lg:text-[20px] text-gray-700 leading-relaxed lg:leading-[32px]">
          This integration means you can focus on what matters most — <strong>Patient Care</strong>.
        </p>

        <button className="bg-[#3783CA] mt-6 px-6 sm:px-8 py-2 sm:py-3 font-semibold text-sm sm:text-base rounded-full text-white hover:bg-[#2f6fb0] transition">
          Learn More
        </button>
      </div>
    </>
  )
}

export default Integration
