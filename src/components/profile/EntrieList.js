import React from "react";
import Entries from "./Entries";
import Entrie from "./Entrie";

const EntrieList = ({
  entries,
  setEntries,
  handleEditClick,
  handleDeleteClick,
  handleEntrieShow,
  showEntrie,
  handleEntrieClose,
}) => {
  return (
    <div className="container h-full bg-green-middle">
      {!entries ||
        (entries.length === 0 && (
          <p>No entries available. Please add some entries.</p>
        ))}
      <div className="grid grid-cols-5 gap-4 mt-8 p-2 h-full overflow-auto w-full relative bg-gray-base">
        {entries.map((entrie) => (
          <>
            <Entries
              key={entrie.id}
              entrie={entrie}
              entries={entries}
              setEntries={setEntries}
              onShow={handleEntrieShow}
            />
            <Entrie
              key={entrie.id}
              entrie={entrie}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
              showEntrie={showEntrie}
              onClose={handleEntrieClose}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default EntrieList;
