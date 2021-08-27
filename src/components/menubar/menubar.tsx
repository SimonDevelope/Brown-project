import React from 'react';
import './menubar.scss';

const menubar: React.FC = () => {
  return (
    <div className="menubar-total-view-port">
      <button className="hamberger-button-icon">
        <svg viewBox="0 0 24 24" className="hamberger-svg-attr">
          <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default menubar;
