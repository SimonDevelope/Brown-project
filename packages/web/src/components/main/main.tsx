import React, { ReactElement } from 'react';
import CountingTime from './countingtime/countingtime';
import Map from './map/mapofnear';
import './main.scss';

interface addCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
}
const main = ({ setAddCounter }: addCounterProps): ReactElement => {
  return (
    <div className="main-total-view-port">
      <CountingTime setAddCounter={setAddCounter} />
      <Map />
    </div>
  );
};

export default main;
