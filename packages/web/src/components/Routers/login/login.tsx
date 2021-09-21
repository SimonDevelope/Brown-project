import React from 'react';
import { useToggleMenubarModal } from '../../../stores/utilContext';
import Header from '../../header/header';
import Alarm from '../../modal/alarm/alarm';
import MenuModal from '../../modal/menubar/menubar';
import { Link } from 'react-router-dom';
import './login.scss';

const login = () => {
  const { openAlarm, openMenuBar, setOpenAlarm, setOpenMenuBar } = useToggleMenubarModal();
  return (
    <>
      <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
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
    </>
  );
};

export default login;
