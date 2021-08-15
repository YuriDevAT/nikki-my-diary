import React from "react";
import EntrieButton from "./EntrieButton";
import Entrie from "./Entrie";

const EntrieList = ({ entries, handleEditClick, handleDeleteClick }) => {
  const entrieCount = entries.length;

  return (
    <>
      <h2>
        You have {entrieCount} {entrieCount === 1 ? `entrie` : `entries`} so
        far.
      </h2>
      <div className="flex justify-between">
        <ul className="w-1/4 h-full overflow-auto bg-gray-100 mb-6">
          {entries.map((entrie) => (
            <EntrieButton key={entrie.id} entrie={entrie} />
          ))}
        </ul>
        <div className="bg-pink-200 w-3/4">
          {entries.map((entrie) => (
            <Entrie
              key={entrie.id}
              entrie={entrie}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EntrieList;
