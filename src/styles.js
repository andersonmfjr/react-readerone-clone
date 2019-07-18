import { createGlobalStyle } from 'styled-components';

// Global Style
const GlobalStyle = createGlobalStyle`
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
