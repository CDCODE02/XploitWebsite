import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("CRITICAL ERROR: 'root' element not found in DOM.");
  throw new Error("Could not find root element to mount to");
}

console.log("Mounting React application...");

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("React mounted successfully.");
} catch (error) {
  console.error("Error mounting React app:", error);
}