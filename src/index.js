import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className=" bg-gray-50 box-border overflow-x-hidden">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
