import React, { ReactElement, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon } from '../../svg/svg';
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

  const closeMenu: React.MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    setOpenMenuBar(false);
  }, [setOpenMenuBar]);

  return (
    <div className="menubar-show-side-slide-bar" ref={outOfMenubarModal}>
      <div className="menubar-modal-hamburger-button-wrapper">
        <button className="hamburger-button-attr" onClick={onMenu}>
          <CloseIcon />
        </button>
      </div>
      <div className="menubar-modal-total-inner-view-port">
        <div className="menubar-modal-content-wrapper">
          <div className="menubar-modal-content-common-attr">
            <Link to="/" className="menubar-modal-router-link-common-attr" onClick={closeMenu}>
              홈
            </Link>
          </div>
          <div className="menubar-modal-content-common-attr">
            <Link to="/word" className="menubar-modal-router-link-common-attr" onClick={closeMenu}>
              단어
            </Link>
          </div>
          <div className="menubar-modal-content-common-attr">
            <Link to="/schedule" className="menubar-modal-router-link-common-attr" onClick={closeMenu}>
              스케쥴
            </Link>
          </div>
          <div className="menubar-modal-content-common-attr">
            <Link to="/notice" className="menubar-modal-router-link-common-attr" onClick={closeMenu}>
              공지사항
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menubarModal;
