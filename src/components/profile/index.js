import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';
import AddBike from './AddBike';
import EditBike from './EditBike';
import BikeList from './BikeList';
import BikeForm from './BikeForm';

const ProfileView = () => {
  const { user } = useAuth0();
  const { name } = user;
  const [bike, setBike] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentBike, setCurrentBike] = useState({});
  const [mood, setMood] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [bikes, setBikes] = useState(() => {
    const savedBikes = localStorage.getItem('bikes');
    if (savedBikes) {
      return JSON.parse(savedBikes);
    }
    return [];
  });

  const BikeCount = bikes.length;

  const [showModal, setShowModal] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
    setTitle('');
    setBike('');
  };

  const handleShow = () => setShowModal(true);

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
          title,
          mood,
          date,
          text: bike.trim(),
        },
      ]);
    }
    setBike('');
    setTitle('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
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
    <div
      className="sm:h-2/3 h-full container text-lg relative rounded-3xl 
    bg-white-base bg-opacity-50 pb-8 mb-8 mx-auto"
    >
      <div className="container py-8">
        <h1 className="text-center text-3xl">
          Hello,
          {name}. Sell a bike.
        </h1>
      </div>
      <BikeForm
        bike={bike}
        onAddInputChange={handleAddInputChange}
        onAddFormSubmit={handleAddFormSubmit}
        date={date}
        onHandleMoodChange={handleMoodChange}
        onHandleDateChange={handleDateChange}
        title={title}
        onTitleChange={handleTitleChange}
        showModal={showModal}
        onClose={handleClose}
      />
      {showModal && <div className="opacity-30 fixed inset-0 z-20 bg-black" />}
      <h2 className="text-right mr-2">
        Bikes to sell:
        {BikeCount}
      </h2>
      <div className="flex justify-around h-full flex-wrap">
        <div
          className="w-3/5 sm:w-1/4 h-80 bg-blue-dark p-10 border-2 
          text-white-pure border-white-pure bg-opacity-70 rounded-t-2xl 
          rounded-tr-none rounded-b-2xl rounded-bl-none mt-6 relative"
        >
          <img
            src="/img/pics/flowers-right.png"
            alt=""
            width="100"
            className="absolute -right-8 -top-10"
          />
          <img
            src="/img/pics/flowers-left.png"
            alt=""
            width="70"
            className="absolute -left-7 -bottom-7"
          />
        </div>
        <div
          className="container sm:w-2/5 h-4/5 shadow-inner bg-white-pure 
        overflow-auto rounded flex flex-wrap justify-around sm:m-0 mt-10"
        >
          <BikeList
            bikes={bikes}
            setBikes={setBikes}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
      </div>
      {isEditing && (
        <>
          <EditBike
            currentBike={currentBike}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
          <div className="opacity-30 fixed inset-0 z-40 bg-black" />
        </>
      )}
      <AddBike handleShow={handleShow} />
    </div>
  );
};

export default ProfileView;
