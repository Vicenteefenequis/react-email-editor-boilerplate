import React from 'react';
import ReactDOM from 'react-dom/client';
import EmailEditorBoilerplate from './EmailEditor';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EmailEditorBoilerplate />
  </React.StrictMode>
);
