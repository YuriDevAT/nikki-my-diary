import React from "react";

const Entrie = ({ entrie, onEditClick, onDeleteClick }) => {
  return (
    <li key={entrie.id} className="h-44 w-44 m-2 bg-purple-200">
      {entrie.text}
      <button
        onClick={() => onEditClick(entrie)}
        className="py-3 px-5 bg-gray-200 rounded-md shadow-sm"
      >
        Edit
      </button>
      <button
        onClick={() => onDeleteClick(entrie.id)}
        className="py-3 px-3 bg-red-500 rounded-md shadow-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default Entrie;
