import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    @media(max-width:1080px) {
        font-size:93.75%;
    }

    @media(max-width:720px) {
        font-size:87.5%;
    }

    @media(max-width:480px) {
        font-size:83.5%;
    }

}

body {
        background: ${({ theme }) => theme.colors.graytheme};
        -webkit-font-smoothing:antialiased;
        overflow-x: hidden;
    }

body,input,textarea,button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,Strong {
    font-weight: 600;
}

button {
    cursor: pointer;
 }
`

export default GlobalStyles;