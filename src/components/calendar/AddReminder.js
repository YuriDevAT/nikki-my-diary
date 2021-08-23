import React from "react";

const AddReminder = ({ handleShow }) => {
  return (
    <div className="bg-rose-light w-26 mx-auto rounded-sm">
      <button
        type="submit"
        className="bg-rose-middle py-4 px-2 text-sm rounded-sm shadow-md uppercase transform translate-x-2 translate-y-2"
        onClick={handleShow}
      >
        Set reminder
      </button>
    </div>
  );
};

export default AddReminder;
