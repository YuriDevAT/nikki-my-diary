import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";
import AddReminder from "./AddReminder";
import { v4 as uuid } from "uuid";
import ReminderList from "./ReminderList";
import ReminderForm from "./ReminderForm";

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
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
          completed: false,
          show: false,
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
    <div className="container sm:p-8 flex flex-wrap-reverse justify-around text-lg relative">
      <ReminderForm
        reminder={reminder}
        handleReminderChange={handleReminderChange}
        handleReminderSubmitForm={handleReminderSubmitForm}
        date={reminderDate}
        handleDateChange={handleDateChange}
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={handleClose}
      />
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black-dark"></div>
      )}
      <div className="shadow-lg h-full max-w-full">
        <Calendar onChange={onCalendarChange} value={date} locale="ja-JA" />
      </div>
      <div className="sm:w-1/2 text-center relative flex flex-col justify-around pb-10 sm:py-0">
        <h2 className="text-2xl sm:py-2">
          {date.toLocaleString().slice(0, 10)}, <Time />
        </h2>
        <h3>Here are your reminders for today:</h3>
        <ReminderList
          reminders={reminders}
          setReminders={setReminders}
          handleDeleteClick={handleDeleteClick}
        />
        <AddReminder
          reminder={reminder}
          setReminder={setReminder}
          handleReminderChange={handleReminderChange}
          handleReminderSubmitForm={handleReminderSubmitForm}
          date={reminderDate}
          handleDateChange={handleDateChange}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default CalendarView;
