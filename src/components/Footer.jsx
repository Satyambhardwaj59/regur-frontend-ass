import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-[#003366] pt-6 text-white'>
            <div className='flex flex-col pb-6 items-center '>
                <div className='flex gap-8'>
                    <li>Sales: 407-815-4443</li>
                    <li>HQ Office: 407-323-9400</li>
                    <li>Service: 813-906-6342</li>
                </div>
                <p>info@omegamedicalimaging.com</p>
                <p>service@omegamedicalimaging.com</p>
            </div>
            <div className='h-15 flex items-center justify-end bg-sky-700'>
                <div className='flex gap-4 pr-[10%]'>
                    <p>Home</p>
                    <p>Privacy Policy</p>
                    <p>Certifications</p>
                </div>
            </div>
            <div className='flex justify-between items-center p-4'>
                <p>© 2023 Omega Medical Imaging. All Rights Reserved.</p>
                <div className='flex gap-1'>
                    <FaFacebook className=' ml-4 mt-1' />
                    <FaX className=' ml-4 mt-1' />
                    <FaYoutube className=' ml-4 mt-1' />
                    <FaLinkedin className=' ml-4 mt-1' />

                </div>
            </div>

        </footer>
    )
}

export default Footer
