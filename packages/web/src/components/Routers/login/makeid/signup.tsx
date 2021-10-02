import React, { ReactElement, useEffect, useRef } from 'react';
import Header from '../../../header/header';
import UnderHeader from '../../../header/underheader/underheader';
import Alarm from '../../../modal/alarm/alarm';
import MenuModal from '../../../modal/menubar/menubar';
import { useToggleMenubarModal } from '../../../../stores/utilContext';
import './signup.scss';

const signup = (): ReactElement => {
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
    <div className="signup-total-header-view-port">
      <div className="signup-header-total-outter-wrapper" ref={loader}>
        {changeHeader ? (
          <UnderHeader setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        ) : (
          <Header setOpenMenuBar={setOpenMenuBar} setOpenAlarm={setOpenAlarm} />
        )}
      </div>
      {openAlarm ? <Alarm setOpenAlarm={setOpenAlarm} /> : ''}
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}

      <div className="signup-total-view-port">
        <div className="signup-putting-view-port">
          <div className="signup-subject-attr">회원가입</div>
          <div className="signup-subtitle-attr">가입정보 입력</div>
          <div className="signup-partition-attr"></div>
          <div className="signup-form-wrapper">
            <div></div>
            <div>
              <input className="signup-form-input-common-attr" />
            </div>
            <div></div>
            <div>
              <input className="signup-form-input-common-attr" />
            </div>
            <div></div>
            <div>
              <input className="signup-form-input-common-attr" />
            </div>
            <div></div>
            <div>
              <input className="signup-form-input-common-attr" />
            </div>
            <div></div>
            <div>
              <input className="signup-form-input-common-attr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
