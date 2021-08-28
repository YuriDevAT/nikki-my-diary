import React, { useState } from 'react';
import Entrie from './Entrie';

const Entries = ({ entrie, handleEditClick, handleDeleteClick }) => {
  const [showEntrie, setShowEntrie] = useState(false);

  const handleEntrieClose = () => setShowEntrie(false);
  const handleEntrieShow = () => setShowEntrie(true);

  return (
    <>
      {showEntrie && <div className="opacity-30 fixed inset-0 z-40 bg-black" />}
      <button
        type="button"
        key={entrie.id}
        className="shadow-md w-64 m-2 rounded"
        onClick={handleEntrieShow}
      >
        <div className="flex flex-col justify-between overflow-hidden rounded">
          <p className="bg-green-dark px-2 py-4">{entrie.date}</p>
          <p className="bg-white px-2 py-4">{entrie.title}</p>
        </div>
      </button>
      <Entrie
        entrie={entrie}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        showEntrie={showEntrie}
        handleEntrieClose={handleEntrieClose}
      />
    </>
  );
};

export default Entries;
