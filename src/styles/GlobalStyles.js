import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

const GlobalStyles = createGlobalStyle`
  /* ${modernNormalize} */

:root {
  --bg: #0A0A11
} 

body {
    margin: 0;
    font-family: 'Poppins', sans-serif; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    
  }

  p,
  h1, 
  h2,  
  h3 {
    margin: 0;
    padding: 0;
  }

  ul, 
  ol, 
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
