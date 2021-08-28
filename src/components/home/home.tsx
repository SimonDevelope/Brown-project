import React, { useState } from 'react';
import Header from '../header/header';
import MenuModal from '../modal/menubar/menubar';
import './home.scss';

const home: React.FC = () => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);

  return (
    <div className="home-total-view-port">
      <Header setOpenMenuBar={setOpenMenuBar} />
      {openMenuBar ? <MenuModal setOpenMenuBar={setOpenMenuBar} /> : ''}
    </div>
  );
};

export default home;
