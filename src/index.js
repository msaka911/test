import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import AlertTemplate from 'react-alert-template-basic'
import { types, positions, Provider as AlertProvider } from 'react-alert'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider type={types.SUCCESS}  position={positions.MIDDLE} template={AlertTemplate}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AlertProvider>
  </Provider>
);

