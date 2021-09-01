import React, { ReactElement, useCallback } from 'react';

import './countingtime.scss';

interface addCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
}

const countingtime = ({ setAddCounter }: addCounterProps): ReactElement => {
  const openAddUniversityCounter = useCallback(() => {
    setAddCounter((addCounter) => !addCounter);
    window.scrollTo({ top: 351 });
  }, [setAddCounter]);

  return (
    <div className="counting-time-total-view-port">
      <div className="counting-time-subject-wrapper">
        <span className="counting-time-subject-attr">⏱</span>
      </div>
      <div className="counting-time-content-outter-wrapper">
        <div className="counting-time-add-university">
          <div className="counting-time-add-button-wrapper">
            <button className="counting-time-add-button-attr" onClick={openAddUniversityCounter}>
              <span className="counting-time-add-button-inner-attr">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default countingtime;
