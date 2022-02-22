import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; //用于记录页面的性能

ReactDOM.render(
  <React.StrictMode> // 检查代码里不合理的地方，例如ref=""(字符串形式的ref)
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
s
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
reportWebVitals();
