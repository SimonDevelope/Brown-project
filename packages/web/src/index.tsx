import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ToggleMenuBarModalProvider } from './stores/utilContext';

ReactDOM.render(
  <ToggleMenuBarModalProvider>
    <App />
  </ToggleMenuBarModalProvider>,
  document.getElementById('root'),
);
