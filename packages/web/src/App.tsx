import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import Schedule from './components/Routers/schedule/schedule';
import Notice from './components/Routers/notice/notice';
import Word from './components/Routers/word/word';
import Login from './components/Routers/login/login';
import Find from './components/Routers/login/findid/findid';
import './components/style/reset.scss';
import './components/style/app.scss';

function App() {
  return (
    <div className="total-view-port">
      <Route path="/" component={Home} exact />
      <Route path="/schedule" component={Schedule} />
      <Route path="/notice" component={Notice} />
      <Route path="/word" component={Word} />
      <Route path="/login" component={Login} />
      <Route path="/FindId" component={Find} />
    </div>
  );
}

export default App;
