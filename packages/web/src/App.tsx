import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import Schedule from './components/Routers/schedule/schedule';
import Notice from './components/Routers/notice/notice';
import Word from './components/Routers/word/word';
import Login from './components/Routers/login/login';
import Find from './components/Routers/login/findid/findid';
import SignUp from './components/Routers/login/makeid/signup';
import { BrowserRouter } from 'react-router-dom';
import './components/style/reset.scss';
import './components/style/app.scss';

function App() {
  return (
    <div className="total-view-port">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/schedule" component={Schedule} />
        <Route path="/notice" component={Notice} />
        <Route path="/word" component={Word} />
        <Route path="/login" component={Login} />
        <Route path="/findId" component={Find} />
        <Route path="/signUp" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
