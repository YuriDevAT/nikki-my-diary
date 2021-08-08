import React from "react";

const AddEntrie = ({ entrie, onAddFormSubmit, onAddInputChange }) => {
  return (
    <form
      onSubmit={onAddFormSubmit}
      className="bg-blue-300 sm:w-1/2 text-center mx-auto"
    >
      <h2 className="text-2xl py-6">Add Entrie</h2>
      <label htmlFor="entrie">
        <input
          name="entrie"
          type="text"
          placeholder="How was your day?"
          value={entrie}
          onChange={onAddInputChange}
          className="w-full py-8"
        />
      </label>
    </form>
  );
};

export default AddEntrie;
