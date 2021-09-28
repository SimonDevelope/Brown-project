import React, { createContext, useState, useContext, useCallback } from 'react';

interface ToggleMenuBarModalStateProps {
  openMenuBar: boolean;
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  openAlarm: boolean;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  changeHeader: boolean;
  setChangeHeader: React.Dispatch<React.SetStateAction<boolean>>;
  addCounter: boolean;
  setAddCounter: React.Dispatch<React.SetStateAction<boolean>>;
  handleObserver: (entries: any) => void;
}

interface ToggleMenuBarModalProps {
  children: React.ReactNode;
}

const ToggleMenuBarModal = createContext<ToggleMenuBarModalStateProps>({
  openMenuBar: false,
  setOpenMenuBar: () => {},
  openAlarm: false,
  setOpenAlarm: () => {},
  changeHeader: false,
  setChangeHeader: () => {},
  addCounter: false,
  setAddCounter: () => {},
  handleObserver: () => {},
});

const ToggleMenuBarModalProvider = ({ children }: ToggleMenuBarModalProps) => {
  const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);
  const [changeHeader, setChangeHeader] = useState<boolean>(false);
  const [addCounter, setAddCounter] = useState<boolean>(false);

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting === true) {
      setChangeHeader(false);
    } else if (target.isIntersecting === false) {
      setChangeHeader((changeHeader) => !changeHeader);
    }
  }, []);

  return (
    <ToggleMenuBarModal.Provider
      value={{
        openMenuBar,
        openAlarm,
        setOpenMenuBar,
        setOpenAlarm,
        changeHeader,
        setChangeHeader,
        addCounter,
        setAddCounter,
        handleObserver,
      }}
    >
      {children}
    </ToggleMenuBarModal.Provider>
  );
};

const useToggleMenubarModal = () => useContext(ToggleMenuBarModal);

export { ToggleMenuBarModalProvider, useToggleMenubarModal };
