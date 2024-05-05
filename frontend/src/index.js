import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/user-context/UserContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SetupAxiosIncerceptor from "../src/api/config/SetupAxiosInterceptor"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

SetupAxiosIncerceptor();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
