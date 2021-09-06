import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import Calendar from './components/main/calendar/calendar';
import Header from './components/header/header';
import './components/style/reset.scss';
import './components/style/app.scss';

interface HeaderProps {
  setOpenMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  return (
    <div className="total-view-port">
      <Route path="/" component={Home} exact />
      <Route
        path="/schedule"
        component={({ setOpenMenuBar, setOpenAlarm }: HeaderProps) => {
          return (
            <>
              <Header setOpenAlarm={setOpenAlarm} setOpenMenuBar={setOpenMenuBar} />
              <Calendar />
            </>
          );
        }}
        exact
      />
    </div>
  );
}

export default App;
