import React from "react";
import Entries from "./Entries";

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <div className="container h-full bg-green-middle">
      {!entries ||
        (entries.length === 0 && (
          <p>No entries available. Please add some entries.</p>
        ))}
      <div className="grid grid-cols-5 gap-4 mt-8 p-2 h-full overflow-auto w-full relative bg-gray-base">
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
