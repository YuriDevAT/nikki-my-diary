import React from "react";

const EditEntrie = ({
  currentEntrie,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <form
      onSubmit={onEditFormSubmit}
      className="bg-green-light w-96 py-3 px-6 h-96 rounded-md shadow-lg text-md z-50 backdrop-blur-2xl border border-white border-opacity-25 absolute inset-0 mx-auto"
    >
      <fieldset className="p-3 border border-white rounded-md w-full">
        <legend className="text-md p-2">Edit Entrie</legend>
        <textarea
          name="editEntrie"
          type="text"
          aria-label="edit Entrie"
          rows="8"
          className="w-full resize-none"
          value={currentEntrie.text}
          onChange={onEditInputChange}
        />
      </fieldset>
      <div className="flex justify-around">
        <button
          type="submit"
          onClick={onEditFormSubmit}
          className="bg-rose-middle px-3 py-2 mt-2 rounded-md shadow-sm uppercase"
        >
          Update
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="bg-white border-rose-middle border-2 text-rose-dark px-3 py-2 mt-2 rounded-md shadow-sm uppercase"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditEntrie;
