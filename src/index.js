// Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Creating root element and rendering App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
