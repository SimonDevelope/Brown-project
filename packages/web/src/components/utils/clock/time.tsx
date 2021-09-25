import React, { ReactElement, useEffect, useState } from 'react';
import './time.scss';

const time = (): ReactElement => {
  const day = new Date();

  const [dateTime, setDateTime] = useState({
    hours: day.getHours(),
    minutes: day.getMinutes(),
    seconds: day.getSeconds(),
  });

  useEffect(() => {
    const nowTime = setInterval(() => {
      const day = new Date();
      setDateTime({
        hours: day.getHours(),
        minutes: day.getMinutes(),
        seconds: day.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(nowTime);
  }, []);

  return (
    <div className="time-zone-outter-wrapper">
      <div className="time-hour-and-minute-wrapper">
        {`${dateTime.hours < 10 ? `0${dateTime.hours}` : `${dateTime.hours}`} : 
      ${dateTime.minutes < 10 ? `0${dateTime.minutes}` : `${dateTime.minutes}`}`}
      </div>
      <div className="time-second-wrapper">{`${
        dateTime.seconds < 10 ? `0${dateTime.seconds}` : `${dateTime.seconds}`
      }`}</div>
    </div>
  );
};

export default time;
