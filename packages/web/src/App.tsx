import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/home';
import Schedule from './components/Routers/schedule/schedule';
import './components/style/reset.scss';
import './components/style/app.scss';

function App() {
  return (
    <div className="total-view-port">
      <Route path="/" component={Home} exact />
      <Route path="/schedule" component={Schedule} />
    </div>
  );
}

export default App;
