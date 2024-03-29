import React, { ReactElement } from 'react';
import { UnderMenubar } from '../../menubar/menubar';
import { UnderRightMenu } from '../rightmenu/rightmenu';
import './underheader.scss';

interface modalProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}
const underheader = ({ setOpenMenuBar, setOpenAlarm }: modalProps): ReactElement => {
  return (
    <div className="under-header-total-wrppaer">
      <div className="under-header-total-inner-wrapper">
        <div className="under-header-menubar-icon-common-attr">
          <UnderMenubar setOpenMenuBar={setOpenMenuBar} />
        </div>
        <div className="under-header-right-menu-icon-common-attr">
          <UnderRightMenu setOpenAlarm={setOpenAlarm} />
        </div>
      </div>
    </div>
  );
};

export default underheader;
