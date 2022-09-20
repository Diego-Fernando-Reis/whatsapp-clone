import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Droid Serif";
    font-family: 'Roboto', sans-serif;
  }

  html, body{
    height: 100%;background-color: #111B21;
  }
`;
 
export default GlobalStyle;