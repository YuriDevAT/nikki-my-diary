import React from "react";

const EditEntrie = ({
  currentEntrie,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Edit Entrie</h2>
      <label htmlFor="editEntrie">Edit entrie: </label>
      <input
        name="editEntrie"
        type="text"
        placeholder="Edit entrie"
        value={currentEntrie.text}
        onChange={onEditInputChange}
      />
      <button type="submit" onClick={onEditFormSubmit}>
        Update
      </button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditEntrie;
