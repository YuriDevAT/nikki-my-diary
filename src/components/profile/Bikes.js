import React from 'react';
import Bike from './Bike';

const Bikes = ({ bike, handleEditClick, handleDeleteClick }) => (
  <>
    <Bike
      bike={bike}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
    />
  </>
);

export default Bikes;
