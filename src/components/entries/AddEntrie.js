import React from "react";

const AddEntrie = ({
  entrie,
  setEntrie,
  onAddFormSubmit,
  onAddInputChange,
}) => {
  return (
    <form
      onSubmit={onAddFormSubmit}
      className="bg-blue-300 sm:w-1/2 text-center mx-auto"
    >
      <h2 className="text-2xl py-6">How was your day?</h2>
      <label htmlFor="entrie">
        <textarea
          name="entrie"
          type="text"
          value={entrie}
          onChange={onAddInputChange}
          className="w-full p-8 border-2 rounded-sm"
        />
      </label>
      <button type="submit" onClick={() => setEntrie(entrie)}>
        Add
      </button>
    </form>
  );
};

export default AddEntrie;
