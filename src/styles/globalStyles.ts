import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
    }
    
    * {
        padding: 0;
        margin: 0;
        font-family: Poppins;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        background-color: var(--background-wrapper);
    }

    *::-webkit-scrollbar {
        width: 4px;            
    }

    *::-webkit-scrollbar-track {
        background: var(--background);       
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--gray);   
        border-radius: 2px;      
    }

    :root {
        --background-wrapper: #121214;
        --background: #1A1A1D;
        --title: rgba(153, 86, 246, 0.5);
        --purple: #9956F6;
        --white: #FFFFFF;
        --gray: #A8A8A8;
    }
`;
