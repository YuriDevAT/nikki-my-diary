import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "../../hooks/time";
import AddReminder from "./AddReminder";
import { uuid } from "uuidv4";
import ReminderList from "./ReminderList";

const ReminderForm = () => {
  const [date, setDate] = useState(new Date());
  const [reminder, setReminder] = useState("");
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

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const onChange = (date) => {
    setDate(date);
  };

  const onClickDay = (date) => {};

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
        <Calendar
          onChange={onChange}
          value={date}
          locale="ja-JA"
          onClickDay={onClickDay}
        />
        <div className="w-1/2 text-center">
          <h2 className="text-2xl">
            {date.toLocaleString().slice(0, 10)}, <Time />
          </h2>
          <h3 className="py-8">Here are your reminders for today</h3>
          <AddReminder
            reminder={reminder}
            handleReminderChange={handleReminderChange}
            handleReminderSubmitForm={handleReminderSubmitForm}
            handleDateChange={handleDateChange}
            date={date}
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

export default ReminderForm;
