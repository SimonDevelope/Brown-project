import React from 'react';
import Time from '../../utils/clock/time';
import './frontdesk.scss';

const frontdesk = () => {
  return (
    <div className="frontdesk-total-view-port">
      <div className="frontdesk-content-outter-wrapper">
        <div className="frontdesk-time-hospitality-word-wrapper">
          <div className="frontdesk-time-zone-outter-wrapper">
            <Time />
          </div>
          <div className="frontdesk-hospitality-word">
            <span>안녕하세요, simon님</span>
          </div>
          <div className="frontdesk-weather-zone-outter-wrapper"></div>
        </div>
        <div className="frontdesk-simple-todolist-area">
          <div className="frontdesk-simple-todolist-inner-wrapper">
            <span className="frontdesk-simple-todolist-subject">오늘 계획은 어떻게 되시나요?</span>
          </div>
          <input className="frontdesk-simple-todolist-input-area" />
        </div>
      </div>
    </div>
  );
};

export default frontdesk;
