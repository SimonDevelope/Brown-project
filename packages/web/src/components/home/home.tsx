import React, { ReactElement, useRef, useEffect } from 'react';
import Header from '../header/header';
import FrontDesk from './frontdesk/frontdesk';
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
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
  openMenuBar: boolean;
  openAlarm: boolean;
  changeHeader: boolean;
  addCounter: boolean;
  handleObserver: (entries: any) => void;
}

const home = (): ReactElement => {
  const {
    openMenuBar,
    setOpenMenuBar,
    openAlarm,
    setOpenAlarm,
    changeHeader,
    addCounter,
    setAddCounter,
    handleObserver,
  }: openModalProps = useToggleMenubarModal();

  const loader: any = useRef();

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="home-total-view-port">
      <div className="home-header-total-outter-warpper" ref={loader}>
        {changeHeader ? (
          <UnderHeader setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        ) : (
          <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        )}
      </div>
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      {addCounter ? <AddCounter setAddCounter={setAddCounter} addCounter={addCounter} /> : ''}
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      <FrontDesk />
      <Main setAddCounter={setAddCounter} />
      <div className="home-partition-attr"></div>
      <Footer />
    </div>
  );
};

export default home;
