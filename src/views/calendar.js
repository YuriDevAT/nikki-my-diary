import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Hero from "../components/Hero";
import "react-calendar/dist/Calendar.css";
import Time from "../hooks/time";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const dateFormat = new Date();
  const [entries, setEntries] = useState([]);
  const [year, setYear] = useState([dateFormat.getFullYear()]);
  const [month, setMonth] = useState([dateFormat.getMonth() + 1]);
  const [day, setDay] = useState([dateFormat.getDate()]);

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    const getEntries = async () => {
      const res = await fetch(`allEntries${year}-${month}-${day}`);
      const entrie = await res.json();
      setEntries(entrie.entrie);
    };
    getEntries();
  }, [day, month, year]);

  let entrieList = entries.map((entrie) => <li key={entrie.id}>{entries}</li>);

  const onClickDay = (date) => {
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
    setYear(date.getFullYear());
    const getEntries = async () => {
      const res = await fetch(``);
      const entrie = await res.json();
      setEntries(entrie.entrie);
    };
    getEntries();
  };

  return (
    <div className="">
      <Hero heading="What's up for today" />
      <div className="w-full p-8 flex justify-around">
        <Calendar
          onChange={onChange}
          value={date}
          locale="ja-JA"
          onClickDay={onClickDay}
        />
        <div>
          <h2 className="text-2xl">
            {date.toLocaleString().slice(0, 10)}, <Time />
          </h2>
          <div>{entrieList}</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
