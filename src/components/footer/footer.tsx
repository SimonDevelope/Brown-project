import React, { ReactElement } from 'react';
import './footer.scss';

const footer = (): ReactElement => {
  return (
    <div className="footer-total-view-port">
      <div className="footer-total-inner-view-port">
        <div className="footer-inner-list"></div>
      </div>
    </div>
  );
};

export default footer;
