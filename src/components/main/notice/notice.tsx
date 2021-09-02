import React, { ReactElement } from 'react';
import './notice.scss';
require('dotenv').config();
console.log(process.env.REACT_APP_KAKAOMAP_API);
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
