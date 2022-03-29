import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: var(--background);
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
  --THEME_COLOR_001: #06A78D; 
  --THEME_COLOR_002: #FFFFFF; 
  --THEME_COLOR_003: #FFFFFF; 
  --THEME_COLOR_004: #FFFFFF; 
  --THEME_COLOR_005: #FFFFFF; 
  --THEME_COLOR_006: #FFFFFF; 
  --THEME_COLOR_007: #FFFFFF; 
  --THEME_COLOR_008: #FFFFFF; 
  --THEME_COLOR_008: #FFFFFF;

  --background: var(--THEME_COLOR_008);
}
`;
