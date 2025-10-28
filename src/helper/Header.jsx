import React from 'react'
import logo from '../assets/logo.png';
import play_icon from '../assets/play_icon.png';
import omega from '../assets/omega.png';
import soteria from '../assets/Soteria.png';

const Header = () => {
   return (
       <section className="h-screen bg-gradient-to-r from-white from-50% to-[#EBF6FF] to-50% relative overflow-hidden">
         {/* Navbar */}
         <nav className="flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">
           <div className="w-[180px]">
             <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
           </div>
           <div className="flex items-center space-x-8 text-sm font-semibold text-gray-800">
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
         </nav>
   
         {/* Hero Section */}
         <div className="flex items-center justify-between max-w-7xl mx-auto px-20 mt-12 relative">
           {/* Left Section */}
           <div className="w-1/2 relative z-10 space-y-6">
             <h1 className="text-[64px] leading-[78px] font-light">
               A New Era in <br />
               <span className="font-bold">Interventional Imaging</span>
             </h1>
             <p className="text-[#3783CA] text-[22px] font-semibold">
               Reduce Dose up to 84%*
             </p>
   
             <div className="flex gap-6 items-center">
               <button className="bg-[#3783CA] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2e6cab] transition">
                 Learn More
               </button>
               <button className="text-gray-800 flex items-center gap-2 font-semibold">
                 Watch Video{" "}
                 <img className="w-4 h-4" src={play_icon} alt="play icon" />
               </button>
             </div>
           </div>
   
           {/* Right Section */}
           <div className="w-1/2 flex justify-end relative">
             <img
               src={omega}
               alt="Omega Machine"
               className="w-[90%] h-auto object-contain relative z-0"
             />
   
             
             <div className="absolute left-[-10px] bottom-[-80px] border border-black text-white rounded-full w-[140px] h-[140px] flex flex-col items-center justify-center shadow-lg z-20">
               <div className="bg-[#003366] text-white rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center shadow-lg z-20">
                   <span className="text-[36px] font-bold leading-none">30</span>
               <span className="text-[14px] leading-tight text-center">
                 Years of <br /> Experience
               </span>
               </div>
             </div>
           </div>
           {/* Overlapping Soteria Image */}
             <img
               src={soteria}
               alt="Soteria AI"
               className="absolute left-1/3 top-1/10  w-[900px] h-auto z-10"
             />
         </div>
       </section>
     );
}

export default Header
