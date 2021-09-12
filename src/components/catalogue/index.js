import React, { useState, useEffect } from 'react';
import CatalogueList from './CatalogueList';
import Searchbar from './Searchbar';

const Catalogue = () => {
  const [bikes, setBikes] = useState(() => {
    const savedBikes = localStorage.getItem('bikes');
    if (savedBikes) {
      return JSON.parse(savedBikes);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('bikes', JSON.stringify(bikes));
  }, [bikes]);

  return (
    <div>
      <h1>Rent or buy a bike</h1>
      <Searchbar />
      <CatalogueList bikes={bikes} setBikes={setBikes} />
    </div>
  );
};

export default Catalogue;
