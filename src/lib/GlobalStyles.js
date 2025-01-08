"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  html {
    ${reset};
    font-size: 62.5%;
    padding: 2em 3em;
    background-color: #0b0c0f;
  }
`;

export default GlobalStyles;
