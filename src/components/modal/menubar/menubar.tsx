import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { HamburgerIcon } from '../../svg/svg';
import './menubar.scss';

interface onMenuProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const menubarModal = ({ setOpenMenuBar }: onMenuProps): ReactElement => {
  const outOfMenubarModal: any = useRef();

  const closeMenuBarModal = (e: any) => {
    if (outOfMenubarModal.current && !outOfMenubarModal.current.contains(e.target)) {
      setOpenMenuBar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', closeMenuBarModal);
    return () => document.removeEventListener('mousedown', closeMenuBarModal);
  }, []);

  const onMenu: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setOpenMenuBar((openMenuBar) => !openMenuBar);
  }, [setOpenMenuBar]);

  return (
    <div className="menubar-modal-total-view-port" ref={outOfMenubarModal}>
      <div className="menubar-modal-hamburger-button-wrapper">
        <button className="hamburger-button-attr" onClick={onMenu}>
          <HamburgerIcon />
        </button>
      </div>
      <div className="menubar-modal-total-inner-view-port">
        <div className="menubar-modal-content-wrapper">
          <div className="menubar-modal-content-common-attr">
            <a href="#" className="menubar-modal-a-attr">
              <span>홈</span>
            </a>
          </div>
          <div className="menubar-modal-content-common-attr">
            <a href="#" className="menubar-modal-a-attr">
              <span>단어</span>
            </a>
          </div>
          <div className="menubar-modal-content-common-attr">
            <a href="#" className="menubar-modal-a-attr">
              <span>스케줄</span>
            </a>
          </div>
          <div className="menubar-modal-content-common-attr">
            <a href="#" className="menubar-modal-a-attr">
              <span>공지사항</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menubarModal;
