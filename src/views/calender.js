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
      <header className="">
        <h1>Calender</h1>
      </header>
      <div className="w-full p-8 flex justify-around">
        <div className="shadow-lg">
          <Calender onChange={onChange} value={date} locale="ja-JA" />
        </div>
        <div>
          <h2>{dateFormat.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default CalenderView;
