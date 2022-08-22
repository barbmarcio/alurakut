import { createGlobalStyle } from "styled-components";
import { AlurakutStyles } from "../src/lib/Commons";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-family: sans-serif;
    background-color: #D9E6F6;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  ${AlurakutStyles}
`;

export default GlobalStyle;
