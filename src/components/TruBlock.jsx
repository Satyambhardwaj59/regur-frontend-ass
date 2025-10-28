import React from 'react'
import vision from '../assets/vision.png';

const TruBlock = () => {
  return (
    <section className='bg-[#003366] flex text-white'>
        {/* left section */}
        <div className='w-[10%]'></div>
        <div className='w-[45%] px-4 flex flex-col justify-center'>
            <h2 className='text-[42px] leading-[54px] w-[60%] pb-4'>TruBlock™ & Clear Vision</h2>
            <p className='text-xl leading-8 pb-4 w-[90%]'>Experience the precision of our TruBlock™ technology, which concentrates on the region of interest while safeguarding surrounding anatomy.</p>
            <p className='text-xl leading-8 w-[90%]'>Coupled with our advanced image processing, you receive crystal-clear images in both cine and fluoro modes, facilitating better diagnosis and treatment.</p>
        </div>


        {/* right section */}
        <div className='w-[45%]'>
            <img className='w-full h-150 bg-cover rounded' src={vision} alt="" />
        </div>
      
    </section>
  )
}

export default TruBlock
