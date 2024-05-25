import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

// Create the root to encapsulate the app to be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

