import React, { useState } from 'react';
import Header from '../header/header';
import MenuModal from '../modal/menubar/menubar';
import './home.scss';

const home: React.FC = () => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
  const onMenuBar = () => {
    setOpenMenuBar((openMenuBar) => !openMenuBar);
  };
  return (
    <div className="home-total-view-port">
      <Header onMenuBar={onMenuBar} />
      {openMenuBar ? '' : <MenuModal />}
    </div>
  );
};

export default home;
