import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "../../hooks/time";
import Reminder from "./Reminder";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [reminder, setReminder] = useState(() => {
    const savedReminder = localStorage.getItem("reminder");
    if (savedReminder) {
      return JSON.parse(savedReminder);
    } else {
      return [];
    }
  });

  const onChange = (date) => {
    setDate(date);
  };

  const onClickDay = (date) => {};

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
          <h3 className="py-8">Here are the reminders for today</h3>
          <Reminder />
          {/* <ul>
            {entries.map((entrie) => (
              <li>{entrie.text}</li>
            ))}
          </ul>
          {!entries ||
            (entries.length === 0 && (
              <p>No reminders available. Set a reminder.</p> 
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
