import React from 'react';

const EditBike = ({
  currentBike,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => (
  <form onSubmit={onEditFormSubmit} className="edit-form">
    <fieldset className="p-3 border border-white rounded-md w-full">
      <legend>Update price</legend>
      <input
        name="editBike"
        type="text"
        aria-label="edit bike"
        value={currentBike.price}
        onChange={onEditInputChange}
      />
    </fieldset>
    <div className="flex justify-around">
      <button type="submit" onClick={onEditFormSubmit}>
        Update
      </button>
      <button type="button" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </div>
  </form>
);

export default EditBike;
