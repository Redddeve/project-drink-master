import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import { device } from './device';
import fontObject from './fonts';
import { darkTheme, lightTheme } from './theme';

const { regular, medium, semiBold } = fontObject;

const GlobalStyles = createGlobalStyle`
  
@font-face {
  font-family: 'Manrope';
  src: url(${regular}), url(${semiBold}) ;
  font-weight: 400, 600;
}
@font-face {
  font-family: 'Manrope';
  src: url(${medium}) ;
  font-weight: 500;
}

:root {
  // colors
  --white: #F3F3F3;
  --sub-white: #FAFAFA;
  --transp-white: #F3F3F380; // rgba(243, 243, 243, 0.80)
  --transp-not-found:#F3F3F310;
  --transp-disabled:#F3F3F330;
  --dark: #0A0A11;
  --transp-dark: #0A0A1166; // light theme
  --black: #161F37;
  --gray: #434D67;
  --blue: #4070CD;
  --transp-blue: #4070CD80;
  --active-blue: #253D6F;
  --green: #BCE6D2;
  --correct-green: #3CBC81;
  --error-red: #DA1414;

  // borders
  --dark-theme-common: 1px solid #F3F3F380;
  --light-theme-common: 1px solid #0A0A1180;
  --correct: 1px solid #3CBC8180;
  --error: 1px solid #DA141480;

  // transitions
  --tran-fast: 0.3s ease
} 

body {
  color: ${props =>
    props.theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
  background-color: ${props =>
    props.theme === 'dark'
      ? darkTheme.background.main
      : lightTheme.background.main};
  font-family: 'Manrope', sans-serif; 
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
   

  @media ${device.tablet} {
      font-size: 16px;
      line-height: 1.38;
    }
  }
  

  p,
  h1, 
  h2,  
  h3,
  h4,
  h5,
  h6 {
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
    height: auto;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }
`;

export default GlobalStyles;
