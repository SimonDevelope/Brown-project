import React, { ReactElement, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import MenuModal from '../modal/menubar/menubar';
import './home.scss';

const home = (): ReactElement => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);

  return (
    <div className="home-total-view-port">
      <Header setOpenMenuBar={setOpenMenuBar} />
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      <Main />
    </div>
  );
};

export default home;
