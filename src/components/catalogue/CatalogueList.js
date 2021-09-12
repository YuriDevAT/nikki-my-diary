import React from 'react';
import Item from './Item';

const CatalogueList = ({ bikes, setBikes }) => (
  <div className="bike-list" style={{ paddingTop: '37px' }}>
    {!bikes || (bikes.length === 0 && <p>No bikes to sell.</p>)}
    {bikes.map((bike) => (
      <Item key={bike.id} bike={bike} bikes={bikes} setBikes={setBikes} />
    ))}
  </div>
);

export default CatalogueList;
