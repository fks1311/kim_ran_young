"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  html {
    ${reset};
    background: beige;
  }
`;

export default GlobalStyles;
