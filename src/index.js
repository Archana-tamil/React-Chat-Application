import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "./styles.css";
import App from './App';
import store from '../src/redux/chatStore';

// Create a root and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
