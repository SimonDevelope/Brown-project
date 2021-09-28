import React, { ReactElement, useEffect, useRef } from 'react';
import { useToggleMenubarModal } from '../../../stores/utilContext';
import Header from '../../header/header';
import UnderHeader from '../../header/underheader/underheader';
import Alarm from '../../modal/alarm/alarm';
import MenuModal from '../../modal/menubar/menubar';

import './notice.scss';

const notice = (): ReactElement => {
  const loader: any = useRef();
  const { openAlarm, openMenuBar, setOpenAlarm, setOpenMenuBar, changeHeader, handleObserver } =
    useToggleMenubarModal();

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
    <div className="notice-total-header-view-port">
      <div className="notice-header-total-outter-wrapper" ref={loader}>
        {changeHeader ? (
          <UnderHeader setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        ) : (
          <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        )}
      </div>
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
      <div className="notice-main-total-view-port">
        <div className="notice-chart-view-port"></div>
      </div>
    </div>
  );
};

export default notice;
