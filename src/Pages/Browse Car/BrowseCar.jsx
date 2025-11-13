import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import CarCard from "../../Components/CarCard";

const BrowseCar = () => {
  const cars = useLoaderData(); 
  const location = useLocation();
  const [filteredCars, setFilteredCars] = useState(cars);

 
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query")?.toLowerCase() || "";

    if (query) {
      const filtered = cars.filter((car) =>
        car.carName.toLowerCase().includes(query)
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }, [location.search, cars]);

  return (
    <section className="min-h-screen py-10 md:py-16 bg-linear-to-r from-black via-transparent to-black text-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white heading-text">
          Browse <span className="text-yellow-500">Cars</span>
        </h2>
        <p className="text-gray-400 mt-2">Find the perfect ride for your journey</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <CarCard key={car._id} car={car} index={index} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No cars found matching your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default BrowseCar;

