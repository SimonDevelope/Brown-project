import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../../header/header';
import UnderHeader from '../../../header/underheader/underheader';
import Alarm from '../../../modal/alarm/alarm';
import MenuModal from '../../../modal/menubar/menubar';
import { useToggleMenubarModal } from '../../../../stores/utilContext';
// import Axios from 'axios';
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

  const { email, password, checkpsw, name, phoneNum } = inputValue;

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const [appearToggle, setAppearToggle] = useState<boolean>(false);
  const [pswAppearToggle, setPswAppearToggle] = useState<boolean>(false);

  const changeInputType: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setAppearToggle((appearToggle) => !appearToggle);
  }, [appearToggle]);

  const changPswInputType: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setPswAppearToggle((pswAppearToggle) => !pswAppearToggle);
  }, [pswAppearToggle]);

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

  // input 정보 검사를 위한 refer
  const checkEng = name.search(/[a-z]/gi);
  const idEngCheck = email.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi);
  // const checkNum = phoneNum.search(/[0-9]/g);
  const checkPhoneNum = phoneNum.search(/[-_`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  console.log(idEngCheck, checkPhoneNum);
  console.log(checkPhoneNum);
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
              <input
                className="signup-form-input-common-attr"
                name="email"
                onChange={onChange}
                value={email}
                autoComplete="off"
              />
            </div>
            <div
              className={
                email.length > 7 || email.length === 0
                  ? idEngCheck === -1
                    ? 'signup-check-id-hidden-attr'
                    : 'signup-check-id-attr'
                  : email.length < 8 && email.length >= 1
                  ? 'signup-check-id-attr'
                  : 'sighup-check-hidden-attr'
              }
            >
              아이디를 다시 확인해주세요.
            </div>
            <div className="signup-form-common-print">비밀번호</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type={appearToggle ? 'text' : 'password'}
                name="password"
                onChange={onChange}
                value={password}
                autoComplete="off"
              />
            </div>
            <div className="signup-common-summative-information-attr">
              {password.length >= 1 ? (
                <button onClick={changeInputType} className="signup-password-show-toggle-button">{`${
                  appearToggle ? 'disappear' : 'appear'
                }`}</button>
              ) : (
                ''
              )}
              <div
                className={
                  password.length === 0
                    ? 'signup-password-information-hidden-attr'
                    : password.length >= 10 && password.length <= 20
                    ? 'signup-password-information-hidden-attr'
                    : 'signup-password-information-attr'
                }
              >
                비밀번호는 10자리 이상 20자리 이하로 하셔야 합니다.
              </div>
            </div>
            <div className="signup-form-common-print">비밀번호 확인</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type={pswAppearToggle ? 'text' : 'password'}
                name="checkpsw"
                onChange={onChange}
                value={checkpsw}
                autoComplete="off"
              />
            </div>
            <div className="signup-common-summative-information-attr">
              {checkpsw.length >= 1 ? (
                <button onClick={changPswInputType} className="signup-password-show-toggle-button">{`${
                  pswAppearToggle ? 'disappear' : 'appear'
                }`}</button>
              ) : (
                ''
              )}
              <div className="signup-check-password-attr">
                {password !== checkpsw ? '비밀번호와 일치하지 않습니다' : ''}
              </div>
            </div>
            <div className="signup-form-common-print">이름</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                name="name"
                onChange={onChange}
                value={name}
                autoComplete="off"
              />
            </div>
            <div className="signup-checkNumEng-attr">{checkEng !== -1 ? '이름은 한글만 가능합니다.' : ''}</div>
            <div className="signup-form-common-print">핸드폰 번호</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                name="phoneNum"
                onChange={onChange}
                value={phoneNum}
                autoComplete="off"
              />
            </div>
            <div
              className={
                checkPhoneNum !== -1
                  ? 'signup-check-phonenumber-information-attr'
                  : 'signup-check-phonenumber-information-hidden-attr'
              }
            >
              전화번호는 하이픈(특수기호)을 제외하고 입력해주세요.
            </div>
          </div>
          <div className="signup-submit-button-wrapper">
            <button className="signup-deactivation-sumit-button-attr">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
