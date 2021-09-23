import React, { ReactElement } from 'react';
import Menubar from '../menubar/menubar';
import RightMenu from './rightmenu/rightmenu';
import './header.scss';

interface onModalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}

const header = ({ setOpenMenuBar, setOpenAlarm }: onModalProps): ReactElement => {
  return (
    <div className="header-total-wrapper">
      <div className="header-total-inner-wrapper">
        <div className="header-menubar-icon-common-attr">
          <Menubar setOpenMenuBar={setOpenMenuBar} />
        </div>
        <div className="header-right-menu-icon-common-attr">
          <RightMenu setOpenAlarm={setOpenAlarm} />
        </div>
      </div>
    </div>
  );
};

export default header;
