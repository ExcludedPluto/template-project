import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
);
