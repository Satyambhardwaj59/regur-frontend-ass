import React from 'react'
import banner from '../assets/banner-bg.png'

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600 opacity-80"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-[52px] leading-tight sm:leading-[56px] lg:leading-[72px] font-light mb-4">
          Welcome to a <br />
          <span className="font-bold">
            Transformation in Interventional Imaging
          </span>
        </h2>

        <p className="text-sm sm:text-base lg:text-xl leading-relaxed max-w-lg sm:max-w-2xl">
          Omega Medical Imaging is pioneering a groundbreaking leap with AI
          Image-Guided Interventional Systems. Our technology promises to
          redefine what you expect from imaging in cardiology and
          gastroenterology.
        </p>
      </div>
    </div>
  )
}

export default Banner
