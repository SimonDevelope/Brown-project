import React from 'react';
import './components/style/reset.scss';
import Home from './components/home/home';
import './components/style/app.scss';

const App: React.FC = () => {
  return (
    <div className="total-view-port">
      <Home />
    </div>
  );
};

export default App;
