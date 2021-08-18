import React, { useState } from "react";
import Entrie from "./Entrie";

const EntrieButton = ({ entrie, handleEditClick, handleDeleteClick }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <div className="w-full bg-blue-300">
      <button
        key={entrie.id}
        className="my-2 ml-2 rounded-sm shadow-sm overflow-hidden w-1/4"
        onClick={handleSetActive}
      >
        <div className="flex justify-between w-full overflow-hidden">
          <p className="bg-purple-300 w-1/4 px-2 py-4">{entrie.date}</p>
          <p className="bg-yellow-300 w-3/4 px-2 py-4">{entrie.heading}</p>
        </div>
      </button>
      <Entrie
        entrie={entrie}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        active={active}
      />
    </div>
  );
};

export default EntrieButton;
