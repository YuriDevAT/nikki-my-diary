import React, { useState } from "react";
import EntrieForm from "./EntrieForm";

const AddEntrie = ({
  entrie,
  onAddFormSubmit,
  onAddInputChange,
  onHandleDateChange,
  onHandleMoodChange,
  date,
  title,
  onTitleChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button
        type="submit"
        className="w-20 h-20 mr-4 rounded-full bg-rose-middle shadow-2xl fixed bottom-4 right-56 hover:animate-spin-slow"
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
        title={title}
        onTitleChange={onTitleChange}
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleClose}
      />
    </>
  );
};

export default AddEntrie;
