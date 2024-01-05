import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import BrowserRouter only if it's not already imported in App.jsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
