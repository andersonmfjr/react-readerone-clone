import React from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from './styles';
import Sidebar from './components/Sidebar';

// Main page
const App = () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    });
  }

  return (
    <div>
      <Sidebar />
      <p>Hello World!</p>
      <GlobalStyle />
    </div>
  );
};

export default hot(App);
