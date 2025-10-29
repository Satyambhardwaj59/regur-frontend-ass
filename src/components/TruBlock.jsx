import React from 'react';
import vision from '../assets/vision.png';

const TruBlock = () => {
  return (
    <section className="bg-[#003366] text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20 gap-10 overflow-hidden">
      
      {/* ---------- LEFT SECTION ---------- */}
      <div className="flex-1 flex flex-col justify-center text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-snug font-semibold pb-4">
          TruBlock™ & Clear Vision
        </h2>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed pb-4 max-w-[90%]">
          Experience the precision of our TruBlock™ technology, which concentrates on the region of interest while safeguarding surrounding anatomy.
        </p>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-[90%]">
          Coupled with our advanced image processing, you receive crystal-clear images in both cine and fluoro modes, facilitating better diagnosis and treatment.
        </p>
      </div>

      {/* ---------- RIGHT SECTION ---------- */}
      <div className="flex-1 w-full flex justify-center">
        <img
          src={vision}
          alt="TruBlock technology visualization"
          className="w-full max-w-[550px] h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default TruBlock;
