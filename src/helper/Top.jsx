import React from 'react'
import { CiYoutube } from 'react-icons/ci'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Top = () => {
    return (
        <>
            <header className='flex justify-end items-center pr-8  h-[52px] bg-[#003366]'>
                <FaFacebook className='text-white ml-4 mt-1' />
                <FaX className='text-white ml-4 mt-1' />
                <FaYoutube className='text-white ml-4 mt-1' />
                <FaLinkedin className='text-white ml-4 mt-1' />

            </header>
        </>
    )
}

export default Top;
