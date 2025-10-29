import React from 'react'

const GraphFooter = () => {
  return (
    <section className="bg-[#3B85C6] flex flex-col justify-center items-center text-center px-4 sm:px-10 py-12 sm:py-16">
      <h2 className="text-lg sm:text-2xl md:text-[32px] text-white font-medium leading-relaxed sm:leading-[42px] md:leading-[54px] max-w-2xl">
        We're not just developing technology; we're setting new care standards.
        <br className="hidden sm:block" />
        Ready to learn more?
      </h2>
      <button className="bg-white mt-8 sm:mt-10 text-[#3B85C6] px-8 sm:px-10 py-2 sm:py-3 font-bold rounded-full hover:bg-gray-100 transition">
        Contact Us Today!
      </button>
    </section>
  )
}

export default GraphFooter
