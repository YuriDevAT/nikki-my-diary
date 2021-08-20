import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";
import AddReminder from "./AddReminder";
import { v4 as uuid } from "uuid";
import ReminderList from "./ReminderList";

const CalendarView = () => {
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState(new Date());
  const [reminderDate, setReminderDate] = useState(new Date());
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem("reminders");
    if (savedReminders) {
      return JSON.parse(savedReminders);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  const handleReminderSubmitForm = (e) => {
    e.preventDefault();
    if (reminder !== "") {
      setReminders([
        ...reminders,
        {
          id: uuid(),
          date: reminderDate,
          text: reminder.trim(),
        },
      ]);
    }
    setReminder("");
  };

  const handleDateChange = (e) => {
    setReminderDate(e.target.value);
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const onCalendarChange = (date) => {
    setDate(date);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this entrie?")) {
      const removeReminder = reminders.filter((reminder) => {
        return reminder.id !== id;
      });
      setReminders(removeReminder);
    }
  };

  return (
    <div className="container p-8 flex justify-around text-lg relative">
      <div className="shadow-lg">
        <Calendar onChange={onCalendarChange} value={date} locale="ja-JA" />
      </div>
      <div className="w-1/2 text-center relative flex flex-col justify-around">
        <h2 className="text-2xl">
          {date.toLocaleString().slice(0, 10)}, <Time />
        </h2>
        <h3>Here are your reminders for today:</h3>
        <ReminderList
          reminders={reminders}
          handleDeleteClick={handleDeleteClick}
        />
        {!reminders ||
          (reminders.length === 0 && (
            <p>No reminders available. Set a reminder.</p>
          ))}
        <AddReminder
          reminder={reminder}
          setReminder={setReminder}
          handleReminderChange={handleReminderChange}
          handleReminderSubmitForm={handleReminderSubmitForm}
          date={reminderDate}
          handleDateChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default CalendarView;
