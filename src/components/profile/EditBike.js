import React from 'react';

const EditBike = ({
  currentBike,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => (
  <form
    onSubmit={onEditFormSubmit}
    className="bg-gray-light w-full sm:w-1/2 py-3 px-6 h-96 rounded-md 
    shadow-lg text-md z-50 backdrop-blur-2xl absolute top-20 left-0 right-0 
    sm:mx-auto"
  >
    <fieldset className="p-3 border border-white rounded-md w-full">
      <legend className="text-md p-2">Update information</legend>
      <textarea
        name="editBike"
        type="text"
        aria-label="edit bike"
        rows="8"
        className="w-full resize-none pl-2"
        value={currentBike.text}
        onChange={onEditInputChange}
      />
    </fieldset>
    <div className="flex justify-around">
      <button
        type="submit"
        onClick={onEditFormSubmit}
        className="bg-blue-dark px-3 py-3 mt-2 text-white-pure
        rounded-full shadow-md uppercase"
      >
        Update
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="bg-white-pure px-3 py-3 mt-2 rounded-full shadow-md 
        uppercase border border-blue-dark text-blue-dark"
      >
        Cancel
      </button>
    </div>
  </form>
);

export default EditBike;
