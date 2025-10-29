import React from 'react'
import eventsImg from '../assets/Events.png'
import pressImg from '../assets/Press_Release.png'
import editorialImg from '../assets/Editorials.png'

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Editorials",
      description: "Proven Radiation Reduction in Interventional Labs",
      img: editorialImg,
      link: "#",
    },
    {
      id: 2,
      title: "Events",
      description: "HITEC with Johns Hopkins (GI) Aug 24-25, 2023",
      img: eventsImg,
      link: "#",
    },
    {
      id: 3,
      title: "Press Release",
      description: "Omega Medical Imaging Launches New Brand Identity",
      img: pressImg,
      link: "#",
    },
  ];

  return (
    <section className="my-20 px-4 sm:px-8 lg:px-20">
      {/* ---------- HEADING ---------- */}
      <h1 className="text-2xl sm:text-4xl lg:text-[52px] font-bold text-center leading-tight sm:leading-[60px] lg:leading-[68px] mb-12">
        Latest Articles
      </h1>

      {/* ---------- ARTICLES GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {articles.map(({ id, title, description, img, link }) => (
          <div
            key={id}
            className="max-w-[370px] flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-[28px] font-semibold bg-[#EBF6FF] py-3 text-center text-[#003366]">
              {title}
            </h2>

            {/* Image */}
            <img
              src={img}
              alt={title}
              className="w-full h-[220px] sm:h-[244px] object-cover"
            />

            {/* Description */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow text-center">
              <p className="text-base sm:text-lg lg:text-2xl leading-relaxed text-gray-800">
                {description}
              </p>

              {/* Link */}
              <a
                href={link}
                className="text-[#003366] text-sm sm:text-base lg:text-xl font-semibold mt-4 hover:underline"
              >
                View All {title} News
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
