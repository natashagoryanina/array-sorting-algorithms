import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
     body {
        padding: 30px 30px;
        background-image: linear-gradient(
            to right,
            #02b17c,
            #0217d3,
            rgb(21, 115, 255)
        );
        font-family: 'Radio Canada', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;