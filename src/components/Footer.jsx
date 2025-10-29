import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Contact Section */}
      <div className="flex flex-col items-center text-center gap-2 py-6 px-4">
        <ul className="flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm sm:text-base">
          <li>Sales: 407-815-4443</li>
          <li>HQ Office: 407-323-9400</li>
          <li>Service: 813-906-6342</li>
        </ul>
        <p className="text-sm sm:text-base mt-2">info@omegamedicalimaging.com</p>
        <p className="text-sm sm:text-base">service@omegamedicalimaging.com</p>
      </div>

      {/* Links Section */}
      <div className="bg-sky-700 flex flex-row items-center justify-center sm:justify-end gap-4 sm:gap-8 py-3 px-6 sm:pr-[10%] text-sm sm:text-base">
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
        <p className="cursor-pointer hover:underline">Certifications</p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 sm:gap-0 px-4 sm:px-10 py-4 text-xs sm:text-sm border-t border-gray-600">
        <p className="text-center sm:text-left">
          © 2023 Omega Medical Imaging. All Rights Reserved.
        </p>
        <div className="flex gap-3 sm:gap-4 text-lg">
          <FaFacebook className="hover:text-sky-400 cursor-pointer" />
          <FaX className="hover:text-sky-400 cursor-pointer" />
          <FaYoutube className="hover:text-sky-400 cursor-pointer" />
          <FaLinkedin className="hover:text-sky-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
