import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
    buttonBg: "bg-red-500",
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

  return (
    <div className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[50vh] md:h-[80vh]"
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
    </div>
  );
};

export default HeroBanner;
