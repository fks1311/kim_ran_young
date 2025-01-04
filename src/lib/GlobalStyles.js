"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  html {
    ${reset};
    // background-color: #042826;
    padding: 2rem;
    background-color: black;
  }
`;

export default GlobalStyles;
