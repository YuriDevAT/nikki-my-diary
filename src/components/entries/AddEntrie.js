import React from "react";

const AddEntrie = ({ entrie, onAddFormSubmit, onAddInputChange }) => {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Add Entrie</h2>
      <label htmlFor="entrie">Add entrie:</label>
      <input
        name="entrie"
        type="text"
        placeholder="How was your day?"
        value={entrie}
        onChange={onAddInputChange}
      />
    </form>
  );
};

export default AddEntrie;
