import React from 'react';

const Item = ({ bike }) => {
  const handleSellFunction = () => {};

  const handleRentFunction = () => {};

  return (
    <>
      <div className="bike-card">
        <div className="bike-content">
          <h3>
            {bike.brand} <span>{bike.model}</span>
          </h3>
          <p>
            <i>{bike.category}</i>
          </p>
          <img src="/img/pics/3.png" alt={bike.brand} width="100%" />
          <p>
            <b>Displacement: </b>
            {bike.displacement}cc
          </p>
          <p>
            <b>Times: </b>
            {bike.times}ps
          </p>
          <p>
            <b>Price: </b>€{bike.price}
          </p>
        </div>
        <div className="bike-buttons">
          <button type="button" onClick={handleSellFunction}>
            Sell
          </button>
          <button type="button" onClick={handleRentFunction} className="">
            Rent
          </button>
        </div>
      </div>
      <div className="bike-card">
        <div className="bike-content">
          <h3>
            Honda <span>Z3</span>
          </h3>
          <p>
            <i>Sport</i>
          </p>
          <img src="/img/pics/4.png" alt="Honda" width="100%" />
          <p>
            <b>Displacement: </b>
            263cc
          </p>
          <p>
            <b>Times: </b>
            230ps
          </p>
          <p>
            <b>Price: </b>€90.000
          </p>
        </div>
        <div className="bike-buttons">
          <button type="button" onClick={handleSellFunction}>
            Sell
          </button>
          <button type="button" onClick={handleRentFunction} className="">
            Rent
          </button>
        </div>
      </div>
      <div className="bike-card">
        <div className="bike-content">
          <h3>
            BMW<span>ZW2</span>
          </h3>
          <p>
            <i>Sport</i>
          </p>
          <img src="/img/pics/5.png" alt="Honda" width="100%" />
          <p>
            <b>Displacement: </b>
            263cc
          </p>
          <p>
            <b>Times: </b>
            230ps
          </p>
          <p>
            <b>Price: </b>€130.000
          </p>
        </div>
        <div className="bike-buttons">
          <button type="button" onClick={handleSellFunction}>
            Sell
          </button>
          <button type="button" onClick={handleRentFunction} className="">
            Rent
          </button>
        </div>
      </div>
      <div className="bike-card">
        <div className="bike-content">
          <h3>
            Honda <span>Z3</span>
          </h3>
          <p>
            <i>Sport</i>
          </p>
          <img src="/img/pics/4.png" alt="Honda" width="100%" />
          <p>
            <b>Displacement: </b>
            263cc
          </p>
          <p>
            <b>Times: </b>
            230ps
          </p>
          <p>
            <b>Price: </b>€90.000
          </p>
        </div>
        <div className="bike-buttons">
          <button type="button" onClick={handleSellFunction}>
            Sell
          </button>
          <button type="button" onClick={handleRentFunction} className="">
            Rent
          </button>
        </div>
      </div>
      <div className="bike-card">
        <div className="bike-content">
          <h3>
            BMW<span>ZW2</span>
          </h3>
          <p>
            <i>Sport</i>
          </p>
          <img src="/img/pics/5.png" alt="Honda" width="100%" />
          <p>
            <b>Displacement: </b>
            263cc
          </p>
          <p>
            <b>Times: </b>
            230ps
          </p>
          <p>
            <b>Price: </b>€130.000
          </p>
        </div>
        <div className="bike-buttons">
          <button type="button" onClick={handleSellFunction}>
            Sell
          </button>
          <button type="button" onClick={handleRentFunction} className="">
            Rent
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
