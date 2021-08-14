import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";

const ReminderModal = (props) => {
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

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleReminderSubmitForm = (e) => {
    e.preventDefault();
    if (reminder !== "") {
      setReminders([
        ...reminders,
        {
          id: uuid(),
          date: date,
          text: reminder.trim(),
        },
      ]);
    }
    setReminder("");
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="fixed flex items-center justify-center inset-0">
      <form
        onChange={handleReminderSubmitForm}
        className="border-2 flex flex-col  bg-white"
      >
        <h2>What do you want to be reminded of?</h2>
        <input
          type="date"
          value={date}
          required
          onChange={handleDateChange}
          className="mx-auto mt-8"
        />
        <label htmlFor="reminder">
          <input
            type="text"
            name="reminder"
            value={reminder}
            onChange={handleReminderChange}
            className="bg-blue-300 my-8"
          />
        </label>
        <button
          type="submit"
          className="bg-green-200 py-4 px-3"
          onClick={props.onClose}
        >
          Set reminder
        </button>
      </form>
    </div>
  );
};

export default ReminderModal;
