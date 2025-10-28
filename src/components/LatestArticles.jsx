import React from 'react'
import eventsImg from '../assets/Events.png'
import pressImg from '../assets/Press_Release.png'
import editorialImg from '../assets/Editorials.png'

const LatestArticles = () => {

    const data = [
        {
            id: 1,
            title: "Editorials",
            description: "Proven Radiation Reduction in Interventional Labs",
            img: editorialImg,
            visitPage: '#'
        },
        {
            id: 2,
            title: "Events",
            description: "HITEC with Johns Hopkins (GI) Aug 24-25, 2023",
            img: eventsImg,
            visitPage: '#'
        },
        {
            id: 3,
            title: "Press Release",
            description: "Omega Medical Imaging Launches New Brand Identity",
            img: pressImg,
            visitPage: '#'
        },
    ]


    return (
        <section className='mt-2 mb-40'>
            <h1 className='text-[52px] leading-[68px] font-bold text-center pt-10 pb-6'>Latest Articles</h1>
            <div className='flex flex-wrap justify-around mx-4'>
                {
                    data.map((item) => (

                        <div className='max-w-[370px] flex flex-col justify-around'>
                            <h2 key={item.id} className='my-6 px-4 py-1.5 bg-[#EBF6FF] text-[28px] font-semibold text-center '>{item.title}</h2>
                            <img src={item.img} className='h-[244px] border' alt="" />
                            <p className='text-2xl mt-4 leading-[38px]'>{item.description}</p>
                            <a className='text-[#003366] text-xl pt-4' href='#'>View All {item.title} News</a>

                        </div>

                    ))
                }
            </div>

        </section>
    )
}

export default LatestArticles
