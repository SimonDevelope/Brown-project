import React, { ReactElement } from 'react';
import './menubar.scss';
import { HamburgerIcon } from '../svg/svg';
interface openMenuBarProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const menubar = ({ setOpenMenuBar }: openMenuBarProps): ReactElement => {
  const onMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpenMenuBar((openMenuBar) => !openMenuBar);
  };
  return (
    <div className="menubar-total-view-port">
      <button className="hamburger-button-icon" onClick={onMenu}>
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default menubar;
