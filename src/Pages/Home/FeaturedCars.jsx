import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import CarCard from "../../Components/CarCard";

const FeaturedCars = ({ latestCars }) => {

  return (
    <section className="relative py-10 md:py-16 bg-linear-to-b from-zinc-900 to-black text-gray-200">
       <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="text-center mb-6 md:mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white heading-text">
          Featured <span className="text-yellow-500">Cars</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Explore our newest additions available for rent
        </p>
      </div>
      <div className="h-px w-32 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4">
        {latestCars.map((car, index) => (
          <CarCard key={car._id} car={car} index={index} ></CarCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;

