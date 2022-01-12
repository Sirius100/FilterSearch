import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root2')
);
ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById('root2')
);
  ReactDOM.render(
    <React.StrictMode>
      <App4/>
    </React.StrictMode>,
    document.getElementById('root2')
)
