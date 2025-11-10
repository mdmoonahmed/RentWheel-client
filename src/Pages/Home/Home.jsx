import React from 'react';
import { useLoaderData } from 'react-router';
import CarCard from '../../Components/CarCard';

const Home = () => {
    const cars = useLoaderData();
    console.log(cars);
    
    return (
        <div>
            <h1>heloo</h1>
            {
                cars.map(car => <CarCard key={car._id} car={car}></CarCard> )
            }
        </div>
    );
};

export default Home;