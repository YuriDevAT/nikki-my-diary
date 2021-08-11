import React, { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderView = () => {
  const [date, setDate] = useState(new Date());
  const dateFormat = new Date();

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <header className="py-4">
        <h1 className="text-center text-3xl">What's up for today</h1>
      </header>
      <div className="w-full p-8 flex justify-around">
        <Calender onChange={onChange} value={date} locale="ja-JA" />
        <div>
          <h2 className="text-2xl">{dateFormat.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default CalenderView;
