import React, { ReactElement, useEffect, useRef } from 'react';
import { useToggleMenubarModal } from '../../../stores/utilContext';
import Header from '../../header/header';
import Alarm from '../../modal/alarm/alarm';
import MenuModal from '../../modal/menubar/menubar';
import UnderHeader from '../../header/underheader/underheader';
import { Link } from 'react-router-dom';
import './login.scss';

const login = (): ReactElement => {
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
    <div className="login-total-view-port">
      <div className="login-header-total-outter-wrapper" ref={loader}>
        {changeHeader ? (
          <UnderHeader setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        ) : (
          <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        )}
      </div>
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}

      <div className="login-main-total-view-port">
        <div className="login-chart-view-port">
          <div className="login-chart-outter-wrapper">
            <div className="login-chart-inner-wrapper">
              <div className="login-subject-info-attr">
                <span>로그인</span>
              </div>
              <div className="login-input-area-attr">
                <input className="login-input-common-attr" placeholder="아이디" />
                <input className="login-input-common-attr" placeholder="비밀번호" />
                <button className="login-login-button-attr">
                  <span className="login-common-word-attr">로그인</span>
                </button>
                <button className="login-find-pw-id-attr">
                  <Link to="/FindId" className="login-pw-id-font-attr">
                    <span>아이디 | 비밀번호 찾기</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
