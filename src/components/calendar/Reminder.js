import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";

const Reminder = () => {
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

  return (
    <>
      <form onChange={handleReminderSubmitForm} className="border-2">
        <h2>What do you want to be reminded of?</h2>
        <input type="date" value={date} required onChange={handleDateChange} />
        <label htmlFor="reminder">
          <input
            type="text"
            name="reminder"
            value={reminder}
            onChange={handleReminderChange}
            className="bg-blue-300"
          />
        </label>
      </form>
    </>
  );
};

export default Reminder;
