import React from "react";
import Entries from "./Entries";

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <div className="h-full bg-green-light">
      {!entries ||
        (entries.length === 0 && (
          <p>No entries available. Please add some entries.</p>
        ))}
      <div>
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
