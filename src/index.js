import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.jsによるAppコンポーネント
import App from './App';
import reportWebVitals from './reportWebVitals';

// Appコンポーネントを取り込む
ReactDOM.render(
  <React.StrictMode>
    <App msg="Hello App." />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
