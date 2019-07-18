import { createGlobalStyle } from 'styled-components';
import woff2 from '../public/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../public/fonts/open-sans-v16-latin-regular.woff';

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F4F4F4;
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    color: #222;
  }

  a {
    text-decoration: none;
  }

  html,
  body {
    height: 100%;
  }
`;

export default GlobalStyle;
