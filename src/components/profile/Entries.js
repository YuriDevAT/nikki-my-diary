import React from "react";
import Entrie from "./Entrie";

const Entries = ({
  entrie,
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => {
  const handleSetActive = () => {
    setEntries(
      entries.map((item) => {
        if (item.id === entrie.id) {
          return {
            ...item,
            active: !item.active,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="w-full">
      <button
        key={entrie.id}
        className="my-2 sm:ml-2 rounded-sm shadow-md overflow-hidden sm:w-1/4 w-full"
        onClick={handleSetActive}
      >
        <div className="flex sm:justify-between overflow-hidden">
          <p className="bg-rose-light w-1/4 px-2 py-4">{entrie.date}</p>
          <p className="bg-white w-3/4 px-2 py-4">{entrie.title}</p>
        </div>
      </button>
      <Entrie
        entrie={entrie}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default Entries;
