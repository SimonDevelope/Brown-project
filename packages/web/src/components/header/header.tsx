import React, { ReactElement } from 'react';
import Menubar from '../menubar/menubar';
import RightMenu from './rightmenu/rightmenu';
import './header.scss';
export interface openModalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}

const header = ({ setOpenMenuBar, setOpenAlarm }: openModalProps): ReactElement => {
  const onMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpenMenuBar((openMenuBar) => !openMenuBar);
  };
  return (
    <div className="header-total-wrapper">
      <div className="header-total-inner-wrpaper">
        <button className="header-icon-button-common-attr" onClick={onMenu}>
          <Menubar />
        </button>
        <button className="header-icon-button-common-attr">
          <RightMenu setOpenAlarm={setOpenAlarm} />
        </button>
      </div>
    </div>
  );
};

export default header;
