import React, { useState } from "react";
import Calender from "react-calendar";

const CalenderView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="Sample">
      <header className="">
        <h1>Calender</h1>
      </header>
      <div className="Sample container">
        <div className="Sample container content">
          <Calender
            onChange={onChange}
            showWeekNumbers
            value={date}
            className=""
            locale="ja-JA"
          />
        </div>
      </div>
    </div>
  );
};

export default CalenderView;
