import React, { ReactElement, useRef, useEffect } from 'react';
import './alarm.scss';

interface openAlarmProps {
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}
const alarm = ({ setOpenAlarm }: openAlarmProps): ReactElement => {
  const outOfAlarmModal: any = useRef();

  const closeAlarmModal = (e: any) => {
    if (outOfAlarmModal.current && !outOfAlarmModal.current.contains(e.target)) {
      setOpenAlarm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeAlarmModal);
    return () => document.removeEventListener('mousedown', closeAlarmModal);
  }, []);
  return (
    <div className="alarm-modal-total-view-port" ref={outOfAlarmModal}>
      <div className="alarm-modal-inner-wrapper">
        <div className="alarm-modal-content-wrapper"></div>
      </div>
    </div>
  );
};

export default alarm;
