import React, { createContext, useState, useContext } from 'react';

interface ToggleMenuBarModalStateProps {
  openMenuBar: boolean;
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  openAlarm: boolean;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  changeHeader: boolean;
  setChangeHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMenuBarModal = createContext<ToggleMenuBarModalStateProps>({
  openMenuBar: false,
  setOpenMenuBar: () => {},
  openAlarm: false,
  setOpenAlarm: () => {},
  changeHeader: false,
  setChangeHeader: () => {},
});
interface ToggleMenuBarModalProps {
  children: React.ReactNode;
}

const ToggleMenuBarModalProvider = ({ children }: ToggleMenuBarModalProps) => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);
  const [changeHeader, setChangeHeader] = useState<boolean>(false);

  return (
    <ToggleMenuBarModal.Provider
      value={{ openMenuBar, openAlarm, setOpenMenuBar, setOpenAlarm, changeHeader, setChangeHeader }}
    >
      {children}
    </ToggleMenuBarModal.Provider>
  );
};

const useToggleMenubarModal = () => useContext(ToggleMenuBarModal);

export { ToggleMenuBarModalProvider, useToggleMenubarModal };
