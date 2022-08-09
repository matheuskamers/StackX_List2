import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #09090A;
        --white: #FFFFFF;
        --white-400: #EDEDED;
        --white-600: #F0F0F0;

        --grey-300: #C6C6D3;
        --grey-400: #A1A1AA;

        --dark-300: #3F3F46;
        --dark-400: #27272A;
        --dark-500: #3E3E41;
        --dark-600: #1C1C1C;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialised;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
