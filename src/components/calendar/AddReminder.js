import React, { useState } from "react";
import ReminderForm from "./ReminderForm";

const AddReminder = ({
  reminder,
  handleReminderChange,
  handleReminderSubmitForm,
  date,
  handleDateChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="bg-pink-100 w-24 mx-auto rounded-sm">
        <button
          type="submit"
          className="bg-pink-300 py-4 rounded-sm shadow-md uppercase transform translate-x-2 translate-y-2"
          onClick={handleShow}
        >
          Set reminder
        </button>
      </div>
      <ReminderForm
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
