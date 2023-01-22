import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css';
import App from './App';
import PublicationsState from './context/publications/PublicationsState';
import PublicationState from './context/publication/PublicationState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicationsState>
      <PublicationState>
        <App />
      </PublicationState>
    </PublicationsState>
  </React.StrictMode>
);
