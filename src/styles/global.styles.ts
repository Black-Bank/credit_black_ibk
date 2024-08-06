import { createGlobalStyle } from 'styled-components';
import themes from './themes.styles';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: ${themes.colors.dark};
        color: ${themes.colors.white};
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${themes.colors.white};
    }
`;
