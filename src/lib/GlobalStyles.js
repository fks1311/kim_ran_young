"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  html {
    ${reset};
    font-size:62.5%;
    padding: 2em 5em;
    background-color: black;
  }
`;

export default GlobalStyles;
