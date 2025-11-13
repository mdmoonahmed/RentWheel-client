import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import SlideContent from "./SlideContent";

const slidesData = [
  {
    words: [" Find Your Perfect Ride"],
    imageUrl: "https://wallpapercave.com/wp/wp4479757.jpg",
    tagline: "Browse trusted local rentals and book instantly.",
    buttonText: "Browse Cars",
    buttonHref: "/browse-cars",
    buttonBg: "bg-primary",
  },
  {
    words: ["Rent. Drive. Explore."],
    imageUrl: "https://wallpapercave.com/wp/wp13649620.jpg",
    tagline: "Book your favorite cars with flexible pricing and easy pickup.",
    buttonText: "Book Now",
    buttonHref: "/browse-cars",
    buttonBg: "bg-yellow-500",
  },
  {
    words: ["Earn by Listing Your Car"],
    imageUrl: "https://wallpapercave.com/wp/wp13335462.jpg",
    tagline: "Join our network of providers and start earning today.",
    buttonText: "Add Your Car",
    buttonHref: "/add-car",
    buttonBg: "bg-green-500",
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/browse-cars?query=${searchTerm}`);
  };

  return (
    <div className="hero-section relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[85vh]"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent slide={slide} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Bar */}
      <div className="absolute z-50 top-40 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] bg-zinc-900/70 backdrop-blur-md border border-yellow-500/40 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.3)] p-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="text"
            placeholder="Search car by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-zinc-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroBanner;

