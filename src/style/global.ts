import { createGlobalStyle } from 'styled-components';
import themeDefaults from './themeDefaults';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline:0;  
  }

@font-face {
  font-family: 'OpenSans';
  src: url('../assets/fonts/static/OpenSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

  @font-face {
    font-family: 'OpenSans';
    src: url('../assets/fonts/static/OpenSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url('../assets/fonts/static/OpenSans-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }



  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;
    height: 100vh;
    width: 100vw;

  }

  h1,h2,h3,h4,strong{
    font-weight: 500;
  }

  a{
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;   
    
  }

  input, select {
    background-color: #fff!important;
  }

  /* @media (max-width: ${themeDefaults.breakpoints.xl}) {
    body, input, button {
      font-size: 12px;
    }
  } */

  /* @media (max-width: ${themeDefaults.breakpoints.lg}) {
    body, input, button {
      font-size: 10px;
    }
  } */
`;
