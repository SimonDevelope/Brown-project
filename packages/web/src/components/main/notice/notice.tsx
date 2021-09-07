import React, { ReactElement } from 'react';
import './notice.scss';

const notice = (): ReactElement => {
  return (
    <div className="notice-total-view-port">
      <div className="notice-subject-wrapper">
        <span className="notice-subject-attr">📮</span>
      </div>
      <div className="notice-content-outter-wrapper"></div>
    </div>
  );
};

export default notice;
