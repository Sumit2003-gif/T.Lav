import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Card = ({ url, header, text, hoverText }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05] cursor-pointer group"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 rounded-2xl" />

      <div className="relative z-10 p-8 flex flex-col text-white h-full">
        <p className="text-xs font-semibold uppercase mb-3 tracking-wide text-[#D29751] drop-shadow">
          {text}
        </p>
        <h1 className="text-3xl font-extrabold mb-3 drop-shadow">{header}</h1>

        {/* Hover text below header */}
        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-xs">
          <p className="text-white text-sm font-medium bg-black/30 p-5 rounded-lg backdrop-blur-sm shadow">
            {hoverText}
          </p>
        </div>

        {/* Button bottom right */}
        <div className="mt-auto flex justify-end pt-6">
          <button className="border-2 border-[#D29751] text-[#D29751] uppercase text-xs font-semibold py-3 px-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm hover:bg-[#D29751] hover:text-white transition-all duration-300 shadow-md">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeInteriorSlider = () => {
  const swiperRef = useRef(null);

  const cardsData = [
    {
      url: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      header: 'Cozy Studio in Downtown',
      text: 'Featured',
      hoverText: 'Modern studio with city views and cozy vibes.',
    },
    {
      url: 'https://images.pexels.com/photos/4393911/pexels-photo-4393911.jpeg',
      header: 'Luxury Penthouse',
      text: 'Featured',
      hoverText: 'Spacious penthouse with rooftop terrace and skyline views.',
    },
    {
      url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      header: 'Elegant Family Home',
      text: 'Featured',
      hoverText: 'Perfect home with garden and nearby parks for family fun.',
    },
    {
      url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      header: 'Modern Minimalist Apartment',
      text: 'Featured',
      hoverText: 'Sleek and stylish space designed for simplicity and comfort.',
    },
    {
      url: 'https://images.pexels.com/photos/395137/pexels-photo-395137.jpeg',
      header: 'Charming Country Cottage',
      text: 'Featured',
      hoverText: 'Rustic charm with beautiful countryside views and cozy interiors.',
    },
    {
      url: 'https://images.pexels.com/photos/221453/pexels-photo-221453.jpeg',
      header: 'Downtown Loft',
      text: 'Featured',
      hoverText: 'Industrial-style loft with open floor plan and great lighting.',
    },
  ];

  return (
    <div className="bg-[#f9f9f9] px-6 md:px-16 py-24 relative">
      <p className="uppercase text-[#D29751] text-center font-semibold mb-2 tracking-widest">
        Best Work
      </p>
      <h2 className="text-4xl font-extrabold text-center text-black/80 mb-3 tracking-tight">
        Interior Views
        <div className="mx-auto mt-2 w-[40px] h-1 bg-[#D29751] rounded-full" />
      </h2>
      <p className="text-center text-gray-600 text-base md:text-lg mb-16 max-w-3xl mx-auto">
        Discover luxurious living spaces designed for comfort and convenience. Explore our hand-picked selection of top apartments.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="pb-20"
      >
        {cardsData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <Card
              url={card.url}
              header={card.header}
              text={card.text}
              hoverText={card.hoverText}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          z-index: 20;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          background-color: rgba(255, 255, 255, 0.5);
          color: #fff;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #D29751;
          color: #ffffff;
          opacity: 1;
          transform: scale(1.4);
        }
      `}</style>
    </div>
  );
};

export default HomeInteriorSlider;