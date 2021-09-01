import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { CloseIcon } from '../../svg/svg';
import './addcounter.scss';

interface setAddCounterProps {
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
  addCounter: boolean;
}

const addCounter = ({ setAddCounter, addCounter }: setAddCounterProps): ReactElement => {
  const outOfModalArea: any = useRef();

  const closedByIcon: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setAddCounter((addCounter) => !addCounter);
  }, [setAddCounter]);

  const closeAddCounterModal = (e: any) => {
    if (outOfModalArea.current && !outOfModalArea.current.contains(e.target)) {
      setAddCounter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeAddCounterModal);
    if (addCounter === true) {
      document.body.style.cssText = `
        overflow-y: hidden;
        `;
    }
    return () => {
      document.removeEventListener('mousedown', closeAddCounterModal);
      document.body.style.cssText = `
    overflow-y: scroll
    `;
    };
  });

  return (
    <div className="add-counter-modal-total-view-port">
      <div className="add-counter-modal-outter-wrapper">
        <div className="add-counter-modal-inner-wrapper" ref={outOfModalArea}>
          <div className="close-icon-button-outter-wrapper">
            <button className="close-icon-button-attr" onClick={closedByIcon}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addCounter;
