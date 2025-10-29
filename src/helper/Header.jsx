import React, { useState } from "react";
import logo from "../assets/logo.png";
import play_icon from "../assets/play_icon.png";
import omega from "../assets/omega.png";
import soteria from "../assets/Soteria.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="min-h-screen pb-10 bg-gradient-to-b sm:bg-gradient-to-r from-white from-50% to-[#EBF6FF] to-50% relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 sm:px-10 py-4 max-w-7xl mx-auto relative z-50">
        {/* Logo */}
        <div className="w-[140px] sm:w-[180px]">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Contact Us - Always Visible */}
        <button className="lg:hidden px-5 py-2 rounded-full bg-[#3783CA] text-white font-semibold hover:bg-[#2e6cab] transition">
          Contact Us
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-800">
          <ul className="flex items-center space-x-6">
            <li className="hover:text-[#3783CA] cursor-pointer">Products</li>
            <li className="hover:text-[#3783CA] cursor-pointer">Services</li>
            <li className="hover:text-[#3783CA] cursor-pointer">Clinical Data</li>
            <li className="hover:text-[#3783CA] cursor-pointer">Resource Library</li>
            <li className="hover:text-[#3783CA] cursor-pointer">Partners</li>
            <li className="hover:text-[#3783CA] cursor-pointer">About</li>
            <li className="hover:text-[#3783CA] cursor-pointer">News</li>
          </ul>
          <button className="ml-8 px-6 py-2 rounded-full bg-[#3783CA] text-white hover:bg-[#2e6cab] transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col space-y-1.5"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col items-center space-y-4 font-semibold text-gray-700 lg:hidden">
            <ul className="flex flex-col items-center space-y-4 mt-2">
              <li className="hover:text-[#3783CA] cursor-pointer">Products</li>
              <li className="hover:text-[#3783CA] cursor-pointer">Services</li>
              <li className="hover:text-[#3783CA] cursor-pointer">Clinical Data</li>
              <li className="hover:text-[#3783CA] cursor-pointer">Resource Library</li>
              <li className="hover:text-[#3783CA] cursor-pointer">Partners</li>
              <li className="hover:text-[#3783CA] cursor-pointer">About</li>
              <li className="hover:text-[#3783CA] cursor-pointer">News</li>
            </ul>
          </div>
        )}
      </nav>



      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 relative">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative z-10 space-y-4 sm:space-y-6 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-[64px] leading-tight lg:leading-[78px] font-light">
            A New Era in <br />
            <span className="font-bold">Interventional Imaging</span>
          </h1>
          <p className="text-[#3783CA] text-lg sm:text-xl lg:text-[22px] font-semibold">
            Reduce Dose up to 84%*
          </p>

          <div className="flex  justify-center lg:justify-start gap-4 sm:gap-6 items-center">
            <button className="bg-[#3783CA] text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2e6cab] transition">
              Learn More
            </button>
            <button className="text-gray-800 flex items-center gap-2 font-semibold">
              Watch Video{" "}
              <img className="w-4 h-4" src={play_icon} alt="play icon" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <img
            src={omega}
            alt="Omega Machine"
            className="w-[80%] sm:w-[70%] lg:w-[90%] h-auto object-contain relative z-0"
          />

          {/* Experience Badge */}
          <div className="absolute left-[30%] bottom-[10px] sm:left-[45%] sm:bottom-[-40px] lg:left-[-10px] lg:bottom-[-80px] border border-black text-white rounded-full w-[110px] sm:w-[130px] lg:w-[140px] h-[110px] sm:h-[130px] lg:h-[140px] flex flex-col items-center justify-center shadow-lg z-20">
            <div className="bg-[#003366] text-white rounded-full w-[100px] sm:w-[120px] lg:w-[130px] h-[100px] sm:h-[120px] lg:h-[130px] flex flex-col items-center justify-center shadow-lg z-20">
              <span className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-none">
                30
              </span>
              <span className="text-[12px] sm:text-[13px] lg:text-[14px] leading-tight text-center">
                Years of <br /> Experience
              </span>
            </div>
          </div>


        </div>

        {/* Overlapping Soteria Image */}
        <img
          src={soteria}
          alt="Soteria AI"
          className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-1/3 bottom-[-5%] lg:bottom-0 lg:top-[10%] w-[400px] sm:w-[600px] lg:w-[900px] h-auto z-10 opacity-40 lg:opacity-100"
        />
      </div>
    </section>
  );
};

export default Header;
