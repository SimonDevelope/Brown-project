import React, { ReactElement, useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import MenuModal from '../modal/menubar/menubar';
import AddCounter from '../modal/addcounter/addcounter';
import Alarm from '../modal/alarm/alarm';
import Footer from '../footer/footer';
import './home.scss';
import { useToggleMenubarModal } from '../../stores/utilContext';

interface openModalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuBar: boolean;
  openAlarm: boolean;
}

const home = (): ReactElement => {
  const [addCounter, setAddCounter] = useState<boolean>(false);
  const { openMenuBar, setOpenMenuBar, openAlarm, setOpenAlarm }: openModalProps = useToggleMenubarModal();
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
