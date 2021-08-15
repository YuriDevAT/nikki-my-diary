import React, { useState } from "react";
import EntrieButton from "./EntrieButton";
import Entrie from "./Entrie";

const EntrieList = ({ entries, handleEditClick, handleDeleteClick }) => {
  const entrieCount = entries.length;

  return (
    <div className="container">
      <h2>
        You have {entrieCount} {entrieCount === 1 ? `entrie` : `entries`} so
        far.
      </h2>
      <div className="h-screen overflow-auto bg-gray-100 mb-6 w-full">
        {entries.map((entrie) => (
          <EntrieButton
            key={entrie.id}
            entrie={entrie}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default EntrieList;
