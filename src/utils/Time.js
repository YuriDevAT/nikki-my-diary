import React, { useState, useEffect } from 'react';

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return <>{time.toLocaleTimeString()}</>;
}
