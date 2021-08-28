import React from 'react';
import './menubar.scss';
import { HamburgerIcon } from '../svg/svg';

const menubar: React.FC = () => {
  return (
    <div className="menubar-total-view-port">
      <button className="hamburger-button-icon">
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default menubar;
