import React from 'react'
import omega from '../assets/omega.png'
import EView from '../assets/EView.png'
import ROI from '../assets/ROI.png'

const Integration = () => {
    return (
        <>
            <section className="relative flex justify-center items-center py-24 bg-white overflow-hidden">
                {/* Main Container */}
                <div className="relative w-[80%] flex justify-center items-center">
                    {/* Base Image - Omega Machine */}
                    <img
                        src={omega}
                        alt="Omega Imaging System"
                        className="relative w-[75%] h-auto"
                    />

                    {/* EView Monitor - positioned bottom-left */}
                    <img
                        src={EView}
                        alt="EView Display"
                        className="absolute bottom-[5%] left-[8%] w-[80%] h-auto"
                    />
                    {/* Blue Connecting Line */}
                    <div
                        className="absolute w-[18%] h-[2px] bg-[#3B85C6]"
                        style={{
                            top: '44%',
                            right: '5%',
                            transform: 'rotate(-5deg)',
                        }}
                    ></div>

                    {/* ROI Circle - top right */}
                    <img
                        src={ROI}
                        alt="Region of Interest"
                        className="absolute top-[30%] right-[-10%] w-[16%] rounded-full h-auto"
                    />
                </div>
                <div className='w-[40%] mx-auto items-center text-center'>
                </div>
            </section>
            <div className='  mt-10 mb-20 items-center text-center'>
                <h2 className='text-[52px] w-[40%] mx-auto leading-[68px] '>Seamless Integration: <br /> <span className='font-bold'>AI-Powered Precision</span> </h2>
                <p className='text-[20px] w-[60%] mx-auto py-6 leading-[32px]'>Our AI technology doesn't just reduce radiation; it enhances your workflow. It intuitively detects your region of interest, adjusting seamlessly without interrupting your critical work.</p>
                <p className='text-[20px] leading-[32px]'>This integration means you can focus on what matters most – Patient Care</p>
                <button className='bg-[#3783CA] mt-6 px-6 py-2 font-bold rounded-full text-white'>Learn More</button>
            </div>
        </>
    )
}

export default Integration
