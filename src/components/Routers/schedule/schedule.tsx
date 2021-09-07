import React from 'react';
import { useToggleMenubarModal } from '../../../stores/utilContext';
import Header from '../../header/header';
import Calendar from '../../main/calendar/calendar';
import Alarm from '../../modal/alarm/alarm';
import MenuModal from '../../modal/menubar/menubar';

const noticeRouter = () => {
  const { openAlarm, openMenuBar, setOpenAlarm, setOpenMenuBar } = useToggleMenubarModal();
  return (
    <>
      <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      <Calendar />
    </>
  );
};

export default noticeRouter;
