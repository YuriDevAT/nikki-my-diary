import React, { useState } from "react";
import ModalEntrie from "./ModalEntrie";

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
    <>
      <div>
        <button
          type="submit"
          className="bg-pink-300 py-4 rounded-md shadow-sm uppercase"
          onClick={handleShow}
        >
          Add an Entrie
        </button>
      </div>
      <ModalEntrie
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
    </>
  );
};

export default AddEntrie;
