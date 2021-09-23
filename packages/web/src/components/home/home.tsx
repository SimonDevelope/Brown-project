import React, { ReactElement, useState, useRef, useEffect, useCallback } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import MenuModal from '../modal/menubar/menubar';
import AddCounter from '../modal/addcounter/addcounter';
import Alarm from '../modal/alarm/alarm';
import Footer from '../footer/footer';
import UnderHeader from '../header/underheader/underheader';
import './home.scss';
import { useToggleMenubarModal } from '../../stores/utilContext';

interface openModalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeHeader: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuBar: boolean;
  openAlarm: boolean;
  changeHeader: boolean;
}

const home = (): ReactElement => {
  const [addCounter, setAddCounter] = useState<boolean>(false);
  const { openMenuBar, setOpenMenuBar, openAlarm, setOpenAlarm, setChangeHeader, changeHeader }: openModalProps =
    useToggleMenubarModal();

  const loader: any = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (!target.isInteresting) {
      setChangeHeader((changeHeader) => !changeHeader);
    }
  }, []);
  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.8,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
      console.log(loader.current);
    }
    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="home-total-view-port">
      {changeHeader ? (
        <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
      ) : (
        <UnderHeader setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
      )}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      {addCounter ? <AddCounter setAddCounter={setAddCounter} addCounter={addCounter} /> : ''}
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      <Main setAddCounter={setAddCounter} loader={loader} />
      <div className="home-partition-attr"></div>
      <Footer />
    </div>
  );
};

export default home;
