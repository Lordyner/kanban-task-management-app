import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StoreProvider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </StoreProvider>
);


