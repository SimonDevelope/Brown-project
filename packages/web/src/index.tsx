import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ToggleMenuBarModalProvider } from './stores/utilContext';
import { TodoContextProvider } from './stores/todosContext';

ReactDOM.render(
  <ToggleMenuBarModalProvider>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </ToggleMenuBarModalProvider>,
  document.getElementById('root'),
);
