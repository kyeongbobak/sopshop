import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  img{
    vertical-align: top;
  }

  a{
    text-decoration: none;
    color: initial;
  }

  .a11y-hidden{

  }
`;

export default GlobalStyle;
