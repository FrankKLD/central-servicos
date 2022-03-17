import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  .DontShowIt {
    display: none;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

:root {
  --THEME_COLOR_001: #04AEAD;
  --THEME_COLOR_002: #F9F9F9;
  --THEME_COLOR_003: #FFFFFF;
  --THEME_COLOR_004: #64646C;
  --THEME_COLOR_005: #8C8C8E;
}
`;
