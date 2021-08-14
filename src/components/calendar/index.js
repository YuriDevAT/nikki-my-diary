import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "../../hooks/time";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [entries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      return JSON.parse(savedEntries);
    } else {
      return [];
    }
  });

  const onChange = (date) => {
    setDate(date);
  };

  const onClickDay = () => {};

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
          <h3 className="py-8">Here are the entries for today</h3>
          <ul>
            {entries.map((entrie) => (
              <li>{entrie.text}</li>
            ))}
          </ul>
          {!entries ||
            (entries.length === 0 && (
              <p>No entries available. Please add some entries.</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
