import React, { ReactElement, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import MenuModal from '../modal/menubar/menubar';
import AddCounter from '../modal/addcounter/addcounter';
import './home.scss';

const home = (): ReactElement => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
  const [addCounter, setAddCounter] = useState<boolean>(false);

  return (
    <div className="home-total-view-port">
      <Header setOpenMenuBar={setOpenMenuBar} />
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      {addCounter ? <AddCounter setAddCounter={setAddCounter} addCounter={addCounter} /> : ''}
      <Main setAddCounter={setAddCounter} />
    </div>
  );
};

export default home;
