import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let myInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return <>{time.toLocaleTimeString()}</>;
};

export default Time;
