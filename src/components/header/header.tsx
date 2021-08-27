import React from 'react';
import Menubar from '../menubar/menubar';
import RightMenu from './rightmenu/rightmenu';
import './header.scss';

const header: React.FC = () => {
  return (
    <div className="header-total-wrapper">
      <Menubar />
      <RightMenu />
    </div>
  );
};

export default header;
