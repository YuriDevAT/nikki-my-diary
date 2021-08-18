import React, { useState } from "react";
import EntrieForm from "./EntrieForm";

const AddEntrie = ({
  entrie,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  onHandleMoodChange,
  date,
  heading,
  onHeadingChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="bg-green-300 mx-auto w-full h-full relative">
      <button
        type="submit"
        className="w-20 h-20 mr-4 rounded-full bg-pink-300 shadow-2xl fixed bottom-4 right-56 animate-bounce"
        onClick={handleShow}
      >
        <img src="/img/icons/plus.svg" alt="add" className="" />
      </button>
      <EntrieForm
        entrie={entrie}
        onAddInputChange={onAddInputChange}
        onAddFormSubmit={onAddFormSubmit}
        date={date}
        onHandleMoodChange={onHandleMoodChange}
        onHandleDateChange={onHandleDateChange}
        heading={heading}
        onHeadingChange={onHeadingChange}
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleClose}
      />
    </div>
  );
};

export default AddEntrie;
