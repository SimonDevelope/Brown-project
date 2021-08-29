import React, { ReactElement } from 'react';
import './menubar.scss';
import { HamburgerIcon } from '../svg/svg';

const menubar = (): ReactElement => {
  return (
    <div className="menubar-total-view-port">
      <button className="hamburger-button-icon">
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default menubar;
