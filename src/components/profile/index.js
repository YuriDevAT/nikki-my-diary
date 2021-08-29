import React, { useEffect, useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';
import AddEntry from './AddEntry';
import EditEntry from './EditEntry';
import EntryList from './EntryList';
import EntryForm from './EntryForm';
import { LanguageContext } from '../../context/Language';
import Quote from './Quote';

const ProfileView = () => {
  const { user } = useAuth0();
  const { name } = user;
  const [entry, setEntry] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({});
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

  const entryCount = entries.length;
  const { dictionary } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (entry !== '') {
      setEntries([
        ...entries,
        {
          id: uuid(),
          title,
          mood,
          date,
          text: entry.trim(),
        },
      ]);
    }
    setEntry('');
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
    setEntry(e.target.value);
  };

  // eslint-disable-next-line no-shadow
  const handleEditClick = (entry) => {
    setIsEditing(true);
    setCurrentEntry({ ...entry });
  };

  const handleEditInputChange = (e) => {
    setCurrentEntry({ ...currentEntry, text: e.target.value });
  };

  const handleUpdateEntry = (id, updatedEntry) => {
    const updatedItem = entries.map((item) =>
      item.id === id ? updatedEntry : item
    );
    setIsEditing(false);
    setEntries(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateEntry(currentEntry.id, currentEntry);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(dictionary.entryDelete)) {
      const removeEntry = entries.filter((item) => item.id !== id);
      setEntries(removeEntry);
    }
  };

  return (
    <div
      className="sm:h-2/3 h-full container text-lg relative rounded-3xl 
    bg-white-base bg-opacity-50 pb-8 mb-8 mx-auto"
    >
      <div className="container py-8">
        <h1 className="text-center text-3xl">
          {dictionary.profileHeader}
          {name}?
        </h1>
      </div>
      <EntryForm
        entry={entry}
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
        {dictionary.entriesCounter}
        {entryCount}
      </h2>
      <div className="flex justify-around h-full">
        <div
          className="w-1/4 h-72 bg-blue-dark p-12 border-2 text-white-pure
        border-white-pure bg-opacity-70 rounded-t-2xl rounded-tr-none 
        rounded-b-2xl rounded-bl-none mt-16 relative"
        >
          <img
            src="/img/pics/flowers-right.png"
            alt=""
            width="100"
            className="absolute -right-8 -top-10"
          />
          <Quote />
          <img
            src="/img/pics/flowers-left.png"
            alt=""
            width="70"
            className="absolute -left-7 -bottom-7"
          />
        </div>
        <div
          className="container w-2/5 h-4/5 shadow-inner bg-white-pure 
        overflow-auto rounded flex flex-wrap justify-around"
        >
          <EntryList
            entries={entries}
            setEntries={setEntries}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
      </div>
      {isEditing && (
        <>
          <EditEntry
            currentEntry={currentEntry}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
          <div className="opacity-30 fixed inset-0 z-40 bg-black" />
        </>
      )}
      <AddEntry handleShow={handleShow} />
    </div>
  );
};

export default ProfileView;
