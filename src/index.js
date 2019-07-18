import React from 'react';
import { render } from 'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => {
        console.log('SW registered');
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

const root = document.createElement('div');
document.body.append(root);

render(<App />, root);
