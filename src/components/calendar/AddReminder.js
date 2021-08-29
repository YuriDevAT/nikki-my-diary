import React from 'react';
import { Text } from '../../context/Language';

const AddReminder = ({ handleShow }) => (
  <button
    type="submit"
    className="bg-rose-dark w-36 h-16 text-sm rounded-full shadow-md 
        uppercase mx-auto"
    onClick={handleShow}
  >
    <Text tid="calendarButton" />
  </button>
);

export default AddReminder;
