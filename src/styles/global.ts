import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: 'antialiased',
    }

    body, input, button, textarea {
        font: "500 1rem 'Roboto', sans-serif",
    }

    :focus {
        outline: 0,
    }
`