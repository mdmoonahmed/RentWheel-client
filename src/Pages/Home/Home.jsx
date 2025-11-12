import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../../Components/CarCard";
import HeroBanner from "./HeroBanner";
import FeaturedCars from "./FeaturedCars";
import WhyRentWithUs from "./WhyRentWithUs";
import CompareCars from "./CompareCars";
import Testimonials from "./Testimonials";

const Home = () => {
  const latestCars = useLoaderData();

  return (
    <div className ="">
      <HeroBanner></HeroBanner>
      <FeaturedCars latestCars={latestCars}></FeaturedCars>
      <WhyRentWithUs></WhyRentWithUs>
     <CompareCars></CompareCars>
     <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
