import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body {
   @font-face {
    font-family: 'EksellDisplayWeb-Stencil';
    src: url('/fonts/EksellDisplayWeb/EksellDisplayWeb-Stencil.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  }
}

* {
  font-family: "Roboto", sans-serif;
  color: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --swiper-theme-color: #fff;
  button {
    outline: none;
  }
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
