import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../../Components/CarCard";

const BrowseCar = () => {
  const cars = useLoaderData();

  return (
    <section className="min-h-screen py-10 md:py-16 bg-linear-to-r from-black via-transparent to-black text-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Browse <span className="text-yellow-500">Cars</span>
        </h2>
        <p className="text-gray-400 mt-2">Find the perfect ride for your journey</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {cars.map((car, index) => (
             <CarCard key={car._id} car={car} index={index} ></CarCard>
        ))}
      </div>
    </section>
  );
};

export default BrowseCar;
