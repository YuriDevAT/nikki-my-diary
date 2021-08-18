import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";
import AddReminder from "./AddReminder";
import { v4 as uuid } from "uuid";
import ReminderList from "./ReminderList";

const CalendarView = () => {
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem("reminders");
    if (savedReminders) {
      return JSON.parse(savedReminders);
    } else {
      return [];
    }
  });

  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState(new Date());
  const [reminderDate, setReminderDate] = useState(new Date());

  const handleDateChange = (e) => {
    setReminderDate(e.target.value);
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  const onChange = (date) => {
    setDate(date);
  };

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

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this entrie?")) {
      const removeReminder = reminders.filter((reminder) => {
        return reminder.id !== id;
      });
      setReminders(removeReminder);
    }
  };

  return (
    <div className="">
      <div className="w-full p-8 flex justify-around">
        <Calendar onChange={onChange} value={date} locale="ja-JA" />
        <div className="w-1/2 text-center relative">
          <h2 className="text-2xl">
            {date.toLocaleString().slice(0, 10)}, <Time />
          </h2>
          <h3 className="py-8">Here are your reminders for today</h3>
          <AddReminder
            reminder={reminder}
            setReminder={setReminder}
            handleReminderChange={handleReminderChange}
            handleReminderSubmitForm={handleReminderSubmitForm}
            date={reminderDate}
            handleDateChange={handleDateChange}
          />
          <ReminderList
            reminders={reminders}
            handleDeleteClick={handleDeleteClick}
          />
          {!reminders ||
            (reminders.length === 0 && (
              <p>No reminders available. Set a reminder.</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
