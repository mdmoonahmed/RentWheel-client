import React from 'react';

const CarCard = ({car}) => {
    return (
        <div>
            <img src={car.imageURL} alt="" />
        </div>
    );
};

export default CarCard;