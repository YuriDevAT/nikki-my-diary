import React, { useState } from "react";
import ModalReminder from "./ModalReminder";

const AddReminder = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  date,
  handleDateChange,
  setReminder,
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
          Set reminder
        </button>
      </div>
      <ModalReminder
        reminder={reminder}
        handleReminderChange={handleReminderChange}
        handleReminderSubmitForm={handleReminderSubmitForm}
        date={date}
        handleDateChange={handleDateChange}
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleClose}
      />
    </>
  );
};

export default AddReminder;
