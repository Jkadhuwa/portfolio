import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <div className=" bg-gray-50 box-border overflow-x-hidden">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
