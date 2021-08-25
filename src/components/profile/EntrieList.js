import React from "react";
import Entries from "./Entries";

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <div className="container h-full -mt-16 pt-16">
      {!entries ||
        (entries.length === 0 && (
          <p>No entries available. Please add some entries.</p>
        ))}
      <div className="mt-8 p-2 h-full w-full relative flex justify-around flex-wrap">
        {entries.map((entrie) => (
          <Entries
            key={entrie.id}
            entrie={entrie}
            entries={entries}
            setEntries={setEntries}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

export default EntrieList;
