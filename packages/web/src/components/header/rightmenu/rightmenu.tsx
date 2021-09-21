import React, { ReactElement, useCallback } from 'react';
import './rightmenu.scss';
import { BellIcon } from '../../svg/svg';
import { Link } from 'react-router-dom';

interface openAlarmProps {
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}

const rightmenu = ({ setOpenAlarm }: openAlarmProps): ReactElement => {
  const openAlarm: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setOpenAlarm((openAlarm) => !openAlarm);
  }, [setOpenAlarm]);

  return (
    <div className="right-menu-button-wrapper">
      <button className="login-button-attr">
        <Link to="/login" className="login-router-link-attr">
          <span>로그인</span>
        </Link>
      </button>
      <button className="bell-button-attr" onClick={openAlarm}>
        <BellIcon />
      </button>
    </div>
  );
};

export default rightmenu;
