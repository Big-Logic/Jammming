import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body, input {
        font-size: 1.8rem;
        line-height: 1.7;
        font-family: "Dosis", sans-serif;
        font-weight: 400;
    }

    


    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
        font-family: "Dosis", sans-serif;
    }

    button {
        box-shadow: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.6rem;
    }

`;

export default GlobalStyle;
