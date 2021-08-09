import React, { useState } from "react";
import Calender from "react-calendar";

const CalenderView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <header className="">
        <h1>Calender</h1>
      </header>
      <div className="sm:w-1/2 h-96 shadow-md p-8 rounded-md">
        <Calender
          onChange={onChange}
          value={date}
          className=""
          locale="ja-JA"
        />
      </div>
    </div>
  );
};

export default CalenderView;
