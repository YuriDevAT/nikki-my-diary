import React, { useEffect, useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { v4 as uuid } from 'uuid';
import Time from '../../utils/Time';
import AddReminder from './AddReminder';
import ReminderList from './ReminderList';
import ReminderForm from './ReminderForm';
import { LanguageContext } from '../../context/Language';

const CalendarView = () => {
  const [reminder, setReminder] = useState('');
  const [date, setDate] = useState(new Date());
  const [reminderDate, setReminderDate] = useState(new Date());
  const [reminders, setReminders] = useState(() => {
    const savedReminders = localStorage.getItem('reminders');
    if (savedReminders) {
      return JSON.parse(savedReminders);
    }
    return [];
  });
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const { dictionary } = useContext(LanguageContext);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const handleReminderSubmitForm = (e) => {
    e.preventDefault();
    if (reminder !== '') {
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
    setReminder('');
  };

  const handleDateChange = (e) => {
    setReminderDate(e.target.value);
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const onCalendarChange = (today) => {
    setDate(today);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(dictionary.reminderDelete)) {
      const removeReminder = reminders.filter((item) => item.id !== id);
      setReminders(removeReminder);
    }
  };

  return (
    <div className="container text-lg relative">
      <div className="container py-8">
        <h1 className="text-center text-3xl">{dictionary.calendarHeader}</h1>
      </div>
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
        <div className="opacity-25 fixed inset-0 z-40 bg-black-dark" />
      )}
      <div className="flex flex-wrap-reverse justify-around sm:p-8">
        <Calendar
          onChange={onCalendarChange}
          value={date}
          locale={dictionary.lang}
        />
        <div className="lg:w-1/2 text-center relative flex flex-col pb-32">
          <h2 className="text-2xl sm:pb-2">
            {date.toLocaleString().slice(0, 10)}, <Time />
          </h2>
          <h3>{dictionary.calendarText}</h3>
          <ReminderList
            reminders={reminders}
            setReminders={setReminders}
            handleDeleteClick={handleDeleteClick}
          />
          <AddReminder handleShow={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
