import React, { ReactElement, useCallback } from 'react';
import './rightmenu.scss';
import { BellIcon } from '../../svg/svg';

interface openAlarmProps {
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}

const rightmenu = ({ setOpenAlarm }: openAlarmProps): ReactElement => {
  const openAlarm: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setOpenAlarm((openAlarm) => !openAlarm);
  }, [setOpenAlarm]);

  return (
    <div className="bell-button-wrapper">
      <button className="bell-button-attr" onClick={openAlarm}>
        <BellIcon />
      </button>
    </div>
  );
};

export default rightmenu;
