import React from 'react';

const AddEntrie = ({ handleShow }) => (
  <button
    type="submit"
    className="w-20 h-20 mr-4 rounded-full bg-green-dark shadow-2xl fixed 
    bottom-4 right-5 sm:right-56 hover:animate-spin-slow flex justify-center"
    onClick={handleShow}
  >
    <img src="/img/icons/plus.svg" alt="add" width="56" height="56" />
  </button>
);

export default AddEntrie;
