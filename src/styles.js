import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#FFF',
  lighter: '#F4F4F4',
  light: '#EEE',
  regular: '#666',
  dark: '#999',
  darker: '#303030',
  black: '#000',
  gray: '#222',
};

// Global Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.lighter};
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    color: ${colors.gray};
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
