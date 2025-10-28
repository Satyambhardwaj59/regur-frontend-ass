import React from 'react'
import banner from '../assets/banner-bg.png'

const Banner = () => {
  return (
      <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${banner})`,
      }}
    >
      
      <div className="absolute inset-0 bg-blue-600 opacity-80"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-[52px] leading-[72px] text-center mb-2">Welcome to a <br /> <span className='font-bold'> Transformation in Interventional Imaging </span></h2>
        <p className="text-xl leading-[32px] max-w-2xl">
          Omega Medical Imaging is pioneering a groundbreaking leap with AI Image-Guided Interventional Systems. Our technology promises to redefine what you expect from imaging in cardiology and gastroenterology.
        </p>
      </div>
    </div>
  )
}

export default Banner
