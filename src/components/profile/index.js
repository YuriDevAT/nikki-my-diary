import React, { useEffect, useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';
import AddEntrie from './AddEntrie';
import EditEntrie from './EditEntrie';
import EntrieList from './EntrieList';
import EntrieForm from './EntrieForm';
import { LanguageContext } from '../../context/Language';

const ProfileView = () => {
  const { user } = useAuth0();
  const { name } = user;
  const [entrie, setEntrie] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntrie, setCurrentEntrie] = useState({});
  const [mood, setMood] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    if (savedEntries) {
      return JSON.parse(savedEntries);
    }
    return [];
  });

  const entrieCount = entries.length;
  const { dictionary } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (entrie !== '') {
      setEntries([
        ...entries,
        {
          id: uuid(),
          title,
          mood,
          date,
          text: entrie.trim(),
          active: false,
        },
      ]);
    }
    setEntrie('');
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
    setEntrie(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setCurrentEntrie({ ...entrie });
  };

  const handleEditInputChange = (e) => {
    setCurrentEntrie({ ...currentEntrie, text: e.target.value });
  };

  const handleUpdateEntrie = (id, updatedEntrie) => {
    const updatedItem = entries.map((item) =>
      item.id === id ? updatedEntrie : item
    );
    setIsEditing(false);
    setEntries(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateEntrie(currentEntrie.id, currentEntrie);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(dictionary.entrieDelete)) {
      const removeEntrie = entries.filter((item) => item.id !== id);
      setEntries(removeEntrie);
    }
  };

  return (
    <div className="container text-lg relative sm:h-3/5 h-full">
      <div className="container py-8">
        <h1 className="text-center text-3xl">
          {dictionary.profileHeader}
          {name}?
        </h1>
      </div>
      <EntrieForm
        entrie={entrie}
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
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black-dark" />
      )}
      <h2 className="text-right">
        {dictionary.entriesCounter}
        {entrieCount}
      </h2>
      <EntrieList
        entries={entries}
        setEntries={setEntries}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      {isEditing && (
        <>
          <EditEntrie
            currentEntrie={currentEntrie}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-black-dark" />
        </>
      )}
      <AddEntrie handleShow={handleShow} />
    </div>
  );
};

export default ProfileView;
