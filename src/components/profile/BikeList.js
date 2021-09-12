import React from 'react';
import Bikes from './Bikes';

const BikeList = ({ bikes, setBikes, handleEditClick, handleDeleteClick }) => (
  <>
    {!bikes ||
      (bikes.length === 0 && (
        <div
          className="mx-auto h-full flex items-center flex-col px-6 relative 
        justify-around"
        >
          <p>No bikes to sell.</p>
          <img src="/img/pics/kawai3.png" alt="" width="75%" />
        </div>
      ))}
    {bikes.map((bike) => (
      <Bikes
        key={bike.id}
        bike={bike}
        bikes={bikes}
        setBikes={setBikes}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    ))}
  </>
);

export default BikeList;
