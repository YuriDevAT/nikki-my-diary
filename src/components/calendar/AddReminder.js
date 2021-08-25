import React from "react";
import { Text } from "../../context/Language";

const AddReminder = ({ handleShow }) => {
  return (
    <div className="bg-rose-light w-26 mx-auto rounded-sm">
      <button
        type="submit"
        className="bg-rose-middle py-4 px-2 text-sm rounded-sm shadow-md uppercase transform translate-x-2 translate-y-2"
        onClick={handleShow}
      >
        <Text tid="calendarButton" />
      </button>
    </div>
  );
};

export default AddReminder;
