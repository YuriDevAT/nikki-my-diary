import React from 'react';
import Bike from './Bike';

const BikeList = ({ bikes, setBikes, handleEditClick, handleDeleteClick }) => (
  <div className="bike-list">
    {!bikes || (bikes.length === 0 && <p>No bikes to sell.</p>)}
    {bikes.map((bike) => (
      <Bike
        key={bike.id}
        bike={bike}
        bikes={bikes}
        setBikes={setBikes}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    ))}
  </div>
);

export default BikeList;
