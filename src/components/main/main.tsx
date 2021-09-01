import React from 'react';
import Calendar from './calendar/calendar';
import CountingTime from './countingtime/countingtime';
import './main.scss';
interface addCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
}
const main = ({ setAddCounter }: addCounterProps) => {
  return (
    <div className="main-total-view-port">
      <Calendar />
      <CountingTime setAddCounter={setAddCounter} />
    </div>
  );
};

export default main;
