import React from 'react';
import { useToggleMenubarModal } from '../../../stores/utilContext';
import Header from '../../header/header';
import Alarm from '../../modal/alarm/alarm';
import MenuModal from '../../modal/menubar/menubar';
import './notice.scss';

const notice = () => {
  const { openAlarm, openMenuBar, setOpenAlarm, setOpenMenuBar } = useToggleMenubarModal();
  return (
    <>
      <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      <div className="notice-main-total-view-port">
        <div className="notice-chart-view-port"></div>
      </div>
    </>
  );
};

export default notice;
