import React, { ReactElement, useCallback, useEffect, useState, useRef } from 'react';
import './calendar.scss';

export const CalendarFunction = () => {
  const NAME_OF_DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const pointToday: any = useRef();

  const [dates, setDates] = useState<number[]>([]);
  const [years, setYears] = useState<number>(year);
  const [months, setMonths] = useState<number>(month);
  const [today, setToday] = useState<number>(0);

  const settingMonths = (years: number, months: number) => {
    const thisMonthFirstDay = new Date(years, months - 1, 1);

    const lastMonthLastDay = new Date(years, months - 1, 0);

    const thisMonthLastDay = new Date(years, months, 0);

    const date = [];
    if (thisMonthFirstDay.getDay() !== 0) {
      for (let i = 0; i < thisMonthFirstDay.getDay(); i++) {
        date.unshift(lastMonthLastDay.getDate() - i);
      }
    }
    for (let i = 1; i <= thisMonthLastDay.getDate(); i++) {
      date.push(i);
    }
    for (let i = 1; i <= 6 - thisMonthLastDay.getDay(); i++) {
      date.push(i);
    }
    setDates([...date]);
  };
  useEffect(() => {
    settingMonths(years, months);
    return () => {
      settingMonths(years, months);
    };
  }, [years, months]);

  const onPrevMonth: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setMonths(months - 1);
    setYears(years);
    settingMonths(years, months);
  }, [months, years]);

  const onNextMonth: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setMonths(months + 1);
    setYears(years);
    settingMonths(years, months);
  }, [months, years]);

  const findToday = dates.indexOf(today);

  const MoveToToday = useCallback(() => {
    const Today = new Date().getDate();
    const checkMonth = new Date().getMonth() + 1;
    setMonths(checkMonth);
    setToday(Today);
  }, []);

  return (
    <div className="calendar-content-view-port">
      <div className="calendar-content-header-wrapper">
        <div className="calender-content-header-month">
          <div>{`${years}년`}</div>
          &nbsp;
          <div>{`${months}월`}</div>
        </div>
        <div className="calendar-content-header-button-wrapper">
          <button onClick={onPrevMonth} className="calendar-content-header-button-common-attr">{`<`}</button>
          <div className="calendar-content-move-button-wrapper">
            <div>{`${months}월`}</div>
          </div>
          <button onClick={onNextMonth} className="calendar-content-header-button-common-attr">{`>`}</button>
          <button onClick={MoveToToday} className="calendar-content-header-today-button-common-attr">
            Today
          </button>
        </div>
      </div>
      <div className="calendar-partition-attr"></div>
      <div className="calendar-contents-wrapper">
        <div className="calendar-content-dates-wrapper">
          {NAME_OF_DAY.map((content, index) => {
            return (
              <div key={index} className="calendar-content-dates-inner-attr">
                {content}
              </div>
            );
          })}
        </div>
        <div className="calendar-content-number-wrapper">
          {dates.map((calendarList, index) => {
            if (findToday === index && month === months && findToday) {
              return (
                <button key={index} className="calendar-content-today-number-outter-attr">
                  <div className="calendar-content-today-number">
                    <span className="calendar-content-today-number-attr">{calendarList}</span>
                  </div>
                </button>
              );
            } else {
              return (
                <button key={index} ref={pointToday} className="calendar-content-number-inner-wrapper">
                  <div className="calendar-content-number-common-attr">{calendarList}</div>
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const calendar = (): ReactElement => {
  return (
    <div className="calendar-total-view-wrapper">
      <div className="calendar-subject">
        <span className="calendar-subject-attr">Calendar</span>
      </div>
      <div className="calendar-main-port">
        <CalendarFunction />
      </div>
    </div>
  );
};

export default calendar;
