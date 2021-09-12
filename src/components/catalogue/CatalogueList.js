import React from 'react';
import Item from './Item';

const CatalogueList = ({ bikes, setBikes }) => (
  <div className="catalogue-list" style={{ paddingTop: '37px' }}>
    {!bikes ||
      (bikes.length === 0 && <p>No bikes to rent or buy at the moment.</p>)}
    {bikes.map((bike) => (
      <Item key={bike.id} bike={bike} bikes={bikes} setBikes={setBikes} />
    ))}{' '}
  </div>
);

export default CatalogueList;
