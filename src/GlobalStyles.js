import { createGlobalStyle } from "styled-components";
import pokeSolid from "./components/assets/Pokemon-Solid.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "pokeSolid";
    src: local("pokeSolid"), 
    url(${pokeSolid}) format("truetype");}

    #root{
      align-items: center;
    }

body {
    display: flex;
    justify-content: center;
    }

  `;

export default GlobalStyle;
