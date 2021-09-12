import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';
import EditBike from './EditBike';
import BikeList from './BikeList';
import BikeForm from './BikeForm';

const ProfileView = () => {
  const { user } = useAuth0();
  const { name } = user;
  const [bike, setBike] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentBike, setCurrentBike] = useState({});
  const [model, setModel] = useState('');
  const [displacement, setDisplacement] = useState('');
  const [times, setTimes] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [bikes, setBikes] = useState(() => {
    const savedBikes = localStorage.getItem('bikes');
    if (savedBikes) {
      return JSON.parse(savedBikes);
    }
    return [];
  });

  const BikeCount = bikes.length;

  const handleClose = (e) => {
    e.preventDefault();
    setBike('');
    setModel('');
    setDisplacement('');
    setTimes('');
    setCategory('');
    setPrice('');
  };

  useEffect(() => {
    localStorage.setItem('bikes', JSON.stringify(bikes));
  }, [bikes]);

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (bike !== '') {
      setBikes([
        ...bikes,
        {
          id: uuid(),
          brand: bike,
          model,
          displacement,
          times,
          category,
          price,
        },
      ]);
    }
    setBike('');
    setModel('');
    setDisplacement('');
    setTimes('');
    setCategory('');
    setPrice('');
  };

  const handleBrandChange = (e) => {
    setBike(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleDisplacementChange = (e) => {
    setDisplacement(e.target.value);
  };

  const handleTimesChange = (e) => {
    setTimes(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAddInputChange = (e) => {
    setBike(e.target.value);
  };

  // eslint-disable-next-line no-shadow
  const handleEditClick = (bike) => {
    setIsEditing(true);
    setCurrentBike({ ...bike });
  };

  const handleEditInputChange = (e) => {
    setCurrentBike({ ...currentBike, text: e.target.value });
  };

  const handleUpdateBike = (id, updatedBike) => {
    const updatedItem = bikes.map((item) =>
      item.id === id ? updatedBike : item
    );
    setIsEditing(false);
    setBikes(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateBike(currentBike.id, currentBike);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const removeBike = bikes.filter((item) => item.id !== id);
      setBikes(removeBike);
    }
  };

  return (
    <div className="profile">
      <h1 className="">Welcome, {name}.</h1>
      <BikeForm
        bike={bike}
        onAddInputChange={handleAddInputChange}
        onAddFormSubmit={handleAddFormSubmit}
        model={model}
        displacement={displacement}
        times={times}
        category={category}
        price={price}
        onBrandChange={handleBrandChange}
        onModelChange={handleModelChange}
        onTimesChange={handleTimesChange}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        onDisplacementChange={handleDisplacementChange}
        onClose={handleClose}
      />
      <h2 className="">Bikes to sell: {BikeCount}</h2>
      <BikeList
        bikes={bikes}
        setBikes={setBikes}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      {isEditing && (
        <>
          <EditBike
            currentBike={currentBike}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
          <div className="modal-bg" />
        </>
      )}
    </div>
  );
};

export default ProfileView;
