import React from "react";

const Entrie = ({ entrie, onEditClick, onDeleteClick }) => {
  return (
    <li key={entrie.id}>
      {entrie.text}
      <button onClick={() => onEditClick(entrie)}>Edit</button>
      <button onClick={() => onDeleteClick(entrie.id)}>Delete</button>
    </li>
  );
};

export default Entrie;
