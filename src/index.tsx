import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/global.css';
import { Routers } from './router/App';
// import './assets/css/font-size.css';  // if is an phone app, you can use this

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
