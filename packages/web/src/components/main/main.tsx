import React from 'react';
import Calendar from './calendar/calendar';
import CountingTime from './countingtime/countingtime';
import Notice from './notice/notice';
import Map from './map/mapofnear';
import './main.scss';

interface addCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
}
const main = ({ setAddCounter }: addCounterProps) => {
  return (
    <div className="main-total-view-port">
      <Calendar />
      <CountingTime setAddCounter={setAddCounter} />
      <Notice />
      <Map />
    </div>
  );
};

export default main;
