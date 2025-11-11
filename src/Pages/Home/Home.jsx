import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../../Components/CarCard";
import HeroBanner from "./HeroBannner";
import FeaturedCars from "./FeaturedCars";

const Home = () => {
  const latestCars = useLoaderData();

  return (
    <div className ="">
      <HeroBanner></HeroBanner>
      <FeaturedCars latestCars={latestCars}></FeaturedCars>
      
    </div>
  );
};

export default Home;
