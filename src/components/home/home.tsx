import React, { ReactElement, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import MenuModal from '../modal/menubar/menubar';
import AddCounter from '../modal/addcounter/addcounter';
import Alarm from '../modal/alarm/alarm';
import Footer from '../footer/footer';
import './home.scss';

const home = (): ReactElement => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
  const [addCounter, setAddCounter] = useState<boolean>(false);
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);

  return (
    <div className="home-total-view-port">
      <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      {addCounter ? <AddCounter setAddCounter={setAddCounter} addCounter={addCounter} /> : ''}
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      <Main setAddCounter={setAddCounter} />
      <div className="home-partition-attr"></div>
      <Footer />
    </div>
  );
};

export default home;
