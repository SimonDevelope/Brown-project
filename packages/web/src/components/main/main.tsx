import React, { ReactElement } from 'react';
import Calendar from './calendar/calendar';
import CountingTime from './countingtime/countingtime';
import Notice from './notice/notice';
import Map from './map/mapofnear';
import './main.scss';

interface addCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
  loader: any;
}
const main = ({ setAddCounter, loader }: addCounterProps): ReactElement => {
  return (
    <div className="main-total-view-port">
      <Calendar loader={loader} />
      <CountingTime setAddCounter={setAddCounter} />
      <Notice />
      <Map />
    </div>
  );
};

export default main;
