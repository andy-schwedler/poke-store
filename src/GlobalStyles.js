import { createGlobalStyle } from "styled-components";
import pokeSolid from "./components/assets/Pokemon-Solid.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "pokeSolid";
    src: local("pokeSolid"), 
    url(${pokeSolid}) format("truetype");}


body {
    display: flex;
    justify-content: center;
    width: 90%;
  }
  `;

export default GlobalStyle;

/*@font-face {
    font-family: "pokeSolid";
    src: local("pokeSolid"), 
    url(${pokeSolid}) format("truetype");
  }*/
