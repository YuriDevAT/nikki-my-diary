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
    className="bg-gray-light w-1/2 py-3 px-6 h-96 rounded-md shadow-lg text-md
     z-50 backdrop-blur-2xl absolute top-20 left-0 right-0 mx-auto"
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
        className="w-full resize-none pl-2"
        value={currentEntry.text}
        onChange={onEditInputChange}
      />
    </fieldset>
    <div className="flex justify-around">
      <button
        type="submit"
        onClick={onEditFormSubmit}
        className="bg-blue-light px-3 py-3 mt-2 text-white-pure
        rounded-full shadow-md uppercase"
      >
        <Text tid="entryUpdate" />
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="bg-white-pure px-3 py-3 mt-2 rounded-full shadow-md 
        uppercase border border-blue-dark text-blue-dark"
      >
        <Text tid="entryCancel" />
      </button>
    </div>
  </form>
);

export default EditEntry;
