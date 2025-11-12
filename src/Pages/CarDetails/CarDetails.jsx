import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaGasPump,
  FaTachometerAlt,
  FaCogs,
  FaChair,
  FaRoad,
} from "react-icons/fa";

const CarDetails = () => {
  const cars = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, cars);

  const car = cars.find((car) => car._id === id);

  return (
    <motion.div
      className="min-h-screen bg-linear-to-r from-black via-transparent to-black text-gray-200 py-10 px-4 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="text-yellow-500 hover:text-yellow-400 font-semibold mb-6"
      >
        &larr; Back to Browse Cars
      </button>

      <div className="max-w-6xl mx-auto bg-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/50 transition-shadow duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={car.imageURL}
              alt={car.carName}
              className="w-full h-full object-cover lg:h-[500px]"
            />
            <span className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
              {car.category}
            </span>
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full font-semibold text-sm ${
                car.status === "Available"
                  ? "bg-green-500 text-black"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {car.status}
            </span>
          </motion.div>

          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {car.carName}
              </h1>
              <p className="text-gray-400 text-lg mb-4">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-4">
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <FaGasPump />
                  <span>{car.specs.fuelType}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <FaCogs />
                  <span>{car.specs.transmission}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <FaTachometerAlt />
                  <span>{car.specs.topSpeed}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <FaChair />
                  <span>{car.specs.seats} Seats</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <FaRoad />
                  <span>{car.specs.mileage}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500 font-medium">
                  <span>Year:</span>
                  <span>{car.specs.year}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-2xl md:text-3xl font-bold text-green-400">
                ৳{car.rentPricePerDay} / day
              </p>
              {car.status === "Available" ? (
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300">
                  Book Now
                </button>
              ) : (
                <button
                  disabled
                  className="bg-gray-700 text-gray-400 font-bold px-6 py-3 rounded-xl cursor-not-allowed"
                >
                  Unavailable
                </button>
              )}
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4">
              <h3 className="text-yellow-500 font-semibold text-lg">
                Provided By
              </h3>
              <p className="text-gray-300">{car.providerName}</p>
              <p className="text-gray-400 text-sm">{car.providerEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetails;
