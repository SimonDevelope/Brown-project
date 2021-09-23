import React, { ReactElement } from 'react';
import CalendarFunction from './utils/calendarFunction';
import './calendar.scss';

interface trackerProps {
  loader: any;
}
const calendar = ({ loader }: trackerProps): ReactElement => {
  return (
    <div className="calendar-total-view-wrapper" ref={loader}>
      <div className="calendar-subject">
        <span className="calendar-subject-attr">🗓</span>
      </div>
      <div className="calendar-main-port">
        <CalendarFunction />
      </div>
    </div>
  );
};

export default calendar;
