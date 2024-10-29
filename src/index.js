import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './w3.css';
import './nav_site.css';
import './site_header.css';
import './site_footer.css';
import './site_service.css';
import './service_pages_style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
