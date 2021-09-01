import React, { ReactElement, ReactNode } from 'react';
import Menubar from '../menubar/menubar';
import RightMenu from './rightmenu/rightmenu';
import './header.scss';
interface openModalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

const header = ({ setOpenMenuBar }: openModalProps): ReactElement => {
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
          <RightMenu />
        </button>
      </div>
    </div>
  );
};

export default header;
