import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import App2 from './App2.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root2')
);
