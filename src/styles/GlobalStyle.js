import { createGlobalStyle } from 'styled-components';
import EksellDisplayWeb from '../fonts/EksellDisplayWeb-Stencil.woff2';

export default createGlobalStyle`
body {
  @font-face {
    font-family: 'EksellDisplayWeb-Stencil';
    src: url(${EksellDisplayWeb}) format('woff2');
    font-style: normal;
    font-display: swap;
  }
}

/* Css Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --swiper-theme-color: #fff;
  button {
    outline: none;
  }

}
html,
body {
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.80);
  font-family: "Roboto Regular", sans-serif;
  color: #fff;
  font-size: 90%;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

::selection {
  width: 100%;
  display: flex;
  color: #fff;
}
@media (max-width: 1092px) {
  html {
    font-size: 62.5%;
}
@media (max-width: 886px) {
  html {
    font-size: 58%;
  }
`;
