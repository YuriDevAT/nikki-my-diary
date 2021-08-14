import React from "react";
import Entrie from "./Entrie";
import Skeleton from "react-loading-skeleton";

const EntrieList = ({ entries, handleEditClick, handleDeleteClick }) => {
  return (
    <ul className="grid grid-cols-3 gap-8 mt-4 mb-12">
      {entries.map(
        (entrie) =>
          (
            <Entrie
              key={entrie.id}
              entrie={entrie}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ) || <Skeleton />
      )}
    </ul>
  );
};

export default EntrieList;
