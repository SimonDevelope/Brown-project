import React, { ReactNode } from 'react';
import Menubar from '../menubar/menubar';
import RightMenu from './rightmenu/rightmenu';
import './header.scss';
interface openModalProps {
  onMenuBar: () => void;
  children?: ReactNode;
}
const header: React.FC<openModalProps> = ({ onMenuBar }: openModalProps) => {
  return (
    <div className="header-total-wrapper">
      <div className="header-total-inner-wrpaper">
        <Menubar onClick={onMenuBar} />
        <RightMenu />
      </div>
    </div>
  );
};

export default header;
