import React from 'react';
import { Text } from '../../context/Language';

const EditEntry = ({
  currentEntry,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => (
  <form
    onSubmit={onEditFormSubmit}
    className="bg-green-light w-96 py-3 px-6 h-96 rounded-md shadow-lg text-md
     z-50 backdrop-blur-2xl absolute inset-0 mx-auto"
  >
    <fieldset className="p-3 border border-white rounded-md w-full">
      <legend className="text-md p-2">
        <Text tid="entryEdit" />
      </legend>
      <textarea
        name="editEntry"
        type="text"
        aria-label="edit Entry"
        rows="8"
        className="w-full resize-none"
        value={currentEntry.text}
        onChange={onEditInputChange}
      />
    </fieldset>
    <div className="flex justify-around">
      <button
        type="submit"
        onClick={onEditFormSubmit}
        className="bg-green-light border border-black px-3 py-2 mt-2 
        rounded-md shadow-sm uppercase"
      >
        <Text tid="entryUpdate" />
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="bg-white bg-green-dark px-3 py-2 mt-2 rounded-md shadow-md 
        uppercase"
      >
        <Text tid="entryCancel" />
      </button>
    </div>
  </form>
);

export default EditEntry;
