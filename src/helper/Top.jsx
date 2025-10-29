import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Top = () => {
  return (
    <header className="flex justify-end items-center gap-4 pr-6 h-[52px] bg-[#003366] text-white">
      <FaFacebook className="hover:text-[#4DA3FF] cursor-pointer" />
      <FaX className="hover:text-[#4DA3FF] cursor-pointer" />
      <FaYoutube className="hover:text-[#4DA3FF] cursor-pointer" />
      <FaLinkedin className="hover:text-[#4DA3FF] cursor-pointer" />
    </header>
  )
}

export default Top
