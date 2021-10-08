import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Header from '../../../header/header';
import UnderHeader from '../../../header/underheader/underheader';
import Alarm from '../../../modal/alarm/alarm';
import MenuModal from '../../../modal/menubar/menubar';
import { useToggleMenubarModal } from '../../../../stores/utilContext';
import Axios from 'axios';
import './signup.scss';
import { RouteComponentProps } from 'react-router';

const signup = ({ history }: RouteComponentProps): ReactElement => {
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

  //로그인 정보
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

  //password 확인버튼

  // input 정보 검사를 위한 refer
  const englishCheck = /[a-z]/gi;
  const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi;
  const numberCheck = /[0-9]/g;
  const specialWordCheck = /[-_`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
  const whiteSpace = /[\s]/gi;

  const emailChecker = () => {
    if (email.length < 5 || email.length > 20) {
      if (email.search(whiteSpace) !== -1 || email.search(koreanCheck) !== -1) {
        return true;
      } else if (email.length === 0) {
        return false;
      }
      return true;
    } else if (email.search(whiteSpace) === -1 && email.search(koreanCheck) === -1) {
      return false;
    }
  };
  const passWordChecker = () => {
    if (password.length < 10 || password.length > 20) {
      if (password.length === 0) {
        return false;
      } else {
        return true;
      }
    } else if (password.length >= 10 || password.length <= 20) {
      if (password.search(whiteSpace) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  };

  const pswWithChpswChecker = () => {
    if (password.length > 0 && checkpsw.length > 0) {
      if (password !== checkpsw) {
        return true;
      } else if (password === checkpsw) {
        return false;
      }
    } else {
      return false;
    }
  };

  const nameChecker = () => {
    if (name.length > 0) {
      if (
        name.search(whiteSpace) !== -1 ||
        name.search(specialWordCheck) !== -1 ||
        name.search(englishCheck) !== -1 ||
        name.search(numberCheck) !== -1
      ) {
        return true;
      } else if (name.search(koreanCheck) !== -1) {
        return false;
      }
    } else if (name.length === 0) {
      return false;
    }
  };

  const phoneNumberChecker = () => {
    if (phoneNum.length > 0) {
      if (
        phoneNum.search(whiteSpace) !== -1 ||
        phoneNum.search(koreanCheck) !== -1 ||
        phoneNum.search(specialWordCheck) !== -1 ||
        phoneNum.search(englishCheck) !== -1
      ) {
        return true;
      } else if (phoneNum.search(numberCheck) !== -1) {
        return false;
      }
    } else if (phoneNum.length === 0) {
      return false;
    }
  };

  const buttonActivation = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      checkpsw.length === 0 ||
      name.length === 0 ||
      phoneNum.length === 0
    ) {
      return false;
    } else {
      if (
        emailChecker() === true ||
        passWordChecker() === true ||
        pswWithChpswChecker() === true ||
        nameChecker() === true ||
        phoneNumberChecker() === true
      ) {
        return false;
      }
      return true;
    }
  };
  //

  const submitLoginData: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const onSubmitData = await Axios.post('http://localhost:4000//signupinfo/insertInfo', {
      email: inputValue.email,
      password: inputValue.password,
      checkpsw: inputValue.checkpsw,
      name: inputValue.name,
      phoneNum: inputValue.phoneNum,
    });
    if (onSubmitData.status === 201) {
      alert('회원가입이 완료되었습니다. 로그인을 진행해주세요.');
      history.push('/login');
    } else if (onSubmitData.status !== 201) {
      alert('회원가입에 실패하셨습니다. 다시 시도해 주세요.');
    }
  };

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
          <form className="signup-form-wrapper">
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
            <div className={emailChecker() ? 'signup-check-id-attr' : 'signup-check-id-hidden-attr'}>
              아이디는 공백과 한글을 제외한 5이상 20자리만 사용 가능합니다.
            </div>
            <div className="signup-form-common-print">비밀번호</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type="password"
                name="password"
                onChange={onChange}
                value={password}
                autoComplete="off"
              />
            </div>
            <div className="signup-common-summative-information-attr">
              <div
                className={
                  passWordChecker() ? 'signup-password-information-attr' : 'signup-password-information-hidden-attr'
                }
              >
                비밀번호는 공백을 제외한 10자리 이상 20자리 이하만 사용 가능합니다.
              </div>
            </div>
            <div className="signup-form-common-print">비밀번호 확인</div>
            <div className="signup-form-common-input-wrapper">
              <input
                className="signup-form-input-common-attr"
                type="password"
                name="checkpsw"
                onChange={onChange}
                value={checkpsw}
                autoComplete="off"
              />
            </div>
            <div className="signup-common-summative-information-attr">
              <div className="signup-check-password-attr">
                {pswWithChpswChecker() ? '입력하신 비밀번호와 다릅니다.' : ''}
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
            <div className="signup-checkNumEng-attr">{nameChecker() ? '이름은 한글만 가능합니다.' : ''}</div>
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
                phoneNumberChecker()
                  ? 'signup-check-phonenumber-information-attr'
                  : 'signup-check-phonenumber-information-hidden-attr'
              }
            >
              전화번호는 하이픈(특수기호)과 공백을 제외한 숫자만 입력해주세요.
            </div>
          </form>
          <div className="signup-submit-button-wrapper">
            <button
              className={
                buttonActivation() ? 'signup-activation-sumit-button-attr' : 'signup-deactivation-sumit-button-attr'
              }
              onClick={submitLoginData}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
