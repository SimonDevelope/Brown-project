import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToggleMenuBarModalProvider } from './stores/utilContext';

ReactDOM.render(
  <BrowserRouter>
    <ToggleMenuBarModalProvider>
      <App />
    </ToggleMenuBarModalProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
