import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import AddModal from "./AddModal";

const Reminder = () => {
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState(new Date());
  const [reminders, setReminders] = useState(() => {
    const savedReminder = localStorage.getItem("reminders");
    if (savedReminder) {
      return JSON.parse(savedReminder);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  return (
    <>
      <button
        type="button"
        className="bg-green-200 py-4 px-3"
        onClick={() => setShow(true)}
      >
        Set a reminder
      </button>
      <AddModal onClose={() => setShow(false)} show={show} />
    </>
  );
};

export default Reminder;
