/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React from 'react';

const Bike = ({ bike, onEditClick, onDeleteClick }) => (
  <div className="bike-card">
    <div className="bike-content">
      <h3>
        {bike.brand} <span>{bike.model}</span>
      </h3>
      <img src="/img/pics/3.png" alt={bike.brand} width="100%" />
      <p>
        <b>
          <i>Displacement: </i>
        </b>
        {bike.displacement}cc
      </p>
      <p>
        <b>
          <i>Times: </i>
        </b>
        {bike.times}ps
      </p>
      <p>
        <b>
          <i>Category: </i>
        </b>
        {bike.category}
      </p>
      <p>
        <b>
          <i>Price: </i>
        </b>
        €{bike.price}
      </p>
    </div>
    <div className="bike-buttons">
      <button type="button" onClick={() => onEditClick(bike)}>
        <abbr title="Edit">
          <img
            src="/img/icons/edit-pencil.svg"
            alt="delete"
            className="icons"
          />
        </abbr>
      </button>
      <button type="button" onClick={() => onDeleteClick(bike.id)} className="">
        <abbr title="Delete">
          <img src="/img/icons/trash.svg" alt="delete" className="icons" />
        </abbr>
      </button>
    </div>
  </div>
);

export default Bike;
