import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
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

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    checkpsw: '',
    name: '',
    phoneNum: '',
  });
  console.log(setInputValue, inputValue);
  // const { email, password, checkpsw, name, phoneNum } = inputValue;

  const [appearToggle, setAppearToggle] = useState<boolean>(false);

  const changeInputType: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setAppearToggle((appearToggle) => !appearToggle);
  }, [appearToggle]);

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
            <div className="signup-form-common-print">아이디(이메일주소)</div>
            <div className="signup-form-common-input-wrapper">
              <input className="signup-form-input-common-attr" name="email" />
            </div>
            <div></div>
            <div className="signup-form-psw-common-print">비밀번호</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type={appearToggle ? 'text' : 'password'}
                name="password"
              />
            </div>
            <button onClick={changeInputType} className="signup-password-show-toggle-button">{`${
              appearToggle ? 'appear' : 'disppaer'
            }`}</button>
            <div className="signup-form-psw-common-print">비밀번호 확인</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type={appearToggle ? 'text' : 'password'}
                name="checkpsw"
              />
            </div>
            <button onClick={changeInputType} className="signup-password-show-toggle-button">{`${
              appearToggle ? 'appear' : 'disppaer'
            }`}</button>
            <div className="signup-form-common-print">이름</div>
            <div className="signup-form-common-input-wrapper">
              <input className="signup-form-input-common-attr" name="name" />
            </div>
            <div></div>
            <div className="signup-form-common-print">핸드폰 번호</div>
            <div className="signup-form-common-input-wrapper">
              <input className="signup-form-input-common-attr" name="phoneNum" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
