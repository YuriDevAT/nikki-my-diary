import React, { useState } from 'react';
import Entry from './Entry';

const Entries = ({ entry, handleEditClick, handleDeleteClick }) => {
  const [showEntry, setShowEntry] = useState(false);

  const handleEntryClose = () => setShowEntry(false);
  const handleEntryShow = () => setShowEntry(true);

  return (
    <>
      {showEntry && <div className="opacity-30 fixed inset-0 z-40 bg-black" />}
      <button
        type="button"
        key={entry.id}
        className="shadow-md w-64 m-2 rounded"
        onClick={handleEntryShow}
      >
        <div className="flex flex-col justify-between overflow-hidden rounded">
          <p className="bg-lila-dark px-2 py-4">{entry.date}</p>
          <p className="bg-white px-2 py-4">{entry.title}</p>
        </div>
      </button>
      <Entry
        entry={entry}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        showEntry={showEntry}
        handleEntryClose={handleEntryClose}
      />
    </>
  );
};

export default Entries;
