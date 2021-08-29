import React, { ReactElement } from 'react';
import './rightmenu.scss';
import { BellIcon } from '../../svg/svg';

const rightmenu = (): ReactElement => {
  return (
    <div className="bell-button-wrapper">
      <button className="bell-button-attr">
        <BellIcon />
      </button>
    </div>
  );
};

export default rightmenu;
